var expect = require('chai').expect;

describe('测试常规对象相关', function () {

    it('{foo: "baz"} 拥有属性 foo，且其值为 baz 而不是 bar，值为string类型', function () {
        // 注意：property 方法改变了断言返回值，返回的是这个属性对应的值，而不再是原始的对象。
        expect({foo: 'baz'}).to.have.property('foo')
            .that.is.a('string')
            .and.equal('baz')
            .and.not.equal('bar');

        // 简单判断对象是否有某个属性和属性值的方式
        expect({foo: 'baz'}).to.have.property('foo', 'baz');

        // Asserts that the target has an own property name
        expect({foo: 'baz'}).to.have.ownProperty('foo');
        expect({foo: 'baz'}).to.not.have.ownProperty('foo2');
    });

    it('keys测试', function () {
        // any 和 all 都需要在断言句中间出现，否则默认为 all

        // any：至少包含一个，配合 have 或 contain 使用
        expect({foo: 1, bar: 2}).to.have.any.keys('foo', 'baz');
        expect({foo: 1, bar: 2}).to.have.any.keys('foo');
        expect({foo: 1, bar: 2}).to.contain.any.keys('bar', 'baz');
        expect({foo: 1, bar: 2}).to.contain.any.keys(['foo']);
        expect({foo: 1, bar: 2}).to.contain.any.keys({'foo': 6});

        // all：全部包含，配合 have 或 contain 使用
        expect({foo: 1, bar: 2}).to.have.all.keys(['bar', 'foo']);
        expect({foo: 1, bar: 2}).to.have.all.keys({'bar': 6, 'foo': 7});
        expect({foo: 1, bar: 2, baz: 3}).to.contain.all.keys(['bar', 'foo']);
        expect({foo: 1, bar: 2, baz: 3}).to.contain.all.keys({'bar': 6});
    });

    it('members 测试', function () {
        expect([1, 2, 3]).to.include.members([3, 2]);
        expect([1, 2, 3]).to.not.include.members([3, 2, 8]);

        expect([4, 2]).to.have.members([2, 4]);
        expect([5, 2]).to.not.have.members([5, 2, 1]);

        expect([{id: 1}]).to.deep.include.members([{id: 1}]);
    });

    it('oneOf(list) 测试', function () {
        expect('a').to.be.oneOf(['a', 'b', 'c']);
        expect(9).to.not.be.oneOf(['z']);
        expect([3]).to.not.be.oneOf([1, 2, [3]]);

        var three = [3];

        // for object-types, contents are not compared
        expect(three).to.not.be.oneOf([1, 2, [3]]);

        // comparing references works
        expect(three).to.be.oneOf([1, 2, three]);
    });

    it('deep referencing 属性测试', function () {
        var deepObj = {
            green: {
                tea: 'matcha'
            },
            teas: ['chai', 'matcha', {
                tea: 'konacha'
            }]
        };

        expect(deepObj).to.have.deep.property('green.tea', 'matcha');
        expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
        expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
        expect(deepObj).to.have.property('teas')
            .that.is.an('array')
            .with.deep.property('[2]')
            .that.deep.equals({tea: 'konacha'});

        var arr = [
            ['chai', 'matcha', 'konacha'],
            [{tea: 'chai'}, {tea: 'matcha'}, {tea: 'konacha'}]
        ];

        expect(arr).to.have.deep.property('[0][1]', 'matcha');
        expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
    });

    it('deep.property时. 和 [] 的转义', function () {
        var css = {'.link[target]': 42};
        expect(css).to.have.property('.link[target]', 42);

        // . 和 [] 等在设置了deep标记之后，需要自行处理转义
        var deepCss = {'.link': {'[target]': 42}};
        expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
    });

    it('两个对象是否相等', function () {
        var foo = {bar: 'baz'};

        // 比较两个对象是否相等要使用 deep
        expect(foo).to.deep.equal({bar: 'baz'});
        expect(foo).to.not.equal({bar: 'baz'});

        // deep.equal === eql
        expect(foo).to.eql({bar: 'baz'});
    });

    it('{} 是一个空对象', function () {
        var foo = {};

        // object 类型
        expect(foo).to.be.a('object');

        // 不是null也不是undefined
        expect(foo).to.exist;

        // 不包含key值
        expect(foo).to.be.empty;
    });

});

describe('测试高级对象相关', function () {

    it('测试某个对象是否有某个函数', function () {
        function Klass() {
            this.foo = 'foo';
            this.inFunc = function () {

            };
        }

        Klass.prototype.bar = function () {
        };

        Klass.outFunc = function () {
        };

        expect(Klass).to.respondTo('bar');
        expect(Klass).to.not.respondTo('inFunc');
        expect(Klass).to.not.respondTo('foo');

        expect(Klass).itself.to.respondTo('outFunc');
        expect(Klass).itself.to.not.respondTo('inFunc');

        var klassObj = new Klass();
        expect(klassObj).to.respondTo('bar');
        expect(klassObj).to.respondTo('inFunc');
        expect(klassObj).to.not.respondTo('foo');
    });

    it('测试某个函数的返回值是否为真值', function () {
        function compare(num) {
            return num > 0;
        }

        // Asserts that the target passes a given truth test.
        expect(1).to.satisfy(compare);
        expect(0).to.not.satisfy(compare);
    });

    it('测试目标是否是某个类的对象', function () {
        function Tea(name) {
            this.name = name;
        }

        var chai = new Tea('chai');

        expect(chai).to.be.an.instanceof(Tea);
        expect([1, 2, 3]).to.be.instanceof(Array);
    });

});

var expect = require('chai').expect;

describe('测试对象相关', function () {

    it('{foo: "baz"} 拥有属性 foo，且其值为 baz 而不是 bar，值为string类型', function () {
        // 注意：property 方法改变了断言返回值，返回的是这个属性对应的值，而不再是原始的对象。
        expect({foo: 'baz'}).to.have.property('foo')
            .that.is.a('string')
            .and.equal('baz')
            .and.not.equal('bar');

        // 简单判断属性和属性值的方式
        expect({foo: 'baz'}).to.have.property('foo', 'baz');
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
            .that.deep.equals({ tea: 'konacha' });

        var arr = [
            ['chai', 'matcha', 'konacha'],
            [{tea: 'chai'}, {tea: 'matcha'}, {tea: 'konacha'}]
        ];

        expect(arr).to.have.deep.property('[0][1]', 'matcha');
        expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
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

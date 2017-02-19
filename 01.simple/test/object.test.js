var expect = require('chai').expect;

describe('测试对象相关', function () {

    it('{foo: "baz"} 拥有属性 foo，且其值为 baz 而不是 bar', function () {
        expect({foo: 'baz'}).to.have.property('foo')
            .and.equal('baz')
            .and.not.equal('bar');

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

var expect = require('chai').expect;

describe('测试对象相关', function () {

    it('{foo: "baz"} 拥有属性 foo，且其值为 baz 而不是 bar', function () {
        expect({foo: 'baz'}).to.have.property('foo')
            .and.equal('baz')
            .and.not.equal('bar');
    });

    it('两个对象是否相等', function () {
        var foo = {bar: 'baz'};

        // 比较两个对象是否相等要使用 deep
        expect(foo).to.deep.equal({bar: 'baz'});
        expect(foo).to.not.equal({bar: 'baz'});

        // deep.equal === eql
        expect(foo).to.eql({bar: 'baz'});
    });

});

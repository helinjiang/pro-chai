var expect = require('chai').expect;

describe('测试对象相关', function () {

    it('{foo: "baz"} 拥有属性 foo，且其值为 baz 而不是 bar', function () {
        expect({foo: 'baz'}).to.have.property('foo')
            .and.equal('baz')
            .and.not.equal('bar');
    });

});

var expect = require('chai').expect;

describe('字符串-类型', function () {
    var name;

    beforeEach(function () {
        name = 'He';
    });

    it('"He" is a String', function () {
        expect(name).to.be.a('string');
    });
});

describe('字符串-相同', function () {
    var name;

    beforeEach(function () {
        name = 'He';
    });

    // equal(value)
    it('"He" is equal "He" ', function () {
        expect(name).to.equal('He');
    });
});

describe('字符串-不相同', function () {
    var name;

    beforeEach(function () {
        name = 'He';
    });

    it('"He" is not equal "She" ', function () {
        expect(name).to.not.equal('She');
    });

});


var expect = require('chai').expect;

describe('测试单个字符串的值', function () {
    var str, strEmpty, strNull, strUndefined, obj;

    beforeEach(function () {
        str = 'He';
        strEmpty = '';
        strNull = null;
        strUndefined = undefined;
        obj = {};
    });

    // 判断 [str] 为 string 类型
    it('判断 [str] 为 string 类型: a', function () {
        // a 和 an 都是一样的
        expect(str).to.be.a('string');
        expect(str).to.be.an('string');
    });

    // 判断 [obj] 不为 string 类型
    it('判断 [obj] 不为 string 类型', function () {
        expect(obj).to.not.a('string');
    });

    // 判断 [str] 为真值（truthy），它会判断: !!str
    it('判断 [str] 为真值（truthy）', function () {
        expect(str).to.be.ok;
    });

    // 判断 [strEmpty] 不为真值（truthy），它会判断: !!strEmpty
    it('判断 [strEmpty] 不为真值（truthy）', function () {
        expect(strEmpty).to.not.be.ok;
    });

    // 判断 [str] 不等于 true，它会判断: str===true
    it('判断 [str] 不等于 true', function () {
        expect(str).to.not.be.true;
    });

    // 判断 [str] 不等于 false，它会判断: str===false
    it('判断 [str] 不等于 false', function () {
        expect(str).to.not.be.false;
    });

    // 判断 [str] 包含单词 H 和 e
    it('判断 [str] 包含单词 H 和 e', function () {
        // include 和 contain 都是一样的
        expect(str).to.contain('H');
        expect(str).to.include('e');
    });

});

// describe('字符串之间的比较', function () {
//     var strA, strB, strEmpty, strNull, strUndefined;
//
//     beforeEach(function () {
//         name = 'He';
//     });
//
//     // equal(value)
//     it('"He" is equal "He" ', function () {
//         expect(name).to.equal('He');
//     });
//
//     it('"He" is not equal "She" ', function () {
//         expect(name).to.not.equal('She');
//     });
// });
//

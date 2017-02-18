var expect = require('chai').expect;

describe('测试单个字符串的值', function () {
    var str, strEmpty, strNumber, strBoolean, strNull, strUndefined, strObj;

    // 每个用例执行之前，都重新初始化值
    beforeEach(function () {
        str = 'He';
        strEmpty = '';
        strNumber = 1;
        strBoolean = true;
        strNull = null;
        strUndefined = undefined;
        strObj = {};
    });

    it('[str] 和 [strEmpty] 为 string 类型，但 [strNumber]、[strObj] 等皆不是', function () {
        // a 和 an 都是一样的
        expect(str).to.be.a('string');
        expect(strEmpty).to.be.an('string');

        expect(strNumber).to.not.an('string');
        expect(strObj).to.not.a('string');
    });

    it('[strNull] 为 null 类型，且 [strUndefined] 不为 null 类型', function () {
        expect(strNull).to.be.null;
        expect(strUndefined).to.not.be.null;
    });

    it('[strUndefined] 为 undefined 类型，且 [strNull] 不为 undefined 类型', function () {
        expect(strUndefined).to.be.undefined;
        expect(strNull).to.not.be.undefined;
    });

    it('[str] 为 NaN，且 [strNumber] 不为 NaN', function () {
        expect(str).to.be.NaN;
        expect(strNumber).to.not.be.NaN;
    });

    it('[str] 为真值（truthy），但不等于 true', function () {
        expect(str).to.be.ok;
        expect(str).to.not.be.true;
    });

    it('[strEmpty] 不为真值（truthy），且不等于 false', function () {
        expect(strEmpty).to.not.be.ok;
        expect(strEmpty).to.not.be.false;
    });

    it('[str] 包含单词 H 和 e', function () {
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

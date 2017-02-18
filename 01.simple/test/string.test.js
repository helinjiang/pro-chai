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
    it('判断 [str] 为 string 类型', function () {
        expect(str).to.be.a('string');
    });

    // 判断 [obj] 不为 string 类型
    it('判断 [obj] 不为 string 类型', function () {
        expect(obj).to.not.a('string');
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

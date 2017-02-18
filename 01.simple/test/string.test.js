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

    // 判断 [str] 为 string 类型: a
    it('判断 [str] 为 string 类型: a', function () {
        // a 和 an 都是一样的
        expect(str).to.be.a('string');
    });

    // 判断 [str] 为 string 类型: an
    it('判断 [str] 为 string 类型: an', function () {
        // a 和 an 都是一样的
        expect(str).to.be.an('string');
    });

    // 判断 [obj] 不为 string 类型
    it('判断 [obj] 不为 string 类型', function () {
        expect(obj).to.not.a('string');
    });

    // 判断 [str] 为真值（truthy）
    it('判断 [str] 为真值（truthy）', function () {
        expect(str).to.be.ok;
    });

    // 判断 [str] 不等于 true
    it('判断 [str] 不等于 true', function () {
        expect(str).to.not.be.true;
    });

    // 判断 [strEmpty] 不为真值（truthy）
    it('判断 [strEmpty] 不为真值（truthy）', function () {
        expect(strEmpty).to.not.be.ok;
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

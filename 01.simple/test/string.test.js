var expect = require('chai').expect;

describe('测试单个字符串相关', function () {
    var str, strEmpty, strNumber, strBoolean, strNull, strUndefined, strObj;

    // 每个用例执行之前，都重新初始化值
    beforeEach(function () {
        str = 'Chai';
        strEmpty = '';
        strNumber = 1;
        strBoolean = true;
        strNull = null;
        strUndefined = undefined;
        strObj = {};
    });

    it('[str] 与 "Chai" 相等，与 "chai" 不相等', function () {
        // 严格相等 ===
        expect(str).to.equal('Chai');
        expect(str).to.not.equal('chai');
    });

    it('[str]/[strEmpty] 为 string 类型，但 [strNumber]/[strObj] 等皆不是', function () {
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

    it('[str] 包含单词 C 和 ha，但不包含 c', function () {
        expect(str).to.contain('C');
        expect(str).to.contain('ha');
        expect(str).to.not.contain('c');

        expect(str).to.include('C');
        expect(str).to.include('ha');
        expect(str).to.not.include('c');

        expect(str).to.have.string('C');
        expect(str).to.have.string('ha');
        expect(str).to.not.have.string('c');

        expect(str).to.match(/C/);
        expect(str).to.match(/ha/);
        expect(str).to.not.match(/c/);
    });

    it('[str]/[strEmpty] 不是 null 或 undefined，但 [strNull]/[strUndefined] 皆是', function () {
        expect(str).to.exist;
        expect(strEmpty).to.exist;

        expect(strUndefined).to.not.exist;
        expect(strNull).to.not.exist;
    });

    it('[str] 不为空，[strEmpty] 等为空', function () {
        expect(str).to.not.be.empty;
        expect(strEmpty).to.be.empty;

        // 判断长度是否为0，数组和字符串检查其length属性，而对象则检查其key值的数量
        expect([]).to.be.empty;
        expect('').to.be.empty;
        expect({}).to.be.empty;
        expect({'name': 'Chai'}).to.not.be.empty;
    });

    it('[str] 长度为4，大于1，小于5，在1和5之间', function () {
        expect(str).to.have.lengthOf(4);
        expect(str).to.have.length.above(1);
        expect(str).to.have.length.below(5);
        expect(str).to.have.length.within(1, 5);

        expect(str).to.have.length.of.at.least(4);
    });

});

describe('字符串之间的比较', function () {
    var strA, strB;

    // 每个用例执行之前，都重新初始化值
    beforeEach(function () {
        strA = 'strA';
        strB = 'strB';
    });

    it('[strA] 等于 [strA]，但不等于 [strB]', function () {
        expect(strA).to.equal(strA);
        expect(strA).to.not.equal(strB);
    });
});


var expect = require('chai').expect;

describe('测试数值相关', function () {
    var n0, n1, nStr1, nNaN;

    // 每个用例执行之前，都重新初始化值
    beforeEach(function () {
        n0 = 0;
        n1 = 1;
        nStr1 = '1';
        nNaN = 'nNaN';
    });

    it('[n0] 与 [n0] 相等，与 [n1] 不相等', function () {
        // 严格相等 ===
        expect(n0).to.equal(n0);
        expect(n0).to.not.equal(n1);
        expect(n1).to.not.equal(nStr1);
    });

    it('[n0] 是数值类型，不是字符串类型', function () {
        expect(n0).to.be.a('number');
        expect(n0).to.not.be.a('string');
    });

    it('[n0] 不是 NaN，[nNaN] 是 NaN', function () {
        expect(n0).to.not.be.NaN;
        expect(nNaN).to.be.NaN;
    });

    it('[n0] 大于 -1，但不大于 0', function () {
        expect(n0).to.be.above(-1);
        expect(n0).to.not.be.above(0);
    });

    it('[n0] 小于 1，但不小于 0', function () {
        expect(n0).to.be.below(1);
        expect(n0).to.not.be.below(0);
    });

    it('[n0] 大于或等于 0，不能说大于或等于 1', function () {
        expect(n0).to.be.at.least(0);
        expect(n0).to.not.be.at.least(1);
    });

    it('[n0] 小于或等于 0，不能说小于或等于 -1', function () {
        expect(n0).to.be.at.most(0);
        expect(n0).to.not.be.at.most(-1);
    });

    it('[n0] 在-1到1之间，也在-1到0之间', function () {
        expect(n0).to.be.within(-1, 1);
        expect(n0).to.be.within(-1, 0);
    });
});

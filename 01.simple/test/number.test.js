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

});

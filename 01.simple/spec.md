# TOC
   - [测试数值相关](#)
   - [测试常规对象相关](#)
   - [测试高级对象相关](#)
   - [测试单个字符串相关](#)
   - [字符串之间的比较](#)
<a name=""></a>
 
<a name=""></a>
# 测试数值相关
[n0] 与 [n0] 相等，与 [n1] 不相等.

```js
// 严格相等 ===
expect(n0).to.equal(n0);
expect(n0).to.not.equal(n1);
expect(n1).to.not.equal(nStr1);
```

[n0] 是数值类型，不是字符串类型.

```js
expect(n0).to.be.a('number');
expect(n0).to.not.be.a('string');
```

[n0] 不是 NaN，[nNaN] 是 NaN.

```js
expect(n0).to.not.be.NaN;
expect(nNaN).to.be.NaN;
```

[n0] 大于 -1，但不大于 0.

```js
expect(n0).to.be.above(-1);
expect(n0).to.not.be.above(0);
```

[n0] 小于 1，但不小于 0.

```js
expect(n0).to.be.below(1);
expect(n0).to.not.be.below(0);
```

[n0] 大于或等于 0，不能说大于或等于 1.

```js
expect(n0).to.be.at.least(0);
expect(n0).to.not.be.at.least(1);
```

[n0] 小于或等于 0，不能说小于或等于 -1.

```js
expect(n0).to.be.at.most(0);
expect(n0).to.not.be.at.most(-1);
```

[n0] 在-1到1之间，也在-1到0之间.

```js
expect(n0).to.be.within(-1, 1);
expect(n0).to.be.within(-1, 0);
```

1.5 符合 1 (+/- 0.5) 要求，但不符合 1 (+/- 0.1) 要求.

```js
expect(1.5).to.be.closeTo(1, 0.5);
expect(1.5).to.not.be.closeTo(1, 0.1);
```

<a name=""></a>
# 测试常规对象相关
{foo: "baz"} 拥有属性 foo，且其值为 baz 而不是 bar，值为string类型.

```js
// 注意：property 方法改变了断言返回值，返回的是这个属性对应的值，而不再是原始的对象。
expect({foo: 'baz'}).to.have.property('foo')
    .that.is.a('string')
    .and.equal('baz')
    .and.not.equal('bar');
// 简单判断对象是否有某个属性和属性值的方式
expect({foo: 'baz'}).to.have.property('foo', 'baz');
// Asserts that the target has an own property name
expect({foo: 'baz'}).to.have.ownProperty('foo');
expect({foo: 'baz'}).to.not.have.ownProperty('foo2');
```

keys测试.

```js
// any 和 all 都需要在断言句中间出现，否则默认为 all
// any：至少包含一个，配合 have 或 contain 使用
expect({foo: 1, bar: 2}).to.have.any.keys('foo', 'baz');
expect({foo: 1, bar: 2}).to.have.any.keys('foo');
expect({foo: 1, bar: 2}).to.contain.any.keys('bar', 'baz');
expect({foo: 1, bar: 2}).to.contain.any.keys(['foo']);
expect({foo: 1, bar: 2}).to.contain.any.keys({'foo': 6});
// all：全部包含，配合 have 或 contain 使用
expect({foo: 1, bar: 2}).to.have.all.keys(['bar', 'foo']);
expect({foo: 1, bar: 2}).to.have.all.keys({'bar': 6, 'foo': 7});
expect({foo: 1, bar: 2, baz: 3}).to.contain.all.keys(['bar', 'foo']);
expect({foo: 1, bar: 2, baz: 3}).to.contain.all.keys({'bar': 6});
```

members 测试.

```js
expect([1, 2, 3]).to.include.members([3, 2]);
expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
expect([4, 2]).to.have.members([2, 4]);
expect([5, 2]).to.not.have.members([5, 2, 1]);
expect([{id: 1}]).to.deep.include.members([{id: 1}]);
```

oneOf(list) 测试.

```js
expect('a').to.be.oneOf(['a', 'b', 'c']);
expect(9).to.not.be.oneOf(['z']);
expect([3]).to.not.be.oneOf([1, 2, [3]]);
var three = [3];
// for object-types, contents are not compared
expect(three).to.not.be.oneOf([1, 2, [3]]);
// comparing references works
expect(three).to.be.oneOf([1, 2, three]);
```

deep referencing 属性测试.

```js
var deepObj = {
    green: {
        tea: 'matcha'
    },
    teas: ['chai', 'matcha', {
        tea: 'konacha'
    }]
};
expect(deepObj).to.have.deep.property('green.tea', 'matcha');
expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
expect(deepObj).to.have.property('teas')
    .that.is.an('array')
    .with.deep.property('[2]')
    .that.deep.equals({tea: 'konacha'});
var arr = [
    ['chai', 'matcha', 'konacha'],
    [{tea: 'chai'}, {tea: 'matcha'}, {tea: 'konacha'}]
];
expect(arr).to.have.deep.property('[0][1]', 'matcha');
expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
```

deep.property时. 和 [] 的转义.

```js
var css = {'.link[target]': 42};
expect(css).to.have.property('.link[target]', 42);
// . 和 [] 等在设置了deep标记之后，需要自行处理转义
var deepCss = {'.link': {'[target]': 42}};
expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
```

两个对象是否相等.

```js
var foo = {bar: 'baz'};
// 比较两个对象是否相等要使用 deep
expect(foo).to.deep.equal({bar: 'baz'});
expect(foo).to.not.equal({bar: 'baz'});
// deep.equal === eql
expect(foo).to.eql({bar: 'baz'});
```

{} 是一个空对象.

```js
var foo = {};
// object 类型
expect(foo).to.be.a('object');
// 不是null也不是undefined
expect(foo).to.exist;
// 不包含key值
expect(foo).to.be.empty;
```

<a name=""></a>
# 测试高级对象相关
测试某个对象是否有某个函数.

```js
function Klass() {
    this.foo = 'foo';
    this.inFunc = function () {
    };
}
Klass.prototype.bar = function () {
};
Klass.outFunc = function () {
};
expect(Klass).to.respondTo('bar');
expect(Klass).to.not.respondTo('inFunc');
expect(Klass).to.not.respondTo('foo');
expect(Klass).itself.to.respondTo('outFunc');
expect(Klass).itself.to.not.respondTo('inFunc');
var klassObj = new Klass();
expect(klassObj).to.respondTo('bar');
expect(klassObj).to.respondTo('inFunc');
expect(klassObj).to.not.respondTo('foo');
```

测试某个函数的返回值是否为真值.

```js
function compare(num) {
    return num > 0;
}
// Asserts that the target passes a given truth test.
expect(1).to.satisfy(compare);
expect(0).to.not.satisfy(compare);
```

测试目标是否是某个类的对象.

```js
function Tea(name) {
    this.name = name;
}
var chai = new Tea('chai');
expect(chai).to.be.an.instanceof(Tea);
expect([1, 2, 3]).to.be.instanceof(Array);
```

<a name=""></a>
# 测试单个字符串相关
[str] 与 "Chai" 相等，与 "chai" 不相等.

```js
// 严格相等 ===
expect(str).to.equal('Chai');
expect(str).to.not.equal('chai');
```

[str]/[strEmpty] 为 string 类型，但 [strNumber]/[strObj] 等皆不是.

```js
// a 和 an 都是一样的
expect(str).to.be.a('string');
expect(strEmpty).to.be.an('string');
expect(strNumber).to.not.an('string');
expect(strObj).to.not.a('string');
```

[strNull] 为 null 类型，且 [strUndefined] 不为 null 类型.

```js
expect(strNull).to.be.null;
expect(strUndefined).to.not.be.null;
```

[strUndefined] 为 undefined 类型，且 [strNull] 不为 undefined 类型.

```js
expect(strUndefined).to.be.undefined;
expect(strNull).to.not.be.undefined;
```

[str] 为 NaN，且 [strNumber] 不为 NaN.

```js
expect(str).to.be.NaN;
expect(strNumber).to.not.be.NaN;
```

[str] 为真值（truthy），但不等于 true.

```js
expect(str).to.be.ok;
expect(str).to.not.be.true;
```

[strEmpty] 不为真值（truthy），且不等于 false.

```js
expect(strEmpty).to.not.be.ok;
expect(strEmpty).to.not.be.false;
```

[str] 包含单词 C 和 ha，但不包含 c.

```js
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
```

[str]/[strEmpty] 不是 null 或 undefined，但 [strNull]/[strUndefined] 皆是.

```js
expect(str).to.exist;
expect(strEmpty).to.exist;
expect(strUndefined).to.not.exist;
expect(strNull).to.not.exist;
```

[str] 不为空，[strEmpty] 等为空.

```js
expect(str).to.not.be.empty;
expect(strEmpty).to.be.empty;
// 判断长度是否为0，数组和字符串检查其length属性，而对象则检查其key值的数量
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;
expect({'name': 'Chai'}).to.not.be.empty;
```

[str] 长度为4，大于1，小于5，在1和5之间.

```js
expect(str).to.have.lengthOf(4);
expect(str).to.have.length.above(1);
expect(str).to.have.length.below(5);
expect(str).to.have.length.within(1, 5);
expect(str).to.have.length.of.at.least(4);
```

<a name=""></a>
# 字符串之间的比较
[strA] 等于 [strA]，但不等于 [strB].

```js
expect(strA).to.equal(strA);
expect(strA).to.not.equal(strB);
```


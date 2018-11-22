'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 数组的解构赋值
// let [a,b,c] = [1,2,3]
// console.log(a)

//可以设置默认值
// let [a,b=5,c] = [1]
// console.log(a)  //1
// console.log(b)  //5
// console.log(c)  //undefined

//注意undefined和null的区别，undefined是什么都没有，null是有值但是为null
// let [a,b=5,c] = [1,undefined, null]
// console.log(a)  //1
// console.log(b)  //5
// console.log(c)  //null

//对象的解构赋值，属性名必须相同
// let {foo, bar} = {foo: 'Hello',bar: 'ES6'}
// console.log(foo +'  '+ bar)

//如果解构之前定义变量，需要给解构语句加一个圆括号
// let foo;
// ({foo} = {foo: 'hello es6'})
// console.log(foo)

//字符串也能解构
var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    a = _hello2[0],
    b = _hello2[1],
    c = _hello2[2],
    d = _hello2[3],
    e = _hello2[4];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

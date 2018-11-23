'use strict';

//二进制声明
var binary = 21;
console.log(binary); //21
console.log('------------------------------------');

//八进制声明
var b = 17;
console.log(b); //17
console.log('------------------------------------');

//数字验证Number.isFinite()，数字会返回true
var num = 3.55;
console.log(Number.isFinite(num)); //true
console.log(Number.isFinite('num')); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false
console.log('------------------------------------');

//判断是否为NaN
var num2 = 123;
console.log(Number.isNaN(num2));
console.log('------------------------------------');

//判断是否为整数
var num3 = 11.2;
console.log(Number.isInteger(num3));
console.log('------------------------------------');

//最大安全整数
console.log(Number.MAX_SAFE_INTEGER);
console.log('------------------------------------');

var num4 = Math.pow(2, 53) - 1;
console.log(Number.isSafeInteger(num4));

'use strict';

//对象赋值
// let name = 'hello'
// let age = 19
// let person = {name, age}
// console.log(person)  //{name: "hello", age: 19}

//对象key值构建，当对象的key值为变量(从后台获取时)
// let key = 'name';
// var obj = {
//     [key]: 'javascript'
// }
// console.log(obj.name)

//Object.js()方法比较两个对象是否相等

//Object.assign()方法合并对象
var a = {
    name: 'java'
};
var b = {
    age: 19
};
var c = Object.assign(a, b);
console.log(c);

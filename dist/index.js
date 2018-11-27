'use strict';

//Symbol
// let a = Symbol('hello')
// console.log(a)  //红色
// console.log(a.toString())  //黑色

//Symbol当做对象的key
// let key = Symbol();
// var obj = {
//     [key]: 'javascript'
// }
// console.log(obj[key])
// obj[key] = 'html'
// console.log(obj[key])

//Symbol对对象属性的保护
var obj = {
    name: 'zhang'
};
var age = Symbol();
obj[age] = 18;
console.log(obj);
console.log('----------------');
for (var item in obj) {
    console.log(item);
}

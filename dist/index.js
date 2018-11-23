'use strict';

//es6中主动抛出错误,es6中并且可以抛出默认值
// function add (a, b=1) {
//     if (a == 0) {
//         throw new Error('a can not be 0')
//     } else {
//         return a + b
//     }
// }
// console.log(add(0))

//如果形参使用了默认值，再使用'use strict'，就会报错，必须取消使用默认值

//es6使用 函数名.length可以获取到必须传入的参数个数
// function add (a, b=1) {
//     if (a == 0) {
//         throw new Error('a can not be 0')
//     } else {
//         return a + b
//     }
// }
// console.log(add.length)  //这里为1因为使用了默认值

//箭头函数
var add = function add(a, b) {
    console.log('两句话必须加{}');
    return a + b;
};
console.log(add(1, 2));

// json数组格式，利用Array.from()方法
// let json = {
//     "0": "name",
//     "1": "age",
//     "2": "sex",
//     length: 3
// }
// var arr = Array.from(json)
// console.log(arr)

// 这种形式的就不行，属性名必须是0,1,2这样的索引形式，并且必须有length属性
// let json = {
//     "name": "jack",
//     "age": "18",
//     "sex": "male",
//     length: 3
// }
// var arr = Array.from(json)
// console.log(arr)

// Array.of()方法，把传入的数字或者字符串转换成数组
// var arr = Array.of(1,2,3,4,5)
// console.log(arr)

// var arrStr = Array.of('hello', 'es6', 'world')
// console.log(arrStr)

// find()实例方法，实例方法不是Array的方法，是一个真实数组的方法
// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value > 5;
// }))

// fill()实例方法
// let arr = [1,2,3,4,5,6];
// arr.fill('hello',1,4)
// console.log(arr)  //[1, "hello", "hello", "hello", 5, 6]

// for of循环
// let arr = ['hello','world','es6','vue'];
// for (let item of arr) {
//     console.log(item)
// }

// 打出索引
// let arr = ['hello','world','es6','vue'];
// for (let index of arr.keys()) {
//     console.log(index)
// }

// 同时打出索引和值，用entries()方法
// let arr = ['hello','world','es6','vue'];
// for (let [index,item] of arr.entries()) {
//     console.log(index+":"+item)
// }

// entries()返回一个iterator迭代器，可以手动使用next()
// let arr = ['hello','world','es6','vue'];
// let list = arr.entries();
// console.log(list)  //Array Iterator {}
// console.log(list.next().value)  //[0, "hello"]
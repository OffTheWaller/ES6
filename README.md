### babel
- 全局安装babel`npm i babel-cli -g`
- `npm i babel-preset-es2015 babel-cli --save-dev`
- 新建`.babelrc`文件
```
{
    "presets": [
        "es2015"
    ],
    "plugins": []
}
```
- 修改`package.json`
```
"scripts": {
    "build": "babel src/index.js -o dist/index.js"
  },
```
- 使用`npm run build`


### 变量声明
```javascript
var 是全局声明的变量
var a = 2;
{
    var a = 3;
}
console.log(a)

let 是局部声明的变量
var a = 3;
{
    let a = 2;
}
console.log(a)

let 解决全局污染问题
for (let i=0; i<10; i++) {
    console.log("循环体中"+ i)
}
console.log("循环体外" + i)  //i is not defined
```
### 解构
```javascript
数组的解构赋值
let [a,b,c] = [1,2,3]
console.log(a)

可以设置默认值
let [a,b=5,c] = [1]
console.log(a)  //1
console.log(b)  //5
console.log(c)  //undefined

注意undefined和null的区别，undefined是什么都没有，null是有值但是为null
let [a,b=5,c] = [1,undefined, null]
console.log(a)  //1
console.log(b)  //5
console.log(c)  //null

对象的解构赋值，属性名必须相同
let {foo, bar} = {foo: 'Hello',bar: 'ES6'}
console.log(foo +'  '+ bar)

如果解构之前定义变量，需要给解构语句加一个圆括号
let foo;
({foo} = {foo: 'hello es6'})
console.log(foo)

字符串也能解构
let [a,b,c,d,e] = 'hello'
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
```

### 扩展运算符和rest运算符
```javascript
扩展运算符
function show(...arg) {
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
}
show(1,2,3)

扩展运算符解决数组引用问题
let arr1 = ['hello', 'world'];
let arr2 = [...arr1];
arr2.push('hello es6');
console.log(arr1)  //'hello', 'world'

rest运算符
function add (first, second,...arg) {
    console.log(first)
    console.log(second)
}
add(1,2,3,4,5);

for of
function add (first, second,...arg) {
    for (let a of arg) {
        console.log(a)
    }
}
add(1,2,3,4,5);  //3, 4, 5
```

### 模板字符串
```javascript
模板字符串
var name = 'jack';
var total = `this is ${name}`
console.log(total)

字符串的方法
let str1 = 'abcdefg'
let str2 = 'abc'
console.log(str1.includes(str2))  //true
console.log(str1.startsWith(str2)) //true，还有endsWith一样的使用方法
```
### 数字操作
```javascript
//二进制声明
let binary = 0B10101;
console.log(binary);   //21
console.log('------------------------------------')

//八进制声明
let b = 0o21;
console.log(b)  //17
console.log('------------------------------------')

//数字验证Number.isFinite()，数字会返回true
let num = 3.55;
console.log(Number.isFinite(num))  //true
console.log(Number.isFinite('num'))  //false
console.log(Number.isFinite(NaN))  //false
console.log(Number.isFinite(undefined))  //false
console.log('------------------------------------')

//判断是否为NaN
let num2 = 123;
console.log(Number.isNaN(num2))
console.log('------------------------------------')

//判断是否为整数
let num3 = 11.2;
console.log(Number.isInteger(num3))
console.log('------------------------------------')

//最大安全整数
console.log(Number.MAX_SAFE_INTEGER)
console.log('------------------------------------')

let num4 = Math.pow(2,53) -1;
console.log(Number.isSafeInteger(num4))
```
### 数组方法
```javascript
json数组格式，利用Array.from()方法
let json = {
    "0": "name",
    "1": "age",
    "2": "sex",
    length: 3
}
var arr = Array.from(json)
console.log(arr)

这种形式的就不行，属性名必须是0,1,2这样的索引形式，并且必须有length属性
let json = {
    "name": "jack",
    "age": "18",
    "sex": "male",
    length: 3
}
var arr = Array.from(json)
console.log(arr)

Array.of()方法，把传入的数字或者字符串转换成数组
var arr = Array.of(1,2,3,4,5)
console.log(arr)

var arrStr = Array.of('hello', 'es6', 'world')
console.log(arrStr)

find()实例方法，实例方法不是Array的方法，是一个真实数组的方法
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value,index,arr){
    return value > 5;
}))

fill()实例方法
let arr = [1,2,3,4,5,6];
arr.fill('hello',1,4)
console.log(arr)  //[1, "hello", "hello", "hello", 5, 6]

for of循环
let arr = ['hello','world','es6','vue'];
for (let item of arr) {
    console.log(item)
}

打出索引
let arr = ['hello','world','es6','vue'];
for (let index of arr.keys()) {
    console.log(index)
}

同时打出索引和值，用entries()方法
let arr = ['hello','world','es6','vue'];
for (let [index,item] of arr.entries()) {
    console.log(index+":"+item)
}

entries()返回一个iterator迭代器，可以手动使用next()
let arr = ['hello','world','es6','vue'];
let list = arr.entries();
console.log(list)  //Array Iterator {}
console.log(list.next().value)  //[0, "hello"]
```

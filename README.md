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




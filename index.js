console.log("hello world");
// console.warn("this is warning");
// console.error("thise is error");
var number1 = 20;
var number2 = 10;
//vaar use to make container
console.log(number1 + number2);
//data type in javascript
//this is number data type 
var num = 10;
//this is string data type 
var str1 = "this is string";
var str2 = "this is string";
// this is object data type 
var marks = {
    ram: 77,
    rohim: 78,
}
console.log(marks);
//bo0leans data types
var a = true;
var b = false;
console.log(a);
//undefine data type
var und = undefined;
console.log(undefined);
//null data type
var n = null;
console.log(n);

// At high level there re two type datatype
// 1,primitive dt:nudefine ,null,number,string,boolean,Symbol
//2.reference dt:arrays,object

var arr = [3, 4, "Roney", 6, 5]
console.log(arr)
console.log(arr[2])
//operator
var a = 30;
var b = 50;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Conditional statement


var age = 69;
if (age > 69) {

    console.log('yor are not a legend');
}
else {
    console.log('yor are a legend');
}
var age = 18;
if (age > 18) {
    console.log('you are not a kid')
}
else if (age > 50) {
    console.log('you are not a kid')
}
else if (age = 69) {
    console.log('you are not a kid you are a legend')
}
else (age < 18)
{
    console.log('you r a kid')
}

// loops in javascript
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//
//we can use let in place of var , var it is old version
//
//let arr=[1,2,3,4,5];
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
// Braek statement
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (var i = 0; i < arr.length; i++) {
    if (i == 5) {
        break;
    }
    console.log(arr[i])
}
// continue statement
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (var i = 0; i < arr.length; i++) {
    if (i == 6) {
        continue;
    }
    console.log(arr[i])
}
//Array Method
let myArr = ["Fan", "Camera", "Null", "True", "69"]
myArr.pop();
myArr.push(21);
myArr.shift();

console.log(myArr);

// string method in javascript
let mystringm = "what is your name"
console.log(mystringm.length)
console.log(mystringm.slice(0, 9))
console.log(mystringm.substring(2, 7))
console.log(mystringm.substr(1, 11))

//get date method in javascript

let myDate = new Date();
console.log(myDate)

console.log(myDate.getFullYear());

console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getHours());

console.log(myDate.getSeconds());
console.log(myDate.getMinutes());
console.log(myDate.getDay());

//Arrow function 
sum = (a, b) => {
    return a + b;
}

//JSON
// objm = { name:"Mostafa",length: 1 , a : { this: 'tha"t'}}
// jos = JSON.stringify(obj);
// console.log(typeof jos);
// console.log(jos)
for (let num = 1; num<=10; num++){
    let tableOf = 12;
    console.log(tableOf + "*" + num + "=" + tableOf*num);
    // console.log( ' ${tableOf} * &{num}= $ {tableOf*num} ' );
}
// slicing
const months = ['jan','feb','mar','apr','jun'];
const newMonth = months.splice( 3,0,"may");
console.log(months);


//find squar root 

// let arr = [25,36,49,64,81];
// let arrSqr  = arr.map((curElem) =>{
//     return Math.sqrt(curElem);
// })
// console.log(arrSqr);

//Math object in javascript
console.log(Math.PI);

console.log(Math.pow(2,3));











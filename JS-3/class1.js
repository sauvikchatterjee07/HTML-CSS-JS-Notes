// var age = 18;
// var checkAge;

// age >= 18 ? (checkAge = "You are allowed") : (checkAge = "Not Allowed");

// console.log(checkAge);

// var age = 18;
// var checkAge;

// if (!"0") {
//   checkAge = "You are allowed";
// } else {
//   checkAge = "Not Allowed";
// }

// console.log(checkAge);

// Truthy Values => true, {}, [], any value (6237, 745, 25, 21..), "0", "false", Infinity, -Infinity

// Falsy Value => false, undefined, null, NaN, "", 0, -0

//if-else => if, else, else if
//Switch Case

// switch(expression){
//     case value1:
//         //ewdjkfoi2rh
//         break;

//     case value2:
//         //jheqdgfuyiwbg
//         break;
// }

// for (var i = 0; i < 10; i++) {
//   console.log("hello");
// }

// for in => Object
// for of loop => Array & String

// var arr1 = ["wjfder", 10, true, [12, 67.78, "jufercbui"]];
// var arr1 = ["wjfder", 10, true];

// for (var i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// for (ele of arr1) {
//   console.log(element);
// }

// Form
// username - => String
// password - => String

// [string, string, string]

// var arr = ["1234", "Sauvik", 20, false, ["red", "yellow", "blue"]];

// var obj = {
//   username: "Sauvik",
//   password: "1234",
//   age: 20,
//   isVegetarian: false,
//   favouriteColors: ["red", "yellow", "blue"],
//   education: {
//     college: "BIMS",
//     courseFee: 24000,
//   }
// };

// console.log(obj.username);
// console.log(obj.favouriteColors[2]);

// console.log(obj.education.courseFee);
// console.log(obj["education"]["courseFee"]);

// console.log(obj["password"]);

//retrieving => 1.dot notation & 2.[] notation

//While loop
//do-while loop

// while ("") {
//   console.log("hello");
// }

// do {
//   console.log("hellooooooo");
// } while (NaN);

// let sumOfTwoNums = function sum(a, b) {
//   return a + b;
// };

// console.log(sumOfTwoNums(10, 20));
// console.log(sum(10, 20));

// console.log(typeof sumOfTwoNums);

// function a() {
//   console.log("Hello");
//   return "udehcuywedy";
// }

// (function a() {
//   console.log("Hi this is immediately invokalble function");
// })();

// console.log(a);
// console.log(a());
// var str = a();
// console.log(str);

// console.log(a + b);

// let a = 20;
// const b = 30;

// let a = 20;

// function callMe() {
//   let a = 30;
//   console.log(a, b);
// }

// let b = 90;
// callMe();

// function sum() {
//   let a = 20;
//   let b = 30;
//   function inside() {
//     console.log("Insideeeeeee");
//   }
// }

// sum();

// functions

// Hoisting => creation phase, execution phase

// In creation phase the code will be scanned and after scanning it does something called hoisting. The vars which are declared with let keyword will get assigned with a value called undefined.

// in callstack => Global Container =>
// a = undefined

// But the variables with let & const keyword will be placed in Temporal Dead Zone. (When a variable is inside a temporal dead zone, u cannot access the variable. if you try to access you'll get an error stating ->  Cannot access 'b' before initialization)

// let a = 20;
// console.log(a); =====> op -> 20

// console.log(a);
// let a = 20; ===> can not access a before initialization

//console.log(a); ========> a is not defned

// const a = 20;
// console.log(a);

// console.log(a);
// const a = 20; ======> Cannot access 'a' before initialization

// Let and const are brothers to each other the only difference is const doesnot let you change the value assigned to the variable.

// Then comes the Execution Phase where the actual execution of the code happens line by line

// Whenever there is a variable which is inside temporal dead zone during the creation phase and during the execution phase when it is assigned with other value then the variable will come out of the temporal dead zone.

//When all the operations are done then the Global Container will be popped from the Call Stack

// function callMe() {
//   // let a = 1;
//   let x = function () {
//     console.log(a * 2);
//   };

//   x();
// }

// let a = 78;
// callMe();

// console.log(a);

// var a = 10;

// console.log(a);

// let obj1 = {
//   name: "arju",
//   role: "student",
// };

// let obj2 = obj1;

// obj2.name = "ankan";

// console.log(obj1.name, obj2.name);

//================================================================================

// let a = 20;

// function callMe(a) {
//   let test = function () {
//     console.log(2 * a);
//   };
//   return test;
// }

// callMe(3 * a)();

//Closure

// let a = 20;
// function callMe(a) {
//   let test = function () {
//     console.log(4 * a);
//   };
//   return test;
// }

// let result = callMe(3 * a);
// console.log(typeof result);

// result();

// let a = 20;
// function one(two, a) {
//   let func = function (a) {
//     console.log(a);
//     two();
//   };
//   return func;
// }

// let x = function () {
//   console.log(a + 3);
// };

// let result = one(x, a + 2);

// result();

// let b = 200;
// function callMe(b) {
//   let a = 900;
//   return function () {
//     console.log(a + b);
//   };
// }

// // #400()
// callMe(2 * b)();

// let b = 200;
// function callMe(b) {
//   let a = 900;
//   return function (a, b) {
//     console.log(a + b);
//   };
// }

// // #400(20, 30)
// callMe(2 * b)(20, 30);

// // Higher-Order Function
// function callMe(x) {
//   //callback function
//   x();
// }

// function func() {
//   console.log("I am func()");
// }

// callMe(func);

// let func = function (a, b) {
//   return a + b;
// };

// let arrowFunc = (a, b) => {
//   return a + b;
// };

// let shorter = (a, b) => console.log(a + b);

// shorter(10, 20);

// function callMe(x = () => console.log("I am even smarter")) {
//   x();
// }

// // function func() {
// //   console.log("I am func()");
// // }

// // let func = () => console.log("I am func()");

// callMe();

// function one(a) {
//   return 2 * a;
// }

// let one = (a) => 2 * a;

// console.log(one(20));

// let arr = [1, 2, 4, 5, 67, 72, 56];

// arr.forEach(callbackfn);

// function callbackfn(ele) {
//   ele = ele + 2;
//   console.log(ele);
// }

// arr.forEach(() => {
//   ele = ele + 2;
//   console.log(ele);
// });

// let forEach = function (arr) { ===> Internally
//   for (let i = 0; i < arr.length; i++) {
//     callbackfn(arr[i]);
//   }
// };

// let arr = [67, 72, 56, 78, 45, 34, 23, 56];

// let resArr = [];

// for (let i = 0; i < arr.length; i++) {
//   resArr.push(arr[i] + 10);
// }

// let resArr = arr.map((ele) => {
//   return ele + 10;
// });

// let resArr = arr.map((ele) => ele + 10);

//====================================

// let resArr = arr.map(callbackFn);

// function callbackFn(ele) {
//   return ele + 10;
// }

// console.log(resArr);

// let arr = [67, 72, 56, 78, 45, 34, 23, 56];
// let filteredArr = arr.filter((ele) => ele >= 70);

// console.log(filteredArr);

// let arr = [1, 2, 3, 4, 5];

// let total = arr.reduce(callbackfn, 5);

// function callbackfn(accumulator, currentValue, index, array) {
//   console.log(accumulator + currentValue);
//   return accumulator + currentValue;
// }

// console.log(total);

// Questions:
// 1. Print all the elements of an array using forEach Method
// 2. Add 10 to all the elements of an array using map Method
// 3. Filter out all the students's marks who has got less than 50 in the exam
// 4. Find out the average number of that class using reduce Method

//This keyword in Javascript (Date = 11/11/2023)
//===============================================

// console.log(window);

// console.log(this);

// let obj = {
//   a: 1,
//   b: false,
//   c: function () {
//     console.log(this); //#200
//   },
//   d: {
//     name: "Sauvik",
//   },
//   f: function () {

//   },
// };

// console.log(this);

// obj.c();

// console.log(this);

// let obj = {
//   a: 1,
//   b: false,
//   c: function () {
//     console.log(this);
//   },
//   d: {
//     test: function () {
//       console.log(this);
//     },
//     test1: 10,
//     test2: true,
//     test3: {
//       one: "Hello",
//       two: "World",
//       three: function () {
//         console.log(this);
//       },
//     },
//   },
// };

// obj.c();
// obj.d.test();
//#200.#400.test()

// obj.d.test3.three();
//#200.#400.#600.three()

// var aaaaa = {
//     a: 1,
//     b: false,
//     c: function () {
//       console.log(this);
//     },
//     d: {
//       test: 10,
//       test1: true,
//       test3: () => {
//         console.log(this);
//       },
//     },
//   };

//   aaaaa.c(); //obj
//   aaaaa.d.test3(); //window

// var aaaaaa = 10;

// function aaaaaaa() {
//   // console.log(window);
//   console.log(this === window);
// }

// aaaaaaa();

// // console.log(window);

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
// window.aaaaaaa();
// this.aaaaaaa();

// let a = 20;

// if (true) {
//   let b = 90;
//   console.log(a + b);
// }

// console.log(a + b);

// var a = 10;
// var a = 20; //Redeclaration using var keyword is allowed

// let b = 20;
// let b = 30; //Redeclaration using let & const keyword is allowed

// var is a context scoped keyword & let and const are block scoped keyword

// if (true) {
//   var a = 20;
//   console.log(2 * a);
// }

// console.log(3 * a);

// function callMe() {
//   var x = 90;
//   if (true) {
//     let y = 100;
//     var z = 10;
//     // console.log(a, y, z, x);
//     if (true) {
//       if (true) {
//         var h = 100;
//       }
//     }
//   }
//   console.log(h);
//   console.log(z, y);
// }

// let a = 30;
// callMe();

// console.log(x); //Error

//--------------------------------------------------

// Student s1 = new Student("Ankan", 20, 12, "No", "No");
// Student s2 = new Student("Arju", 20, 34, "No", "Yes");

// let s1 = {
//   name: "Ankan",
//   age: "20",
//   rollNo: "12",
//   isVegetarian: function () {
//     console.log("No");
//   },
//   isaGoodStudent: function () {
//     console.log("No");
//   },
// };

// let s2 = {
//   name: "Arju",
//   age: "20",
//   rollNo: "34",
//   isVegetarian: function () {
//     console.log("No");
//   },
//   isaGoodStudent: function () {
//     console.log("Yes");
//   },
// };

// let obj = {};

// obj.c = 3;
// obj.a = 1;
// obj.b = 2;

// console.log(obj.a, obj.b, obj.c);

// class Student {
//   constructor(name, age, rollNo) {
//     // console.log(this);
//     this.name = name;
//     this.age = age;
//     // console.log(this);
//     this.rollNo = rollNo;
//   }
// }

// let s1 = new Student("Ankan", 20, 33);
// let s2 = new Student("Arju", 20, 12);
// let s3 = new Student("Sahid", 23, 56);

// console.log(s1.name, s1.age, s1.rollNo);

// console.log(window);

//DOM Manipulation

//alert()
//prompt()
//setTimeout()

// let obj = {
//   a: 1,
//   b: false,
//   c: function () {
//     console.log(this);
//   },
//   d: {
//     test: 10,
//     test2: true,
//     test3: () => {
//       console.log(this);
//     },
//   },
// };

// obj.c();
// obj.d.test3();

// function makeCounter() {
//   //let count = 0;
//   return function () {
//     //return #300
//     return count++;
//   };
// }

// //let count = 0;

// let counter1 = makeCounter(); //#300
// let counter2 = makeCounter(); //#500
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());
// console.log(counter1(), counter2());

//Spread Operator = (...) => Array, Object, String

// let arr = [12, 34, 56, 78];
// console.log(arr);
// console.log(...arr);

// let arr1 = arr;

// console.log(arr1 === arr); //true

// let arr2 = [...arr];
//         [12, 34, 56, 78]

// console.log(arr === arr2);

// let arr3 = [a, b, c, ...arr, 100, 300, "ebdbwe", "ewdfce"];

// let obj = {
//   a: 1,
//   b: true,
//   c: "Hello",
// };

// let obj1 = {
//   ...obj,
//   d: "werfwe",
//   e: "rufgivhebrgfv",
// };

//Assignment 10: using spread operator manipulate string

// DOM Manipulation

// console.log(window);

//1. Getting the access of the element

//1. getElementById()
//2. getElementsByTagName()
// 3. getElementsByClass()

// let para = document.getElementById("para");
// console.log(para);

fetch("https://api.github.com/users/sauvikchatterjee07")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

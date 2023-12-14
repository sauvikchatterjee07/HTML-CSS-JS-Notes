// function callMe(b){
//     let a = 20;
//     let func = ()=>{
//         console.log(a+b);
//     }
//     b++;
//     a++;
//     func();
// }

// let a = 3;

// callMe(a+2);

// function f1(){
//     console.log("i am a callBack function");
// }

// setTimeout(f1, 3000);

// setInterval(f1, 2000)

// setInterval(f1, 5000)

// alert("Hello how are u?")


// callback queue
// microtaskqueue
// event loop
// Promises

// Time , Tide & JavaScript wait for none

// function callMe(b){
//     let a = 20;
//     let func = ()=>{
//         console.log("3");
//         console.log(a+b);
//     }

//     console.log("1");
//     b++;
//     console.log("2");
//     setTimeout(func, 3000);
//     console.log("4");
//     a++;
// }

// let a = 3;

// callMe(a+2);

// console.log("0");

// setTimeout(()=>{
//     console.log("1");
// }, 1000)

// console.log("2");

// console.log("0");

// queueMicrotask(()=>{
//     console.log("1");
// });

// console.log("2");

// console.log("0"); //0 2 1 3

// setTimeout(() => {
//     console.log("3");
// }, 0);

// queueMicrotask(()=>{
//     console.log("1");
// });

// console.log("2");



//Promise

// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Prom

// class Prom{
//     constructor(executor){
         
//         let resolve = ()=>{
//             console.log("Inside resolve");
//         }
        
//         let reject = ()=>{
//             console.log("Inside reject");
//         }
        
//         executor(resolve, reject);
//     }
// }

// function executor(resolve, reject){
//     // console.log("I am inside executor function");
//     // console.log(typeof  f1 + typeof f2);
//     resolve();
//     // reject();
// }

// let p2 = new Prom(executor);



// let p1 = new Prom("Sauvik", 23);

// console.log(p1.name + p1.age);

// function executor(resolve, reject){


//     reject()
//     // resolve();
// }

// let p1 = new Promise(executor)

// console.log(p1);

// Every promise objects will have state
// pending, fulfilled, rejected
// pending => fulfilled / rejected


// Whenever the resolve function of a promise object gets invoked the promise state changes from pending to fulfilled

// Whenever the reject function of a promise object gets invoked the promise state changes from pending to rejected


// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject();
//     }, 3000)
// })

// function successCallback1(){
//     console.log("Success 1");
// }

// function successCallback2(){
//     console.log("Success 2");
// }

// function successCallback3(){
//     console.log("Success 3");
// }
// function errorCallback1(){
//     console.log("Error 1");
// }

// function errorCallback2(){
//     console.log("Error 2");
// }

// function errorCallback3(){
//     console.log("Error 3");
// }

// function errorCallback(){
//     console.log("Error");
// }


// promise.then(()=>{
//     console.log("1111");
// })
// .then(()=>{
//     console.log("22222");
// })
// .then(()=>{
//     console.log("333333");
// })

// promise.catch(()=>{
//     console.log("1111");
// })
// .then(()=>{
//     console.log("22222");
// })
// .then(()=>{
//     console.log("333333");
// })

//Async & Await

// async function promiseExample(){
//     await o
// }



// promise.then(successCallback1).then(successCallback2).then(successCallback3);

// promise.catch(errorCallback1).then(errorCallback2).then(errorCallback3)


// let p11 = p1.then(successCallback2);

// p11.then(successCallback3);





// setTimeout(()=>{
//     console.log(p1);
// }, 4000)

// setTimeout(()=>{
//     console.log(p2);
// }, 4000)


function fetchData(url){
    return new Promise((resolve, reject)=>{
        console.log("Downloading data from : " + url);
        setTimeout(()=>{
            let result = "success";
            console.log("Download finished");
            resolve(result)
        }, 5000)
    })
}

function writeFile(file){
    return new Promise((resolve, reject)=>{
        console.log("Writing file started on : " + file);
        setTimeout(() => {
            let result = "success";
            resolve();
            console.log("Successfully writing done");
        }, 3000);
    })
}

function uploadData(file, url){
    return new Promise((resolve, reject)=>{
        console.log("Uploading file started on : " + url + "file name " + file);
        setTimeout(() => {
            let result = "success";
            resolve();
            console.log("Successfully uploaded");
        }, 2000);
    })
}

// let responseFromFetchData = fetchData("www.googlescholar.com");
// let responseFromWritData = responseFromFetchData.then(writeFile);
// let responseFromUploadData = responseFromWritData.then(uploadData);

fetchData("www.googlescholar.com").then(writeFile("abc.txt")).then(uploadData("abc.txt", "www.geeksfogeeks.com"));

















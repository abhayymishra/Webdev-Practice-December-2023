/*function fibonacci(n) {
    const fib = [0,1];
    for(let i = 2 ; i < n ; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

console.log(fibonacci(3));
console.log(fibonacci(7)); 

function factorial(n) {
    let ans = 1;
    for(let i = n ; i >=1 ; i-- ) {
        ans = ans * i;
    }
    return ans;
}

console.log(factorial(5));


// Array in JS

let bikes = ["pulsar","splendor","ktm"];
 //console.log(bikes);

let bikes1 = new Array();
bikes1[0] = "pulsar";
bikes1[2] = "bmw";
bikes1[1] = "ghostrider"
//bikes1.length = 2;
//console.log("array is :" , bikes1);

bikes1.forEach(fun);
function fun(ele){
    console.log(ele);
}


const person = {
   fullName:function(village,city){
       return this.firstName +" " + this.lastName + "," + village + "," + city;
   }
}

const person1 = {
    firstName : "Abhay",
    lastName : "Mishra"
}

const person2 = {
    firstName : "Akshay",
    lastName : "Mishra"
}

console.log(person.fullName.call("hey" , "hello" , person2));


const person = {
    fullName:function(village , city) {
        return this.firstName+ " " + this.lastName;
    }
} 

const person1 = {
    firstName:"Abhay",
    lastName:"Mishra"
}

console.log(person.fullName.apply(person1 , ["Phulia" , "Mumbai"]));


const person = {
    firstName :"Abhay",
    lastName : "Mishra",
    fullName : function(){
        return this.firstName +" " + this.lastName;
    }
}

const member = {
    firstName : "AK",
    lastName : "Boss",
}

console.log(person.fullName.bind(member));



function add() {
    let counter = 0;
    function plus(){
        counter++;
    }
    plus();
    return counter;
}

add();
add();
add();
add();
console.log(counter);


function first(){
    myDisplay(4,6);
}



function myDisplay(num1 , num2){
    let sum = num1 + num2;
    console.log(sum);
}

first();

//callback function


x(function y(){
    console.log("y");
});

function x(y){
    console.log("x");
    y();
}

setTimeout(() => {
    console.log("timer is")
}, 5000);

 
// Asynchronous func.
function calculate(a , b , callBack){
    let sum = a + b;
    callBack(sum);
}

calculate(10 , 6 , display);
 
function display(some){
    console.log(some);
}


function time(){
    console.log("hey hello");
}

setTimeout(time , 5000);


function func(value){
    console.log(value);
}

setTimeout(function() {func("hi bro");} , 4000);


function func(){
    let d = new Date();
    console.log(d.getSeconds());
}

setInterval(func , 5000);


// inner and outer function
function addSquare(a , b){
    function square(x){
        return x * x;
    }
    return square(a) + square(b);
}

console.log(addSquare(5,2));


// inner and outer functions using arrow function

const addSquare = (a,b) => {
    const square = (x) => x * x;
    return square(a) + square(b);
};
console.log(addSquare(4,7));



let a , b , rest;
[a,b] = [10,40];
console.log(a);
console.log(b);

[a,b,...rest] = [10,20,30,4,5,3,2,2,3];
console.log(rest);


// stack

let arr = [];
let size = arr.length;
let max = 5;

function push(newVal) {
    if (size < max) {
        arr[size] = newVal;
        size++;
    }

}

function pop(){
    if(size > 0){
        size--;
        arr.length = size;
    }
    else{
        alert("underflow bro");
    }
}

pop();
console.log(arr);


// Stack implementation

function stack(){
    let items = [];
    let top = 0;

    this.push = function(element){
        items[top++] = element;
    }

    this.pop = function(){
        return items[--top];
    }

    this.peek = function(){
        return items[top - 1];
    }

    this.isEmpty = function(){
        return top === 0;
    }

    this.size = function(){
        return top;
    }
}

var stack = new stack();
stack.push(5);
stack.push(7);
stack.push(8);
console.log(stack.size());
console.log(stack.pop());


//binary search
let linearSearch = (arr , item) => {
    let found = false;
    for(let elements of arr){
        if(elements === item){
            found = true;
        }
    }
    return found;
}
console.log(linearSearch([1,3,4,5,6,4,3] , 5));
console.log(linearSearch([1,3,2,3,4,5] , 3));

//using in-built function indexOf
let linearSearchtwo = (arr , item) => {
    return arr.indexOf(item) == -1 ? false : true;
}

console.log(linearSearchtwo([1,3,2,4,6,7,6] , 9));


function linearSearch(arr , target){
    let ans = -1;
   for(let i = 0 ; i < arr.length ; i++){
     if(arr[i] == target){
        ans = i;
     }
   }
   return ans;
}

console.log(linearSearch([1,3,2,4,5,9,0,5] , 0));
console.log(linearSearch([2,3,4,'abhay','mishra',65,4] , 'abhay'));


//binary search

const binarySearch = (arr , target) => {
    let si = 0;
    let ei = arr.length - 1;
 
    while(si <= ei){
        let mid = (si + ei) / 2;
        if(arr[mid] === target){
            return mid;
        }

        if(arr[mid] > target){
            ei = mid - 1;
        }
        else si = mid + 1;
    }
  return -1;
}
const arr = [1,3,5,7,8,9,32,45,56,79,98,105,123,135,176,678];
console.log(binarySearch(arr , 32));*/

// setTimeout(function(){
//     console.log("timer");
// } , 5000);

// function x(y) {
//     y();
//     console.log("x");
// }

// x(function y(){
//     console.log("y");
// });

// aborting the api call using button and abortcontroller.
// const controller = new AbortController();
// const signal = controller.signal;

// const downloadBtn = document.querySelector(".download");
// const abortBtn = document.querySelector(".abort");

// downloadBtn.addEventListener('click' , makeCall);

// abortBtn.addEventListener('click' , () => {
//     controller.abort();
//     console.log("Download is Aborted brother");
// });

// function makeCall() {
//     fetch("https://jsonplaceholder.typicode.com/photos" , {signal})
//     .then((response) => {
//         console.log("complete" , response);
//     })
//     .catch((error) => {
//         console.error(`Error : ${error.message}`);
//     })
// }

// const url = "https://jsonplaceholder.typicode.com/photos";

// try {
//     const res = await fetch(url , {signal : AbortSignal.timeout(5000)});
//     const result = res.blob();
//     console.log(result);
// }
// catch(error) {
//     if(error.name === "TimeoutError"){
//         console.error("its timeout as it took more than 5 sec for the result");
//     }

//     else if(error.name === "AbortError") {
//         console.error("fetch aborted by user action");
//     }

//     else if(error.name === "TypeError") {
//         console.error("AbortSignal.timeout() method is not supported");
//     }

//     else {
//         console.error(`Error : type : ${error.name} , message : ${error.message}`);
//     }
// }

// fetch request with settimeout..

// const fetchWithTimeout = (url , duration) => {
//     return new Promise((resolve , reject) => {
//         const controller = new AbortController();
//         const signal = controller.signal;
//         let timerid = null;

//         fetch(url , {signal})
//         .then((response) => {
//             response.json().then((e) => {
//                 clearTimeout(timerid);
//                 resolve(e);
//             }).catch((error) => {
//                 reject(error);
//             })
//         }).catch((error) => {
//             reject(error);
//         });

//         timerid = setTimeout(() => {
//             console.log("Aborted");
//             controller.abort();
//         } , duration);
//     })
// }

// fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1" , 200).then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);
// })

// making high priority api calls

// let callback = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

// let callback2 = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/2")
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

// let callback3 = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/3")
//     .then(response => response.json())
//     .then(json => console.log(json));
// }

//  console.log("Main program started");
//  setTimeout(callback , 0);
//  setTimeout(callback2 , 3000);
//  queueMicrotask(callback3);
//  console.log("Main program is exiting");

// setTimeout(() => {
//     console.log('hey i am executed asychronously by setTimeout');
// },0);

// queueMicrotask(() => {
//     console.log('hey i am executed asychronously by queueMicrotask');
// });

// setTimeout(() => {
//     console.log("hi brother");
// },0)

// queueMicrotask(() => {
//     console.log('This is a microtask!');
//   });

//   console.log('This is a regular task.');

//cached api call

// const cachedApiCall = (time) => {
//     const cache = {};
//     return async (url , config = {}) => {
//         const key = `${url}${JSON.stringify(config)}`;
//         const entry = cache[key];
//         if(!entry || Date.now() > entry.expiry) {
//             console.log("Making a fresh api call");
//             try {
//                let response = await fetch(url , config);
//                response = await response.json();
//                cache[key] = {value : response , expiry : Date.now() + time};
//             }
//             catch(e) {
//                console.log("error while api call" , e)
//             }
//         }
//         return cache[key].value;
//     }
// }

// const call = cachedApiCall(1500);
// call('https://jsonplaceholder.typicode.com/todos/1' , {}).then((a) => console.log("1" , a));
// setTimeout(() => {
//     call('https://jsonplaceholder.typicode.com/todos/1' , {}).then((a) => console.log("2" , a));
// } , 800)

// setTimeout(() => {
//     call('https://jsonplaceholder.typicode.com/todos/1' , {}).then((a) => console.log("3" , a));
// } , 1550)

//THROTTLING FUNCTION

// const onClick = () => {
//     console.log("Clicked");
// }

// function throttle(func , count) {
//   let counter = 0;
//   return function (...args) {
//     if(++counter !== count) return;
//     counter = 0;
//     func.apply(this , args);
//   };
// }

// const throttleClicked = throttle(onClick , 3);
// document.getElementById('btn').addEventListener('click' , throttleClicked);

// var timeoutID;

// function showAlert() {
//     timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
// }

// function clearAlert() {
//     clearTimeout(timeoutID);
// }

// let intervalID;

//     function toggleColor() {
//       let e = document.getElementById('flashtext');
//       e.style.color = e.style.color == 'red' ? 'blue' : 'red';
//     }

//     function stop() {
//       clearInterval(intervalID);
//     }

//     function start() {
//        intervalID = setInterval(toggleColor, 1000);
//     }

// function sum(name, course, ...args) {
//   console.log(arguments);
//   // document.write('Hello'+" ", name+"   "  ,course  );
//   document.write(`Hello ${name} of ${course}`);
//   let sum = 0;
//   for (let i in args) {
//     sum += args[i];
//   }
//   document.write(sum + "<br>");
// }
// sum("tanu", "btech", 20, 30, 40);
// sum("raj", "ba", 200, 400);

async function weather() {
  let delhiW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21deg");
    }, 1000);
  });
  let bhopalW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27deg");
    }, 2000);
  });
  delhiW.then((result) => {
    console.log(result);
  });
  bhopalW.then((result) => {
    console.log(result);
  });
}

console.log("welcome to weathers control room");
weather();

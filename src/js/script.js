// "use strict";

// let userName ='John';
// let userNumber = 25;

// userNumber = 24;

// console.log(userName);
// console.log(userNumber);




// let num = 3;
// let element;
// element = 'Body';
// alert(num);
// window.alert(element);

// a = 15;
// console.log(a);

// const carBodyLength = 3000;
// const carBodyWidth = 5000;


// console.log('Розміри авто fiat ${carBodyLength} на ${carBodyWidth}');

// request (server)
// data
// response

// camelCase - змінні створюємо
// snake_case - гілки створюємо
//UPPER_SNAKE_CASE - підписуємо те, що не можна змінювати

// let RED_COLOR = '#F00;

// const _apiBase ='';

// let firstNum = 4.4;
// // console.log(number + 5);

// console.log(typeof(firstNum));
// console.log(typeof(Hello)); //string

// let und;
// console.log(typeof(und));

// let text = "Lorem"; //string - в кавичках завжди, двойні або одинарні, різні

// Логічні типи даних (true/false) - boolean
// let man = true;
// let man2 = false;

// console.log(typeof(man));

// console.log(4/2);

// const woman = { // object в фігурних дужках
//     name: "Anna",
//     age: 25,
//     isMarried: true
// };

// console.log(woman);
// console.log(woman.isMarried);

// const woman1 = { // array
//     0: "Anna",
//     1: 25,
//     2: true
// };

// // Maccиви
// let arr = ["Theo", 1.5, false]; // array
// let fruits = ["Apple", "Orange", "Слива"];

// console.log(arr[1]);
// console.log(fruits[1]);


// завдання
// let nameStore = "Kramnytsia";
// const storeDescription = {
//     budget: 10000,
//     employees: ["Santa", "Maria", "Lucia"],
//     products: {
//         milk: 20,
//         bread: 30
//     },
//     isOpen: true
// };

// console.log(storeDescription);

// const project = {
//     name: "Real Estate",
//     price: 3000,
//     open: true,
//     employees: ["Santa", "Maria", "Lucia"],
//     apartments: {
//         oneRoomSquare: 60,
//         twoRoomSquare: 100
//     }
// };

// console.log(project);

// let arr = ["Maria", 20, false, null];


// const result = confirm("Are you here?");

// console.log(result);

// const answer = prompt("Скільки вам років?", "18");

// // console.log(answer);
// console.log(typeof(answer + 5));

// const answers = [];
// answers[0] = prompt("Your name?", ""); //0 - array завжди починається з нуля
// answers[1] = prompt("Your age?", "");
// answers[3] = prompt("Your weight?", "");

// console.log(answers);
// document.write(answers);

const category = "toys";

console.log(`http://someurl.com/` + category + "/" + "4");

console.log(``); // ІНТЕРПОЛЯЦІЯ ЗІ ЗВОРОТНИМИ КАВИЧКАМИ


const user = "Nataliia";
alert(`Helo $(user)`);

// ОПЕРАТОРИ (- - * /)

console.log(2 + "4"); // = 24
console.log(2 + 4); // = 6


let number = 4;
// ++ це +1 інкремент
// -- це -1 декремент

console.log(number++); // це те ж саме що 4+1 -- це інкремент =4
console.log(number); // = 5
console.log(++number); // = 6
console.log(number--); // це те ж саме що 4-1 -- це декремент

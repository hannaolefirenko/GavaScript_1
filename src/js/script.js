"use strict";

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

// const category = "toys";

// console.log(`http://someurl.com/` + category + "/" + "4");

// console.log(``); // ІНТЕРПОЛЯЦІЯ ЗІ ЗВОРОТНИМИ КАВИЧКАМИ


// const user = "Nataliia";
// alert(`Helo $(user)`);

// // ОПЕРАТОРИ (- - * /)

// console.log(2 + "4"); // = 24
// console.log(2 + 4); // = 6


// let number = 4;
// // ++ це +1 інкремент
// // -- це -1 декремент

// console.log(number++); // це те ж саме що 4+1 -- це інкремент =4
// console.log(number); // = 5
// console.log(++number); // = 6
// console.log(number--); // це те ж саме що 4-1 -- це декремент

// TASK 1

// let numberOfFilms = prompt("Скільки фільмів ви вже подивилися?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genress: [],
//     privat: false
// };

// let a = prompt("Один з останніх переглянутих фільмів", "");
// let b = prompt("На скільки оціните його?", "");
// let c = prompt("Один з останніх переглянутих фільмів", "");
// let d = prompt("На скільки оціните його?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// // personalMovieDB.movies.hello = d;

// console.log(personalMovieDB);




// 12.02.24 REPEAT IF - TASK

// if (1) {
//     console.log("Ok!");
// } else {
//     console.log ("GoodBye!");
// };

// const num = 50;

// if (num < 49) {
//     console.log("Error!");
// } else if (num > 100) {
//     console.log("Much!");
// } else {
//     console.log("Ok!");
// }

// // Tернарний оператор

// // умова? дія, якщо true : дія, якщо false
// // true or false      if true           if false
// (num === 50) ? console.log("Okay") : console.log("Error!");


// const num = 101;

// switch (num) {
//     case 49:
//         console.log("Error!");
//         break;
//     case 100:
//         console.log("Not enought");
//         break;
//     case 101:
//         console.log("Great!");
//         break;
//     default:
//         console.log("Not at this time!");
//         break;
// }

// && - ОПЕРАТОР "і"

// const burger = true;
// const cola = true;

// if (burger && cola) {
//     console.log("let's have a break");
// } else {
//     console.log("continue...");
// }


// "||" - ОПЕРАТОР або/или

// const burger1 = true;
// const burger2 = false;
// const cola1 = true;
// const cola2 = false;

// if (burger1 || cola1) {
//     console.log("let's have a break");
// } else if (burger2 || cola2) {
//     console.log("error");
// } else {
//     console.log("continue...");
// }

// console.log("continue...");

// ЗАЛИШОК ВІД ДІЛЕННЯ

// console.log(5%2);

// let num = +prompt("Введіть парне число", "");

// if (num % 2 === 0) {
//     console.log(true);
// };

// let num = +prompt("Введіть число", "");

// if (num%2 === 0) {
//     console.log("Ви ввели парне число");
// } else {
//     console.log("Ви ввели НЕпарне число");
// };


// let num = +prompt("Введіть свій вік", "");

// if (num >= 18) {
//     console.log("Вітаю, ви - повнолітня особа!");
// } else {
//     console.log("До побачення!");
// };


// let a = 2;
// let b = 3;
// console.log(b > a);

// let num1 = +prompt("Введіть перше число", "");
// let num2 = +prompt("Введіть друге число", "");

// if (num1 > num2) {
//     console.log(num1 + " більше, ніж " + num2);
//     //або  console.log("${num1} більше ніж ${num2}");
// } else if (num2 > num1) {
//     console.log(num2 + " більше, ніж " + num1);
// } else if (num2 === num1) {
//     console.log("Значення рівні");
// } else {
//     console.log("Error");
// };

// let validLogin = "user123";
// let validPassword = "qwerty"


// let validLogin = prompt("Введіть логін", "");
// let validPassword = prompt("Введіть пароль", "");

// if (validLogin === "user123" && validPassword === "qwerty") {
//     console.log("Логін та пароль вірні ");
// } else {
//     console.log("Error. Логін або пароль введено невірно. Спробуйте ще раз.");
// };





// 16.02.24 TASK TASK

// const hamburger = 33;
// const fries = 13;
// const cola = 16;

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("Поїли!");
// } else {
//     console.log("Пішли додому!");
// };

// console.log(1 && 0); // = 0
// console.log(1 && 8); // = 8
// console.log(null && 5); // = null
// console.log(0 && "dfghjkl"); // = 0

// const hamburger = 33;
// const fries = 13;
// const cola = 16;

// console.log(hamburger && cola && fries);

// const hamburger = 0;
// const fries = undefined;
// const cola = 2;
// const nuggets = 5;


// if (hamburger === 0 && nuggets === 5 || nuggets  && cola === 2 && fries)  {
//     console.log('Поїли!');
// } else {
//     console.log('Пішли додому!');
// };



// LOOPS (Цикл)

// first loop
// let num = 50; // = 51

// while(num <= 55) {
//     console.log(num);
//     num++ //num = num + 1
// };

// second
// let num = 50;

// do {
//     console.log(num);
//     num++ //num = num + 1
// };
// while(num < 55);

//third
// let num = 50;

// for(let i = 1; i < 8; i++) {
//     console.log(`Ми ходили в театр ${i} разів`);
// };

// for(let i = 1; i < 9; i++) {
//     if(i === 6 || i === 7) {
//         break;
//     }
//     console.log(`Ми ходили в театр ${i} разів`);
// };

// for(let i = 1; i <= 28; i++) {
//     if(i === 6 || i === 7) {
//         continue;
//     }
//     console.log(`Ми ходили в театр ${i} разів`);
// };

// ТРЕНУВАННЯ
// for (let i = 1; i <= 3; i++) {
//     console.log(`"i" тренування № ${i}`);
//     for (let j = 1; j <= 3; j++) {
//         console.log(`"j" вправа № ${j}`);
//     }
// };

// // ЯЛИНКА
// let result = "";
// const length = 8; // або 50

// for(let i = 1; i <= length; i++) {
//     for(let j = 0; j < i; j++) {
//         result += "*"
//     }
//     result += "\n";
// };

// console.log(result);

// Завдання 1
// let num = 5; // = 51

// while(num <= 10) {
//     console.log(num);
//      num++ //num = num + 1
// };

// for(let i = 5; i < 11; i++) {
//     console.log(i)
// }

// Завдання 2
// for(let i = 20; i >= 10; i--) {
//     if(i === 13) {
//         break;
//     }
//     console.log(i);
// };

// Завдання 3
// for(let i = 2; i < 11; i++) {
//     if(i%2 === 0)
//     console.log(i);
// };

// Завдання 4
let i = 2;

while(i <= 16) {
    if(i % 2 === 0) {
        i++;
        continue
    } else {
        console.log(i)
    }
    i++;
};



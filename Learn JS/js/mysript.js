'use strict';
/*let answers = [];

confirm("Вам есть 18 лет?");
answers[2]=prompt("Сколько вам лет?",'');
answers[0]=prompt("Как вас зовут?",'');
answers[1]=prompt("Как ваша фамилия?",'');

document.write(answers);*/
/*-------------*/
/*
function SayHelloToExgirl(){
    document.write('Ну привет, шаболда');
};

SayHelloToExgirl();*/
/* function MyFirstApp(name, age){
//     document.write(`Hi, ${name}, my name is Maks and I'm good pupil <br>`);

//     function ShowSkills(){
//         let skills = ['C', 'C++', 'html', 'css'];
//         for(let key in skills){
//             document.write("I know "+skills[key]+'<br>');
//         };
//     }
//     ShowSkills();

//     function CheckAge(){
//         if(age>=18){
//             document.write("You have time to become a good FrontEnd Dev<br>");
//         }
//         else document.write("Ypu have a GREAT possiblity to become a good FrontEnd Dev<br>");
//     };
//     CheckAge();

//     function Calc(a){
//         document.write(a*a);
//     };
//     Calc(4);
//     document.write('----------------------------------<br>');
// }

// MyFirstApp('Maksim', 19);
// MyFirstApp('Kirill', 13);
// let admin, Name;
// Name = "John";
// admin = Name;
// console.log(`hello ${'name'}`);
// console.log(`hello`/10);
// console.log(0.1 + 0.2);
// console.log('   10 2  '/2);
// let name = prompt("What's youre name?");
// alert(`Hello, ${name}`);
// let answer = prompt("Какое официальное название JavaScript?",'');
// if(answer 'ECMAScript')
// alert('You goddamn right!');
// else alert('Wrong!');
// let login = prompt('Input login','');
// if(login 'Admin')
// {
//     let password = prompt('Input password','');
//     if(!password){
//         alert('Negative');
//     }
//     else{
//         let message = password&&(password 'BOSS'?'hello':'Wrong password');
//         alert(message);
//     }
// }
// else alert("I dont know you");
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
// let i=0;  
// while(i<3){
//     alert(`number ${i}!`);
//     i++;
// }
// let chislo;
// do{
//     chislo=prompt('Give me number more than 100','');
// }while(chislo<=100&&chislo);
// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }
// function CheckAge(age){
//     if(age>=18){
//         return true;
//     }
//     else{
//         return confirm("А родители разрешили?");
//     }
// }
// let age = +prompt("Сколько вам лет?", 18);
// if(CheckAge(age)){
//     alert('Доступ получен');
// }
// else{
//     alert('В доступе отказано');
// }
// /**/
// function checkAge(age) {
/*
//     //return age>18?true:confirm('Really?');
//     return age>18||confirm('sg');
//   }
// function pow(x,n){
//     let result =1;
//     for(let i=0;i<n;i++){
//         result*=x;
//     }
//     return result;
// }
// alert('Я подумал и понял, что будет ' + pow(+prompt('Введите число, которое возведется'),+prompt("В какую степень возведем?")));
// console.log(pow(2,0));
// alert(pow);
// function ask(question, yes, no){
//     if(confirm(question)) yes();
//     else no();
// }
// ask(
//     'Are you gay?',
//     function(){alert('You are gay');},
//     function(){alert('You are real man');}
// // )
// let age = +prompt('Сколько вам лет?','');
// let welcome = (age>18)?
//     ()=>alert('Good day'):
//     ()=>alert('Hi');
// welcome();
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );
// let user={};
// user.name='John';
// user['surname']='Smith';
// user.name='Pete';
// delete user.name;

// function isEmpty(obj){
//   for(let key in obj){
//     return false;
//   }
//   return true;
// }
// let scheldue={};
// console.log(isEmpty(scheldue));
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// function sumSalaries(obj){
//   let total=0;
//   for(let key in obj){
//     total += obj[key];
//   }
//   return total;
// }
// console.log(sumSalaries(salaries));
// let menu = {
//   width: 0,
//   height: 300,
//   title: "My menu"
// };
// function multiplyNumeric(obj){
//   for (key in obj){
//     if (+obj[key]){
//       obj[key] = -200;
//     }
//   }
// }
// multiplyNumeric(menu);
// for (key in menu){
//   console.log(menu[key]);
// }
// let user ={
//   name: "Maks",
//   sayHi(){
//     alert(`Hi, ${this.name}`);
//   },
//   sayHelloToExgirl: function(){
//     alert('Ну привет, шаболда');
//   },
//   saySomething(){
//     let arrow = () => alert(this.name);
//     arrow();
//   },
// };
// function sayBie(){
//   alert("Bye-bye!");
// }
// user.sayBie = sayBie;
// user.sayBie();
// user.sayHelloToExgirl();
// user.saySomething();*/
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   }, 
//   showStep: function() {
//     alert( this.step);
//     return this;
//   },
// };
// ladder
//       .up()
//       .down()
//       .showStep()
//       .up()
//       .up()
//       .showStep();
// function Calculator(){

//   this.read = () =>{
//     this.first = +prompt('Input first number',0);
//     this.second = +prompt('Input second number',0)
//   };
//   this.sum = () =>{return this.first+this.second};
//   this.mul = function(){
//     return this.first*this.second;
//   }
// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
// function Accumulator(startingValue){
//   this.value = startingValue;
//   this.read = function(){
//     this.value+=+prompt('Input new number',0);
//   };
// }
// let accumulator = new Accumulator(10);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);
// function random(a,b){
//   return Math.round(a+(Math.random()+1e-10)*(b-a));
// }

// let guestsList = `Guests:
//   *John
//   *Maks
//   *Tony`;
//   alert(guestsList);
// function ucFirst(str){
//   let newStr = str.length > 0? str[0].toUpperCase() + str.slice(1):str;
//   return newStr;
// }
// alert(''.charAt(2));
// function checkSpam( str ){
//   str = str.toLowerCase();
//   return ( str.includes('viagra') || str.includes('xxx') );
// }
// alert( checkSpam('buy ViAgRA now') );
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"))
// function truncate( str, maxLength ){
//   if ( str.length > maxLength )
//     str = str.substr(0,maxLength-1) + '…';
//   return str;
// }
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Всем привет!", 20));
function extractCurrencyValue(str){
  if(str.includes('$'))
    {
      let pos = str.indexOf('$');
      str = str.slice(pos);
      let summ = '';
      for (const char of str) {
        if ( char.codePointAt(0) > 48 && char.codePointAt(0) < 57 ){
          summ += char;
        }
      }
      return +summ;
    }
  else return '';

}
// let str='';
// for(let i=0;i<10;i++){
//   str = i.toString();
//   alert(str.codePointAt(0));// 48-57
// }

function sumInput(){
  let arr = [];
  let chislo;
  while(1){
    
    chislo = prompt('Chislo?', '');
    if (! ( ( isFinite(chislo) ) && ( chislo ?? 0 )) ) break;
    arr.push(+chislo);
  }

  let summ = 0;
  for (const iterator of arr) {
    summ += iterator;
  }

  return summ;
}
// alert(sumInput());
function getMaxSubSum(arr){
  let maxSumm = 0;
  let negativeSumm = 0;
  let nowSumm = 0;

  for (const i of arr) {
    nowSumm += i;
    maxSumm = Math.max(maxSumm, nowSumm);
    if (nowSumm < 0 ) nowSumm = 0;
  }
  return maxSumm;
}
// alert(getMaxSubSum([-1, 3, 2, -9]));
// alert(getMaxSubSum([2, -1, 2, 3, -9]));
// alert(getMaxSubSum([-1, 2, 3, -9, 11])); 
// alert(getMaxSubSum([-2, -1, 1, 2]));
// alert(getMaxSubSum([100, -9, 2, -3, 5])); 
// alert(getMaxSubSum([1, 2, 3]) );
// function unique(arr) {
//   return  Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O
function aclean(arr){
  let map = new Map();
  for (const word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  abc = 100;
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

console.log(abc);

function showName(){
  console.log('Vasya');
}
setTimeout(showName,0);
console.log('Max');
alert(location.href); // показывает текущий URL
if (confirm("Перейти на Wikipedia?")) {
  location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
}

const user1 = {name: 'John' }
const user2 = {...user1};

user1.name = 'Alice';

console.log(user1.name);
console.log(user2.name);

let perem = document.querySelector('ul').lastChild;

let perem3 = document.querySelectorAll('.like');//document.getElementsByClassName('like);


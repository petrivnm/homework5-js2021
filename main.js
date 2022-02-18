// Всі функції повинні бути описані стрілочним типом!!!!


//     - створити функцію яка обчислює та повертає площу прямокутника
// let rectangleSqare = (a,b) => {
//     return a*b;
// }
// console.log(rectangleSqare(10,20));

// - створити функцію яка обчислює та повертає площу кола
// let sqrCircle = (r) => {
//     return (3.14*(r**2));
// }
// console.log(sqrCircle(15));

// - створити функцію яка обчислює та повертає площу циліндру
// let sqrCylinder = (h,r) => {
//     return(2*3.14*r*h);
// }
// document.write(sqrCylinder(100,10))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let fArr = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(arr[i])
//     }
// }
// let mas = [false,true,1,2,3,4,5,'qwwerty']
// fArr(mas);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let txt = 'asadsffdgggklhjfklghjflg';
// const creatP = (text) => {
//   document.write(`<p>${text}</p>`);
// }
// creatP(txt);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let txt = 'qwerty';
// const creatLi = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// creatLi(txt);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let txt = 'qwerty';
// const LIcreator = (text, num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// LIcreator(txt,10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mas = [true,1,22,-100,'asd','riki',"",false];
// const listCreate = (arr) => {
//     document.write(`<ol>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`);
// }
// listCreate(mas);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let array = [{id:1,name:'ira',age:22},{id:2,name:'lesya',age:27},{id:3,name:'alex',age:25}];
// const masTodocument = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
//     }
// }
// masTodocument(array);
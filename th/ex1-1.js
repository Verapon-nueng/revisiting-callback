/* 
- เราอยากพัฒนาโปรแกรมบวกลบคูณหารเลข ทุกครั้งจะรับ Parameter 3 ตัวคือ
    - เลขตัวที่ 1
    - เลขตัวที่ 2
    - กระบวนการทางคณิตศาสตร์
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

// Start Coding Here
// function calculate(num1,num2,callback){ // callback คือ function ที่จะถูกเรียกใช้งาน
//     return callback(num1,num2); // จะ return ค่าที่ส่งมาจาก function callback
// }

const calculate = (num1,num2,callback) => callback(num1,num2);

const add = (num1,num2) => num1 + num2;
// function add(num1,num2){
//     return num1 + num2;
// }

const subtract = (num1,num2) => num1 - num2;
// function subtract(num1,num2){
//     return num1 - num2;
// }

const multiply = (num1,num2) => num1 * num2;
// function multiply(num1,num2){
//     return num1 * num2; // คูณกัน
// }

const divide = (num1,num2) => num2 !== 0 ? num1 /num2 : "Cannot divide by zero";
// function divide(num1,num2){
//     return num2 !== 0 ? num1 /num2 : "Cannot divide by zero"; // num2 ไม่เท่ากับ 0 จะ return num1 / num2 ถ้าเท่ากับ 0 จะ return "Cannot divide by zero"

    // if(num2 !== 0){
    //     return num1 / num2;
    // }else{
    //     return "Cannot divide by zero";
    // }
    //}

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide)); // 2
console.log(calculate(10, 0, divide)); // "Cannot divide by zero"
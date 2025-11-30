// =================Завдання 1:=================

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

// ---------------------------------------------

// 1
// const doubleNumbers = numbers.map((num) => num ** 2);
// console.log(doubleNumbers);

// 2
// const getDoubleNumbers = (Array) => {
//     return Array.map((el) => {
//         return el ** 2;
//     });
// };

// 3
// const getDoubleNumbers = (Array) => Array.map((el) => el ** 2);

// console.log(getDoubleNumbers(numbers));
// console.log(getDoubleNumbers([10, 20, 30]));

// =================Завдання 2:=================

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// ---------------------------------------------

// 1
// const result = data.flatMap(obj => obj.values);
// console.log(result);

// 2
// function getAllValues(array) {
//   return array.flatMap(obj => obj.values);
// }

// console.log(result(data));

// =================Завдання 3:=================

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// ---------------------------------------------

// 1
// const youngPeople = people.some(person => person.age < 20);

// console.log(youngPeople);

// 2
// function youngPeople(array) {
//     return array.some(person => person.age < 20);
// }

// console.log(youngPeople(people));

// =================Завдання 4:=================

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// ---------------------------------------------

// 1
// const evenNumbers = numbers.every(num => num % 2 === 0);

// console.log(evenNumbers);

// 2
// function evenNumbers(array) {
//     return array.every(num => num % 2 === 0);
// }

// 3
// function evenNumbers(array) {
//     for (const nom of array) {
//         if (num % 2 !== 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(evenNumbers(numbers));

// =================Завдання 5:=================

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// ---------------------------------------------

// 1
// const firstOddNumber = numbers.find(num => num % 2 !== 0);

// console.log(firstOddNumber);

// 2
// function firstOddNumber(array) {
//     return array.find(num => num % 2 !== 0);
// }

// console.log(firstOddNumber(numbers));

// =================Завдання 6:=================

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// ---------------------------------------------

// 1
// const numSorted = numbersArray.sort((a, b) => a - b);

// console.log(numSorted);

// 2
// function numSorted(array) {
//     return array.slice().sort((a, b) => a - b);
// }

// console.log(numSorted(numbersArray));

// 3
// function numSorted(a, b) {
//     return a - b;
// }

// console.log(numbersArray.sort(numSorted));

// =================Завдання 7:=================

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// ---------------------------------------------

// 1
// const fruitsSort = stringArray.sort();

// console.log(fruitsSort);

// 2
// const fruitsSort = stringArray.sort((a, b) => {
//     return a.localeCompare(b);
// });

// console.log(fruitsSort);

// =================Завдання 8:=================

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// ---------------------------------------------

// 1
// const sortedUsers = users.sort((a, b) => a.age - b.age)

// console.log(sortedUsers);

// 2
// function sortedUsers(array) {
//     return array.sort((a, b) => a.age - b.age);
// }

// console.log(sortedUsers(users));

// =================Завдання 9:=================

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// ---------------------------------------------

// function filterUser(array) {
//     return array.filter(user => user.age > 20);
// }

// const result = filterUser(user);

// console.log(result);

// =================Завдання 10:=================

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// ---------------------------------------------

// const sumNumbers = numbers.reduce((sum, number) => sum + number, 0);

// console.log(sumNumbers);

// =================Завдання 11:=================

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 
//   const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .substract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

// ---------------------------------------------

// class Calculator {
//   constructor() {
//     this.value = 0;
//   }

//   number(value) {
//     this.value = value;
//     return this;
//   }

//   add(value) {
//     this.value += value;
//     return this;
//   }

//   substract(value) {
//     this.value -= value;
//     return this;
//   }

//   multiply(value) {
//     this.value *= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       throw new Error("Неможливо ділити на 0");
//     }
//     this.value /= value;
//     return this;
//   }

//   getResult() {
//     return this.value;
//   }
// }

//  const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .substract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

// =================Завдання 12:=================
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

// ---------------------------------------------

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// ----------------------------
// Приклад використання

// const client = new Client("myLogin", "myEmail@example.com");

// console.log(client.login); // "myLogin"
// console.log(client.email); // "myEmail@example.com"

// client.login = "newLogin";
// client.email = "newEmail@example.com";

// console.log(client.login); // "newLogin"
// console.log(client.email); // "newEmail@example.com"

// =================Завдання 13:=================

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.
  
//   --------------------------------------------

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email
//     };
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//     }
    
//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department
//     };
//   }
// }

// Приклад використання

// const person = new Person("John Doe", 30, "male", "john@example.com");
// console.log(person.getDetails());
// { name: 'John Doe', age: 30, gender: 'male', email: 'john@example.com' }

// const employee = new Employee(
//   "Jane Smith",
//   28,
//   "female",
//   "jane@example.com",
//   5000,
//   "IT"
// );

// console.log(employee.getDetails());
// { name: 'Jane Smith', age: 28, gender: 'female', email: 'jane@example.com' }

// console.log(employee.getEmployeeDetails());
// { salary: 5000, department: 'IT' }

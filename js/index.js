// const room = 716;
// const type = "VIP";
// const firstName = "Chelsy";
// const lastName = "Emerald";

// const welcomeMsg =
//   "Гость " +
//   firstName +
//   " " +
//   lastName +
//   " " +
//   "поселяется в " +
//   type +
//   " номер " +
//   room;

// console.log(welcomeMsg);

// console.log(
//   `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`
// );

// const balance = 1000;
// // let message;

// // if (balance >= 0) {
// //   message = "Позитивный баланс";
// // } else {
// //   message = "Негативный баланс";
// // }

// const message = balance >= 0 ? "Позитивный баланс" : "Негативный баланс";
// console.log(message);

// let balance = 10000;
// const payment = 2000;
// let result;
// console.log(`Общая стоимость заказа ${balance} кредитов. Проверяем кол-во доступных средств на счету`);

// if (payment < balance) {
//   result = balance - payment;
//   console.log(`На счету осталось ${result} кредитов`)
// } else {
//   console.log(`На счету недостаточно средств`);
// }
// console.log("Операция завершена")

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// let result = 0;

/**
 *? Напишите ф-цию calcTotalPrice(stones, stonesName),
 *? принимающая массив объектов и
 *? строка под названием камня.
 *? Функция считает и возвращает общую стоимость камней
 *? с таким именем, ценой и количеством с объекта
 */

// const c = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// // function calcTotalPrice(a, stonesName) {
// //   for (const stone of a) {
// //     // console.log(stone);
// //     if (stone.name === stonesName) {
// //       let totalPrice = stone.price * stone.quantity;
// //       console.log(totalPrice);
// //       return totalPrice;
// //     }
// //   }
// // }
// // calcTotalPrice(c, "Щебень");

// function calcTotalPrice(a, stonesName) {
//   let stone = a.find((stone) => stone.name === stonesName);
//   return stone.price * stone.quantity;
// }
// let d = calcTotalPrice(c, "Сапфир");
// console.log(d);

//TODO:=============================================
// Напиши класс Client создающий объект
// со свойствами login email
// Объявления частных свойств #login #email,
// доступ к которым сделай через геттер и сеттер login email

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

// const newClient = new Client("cjsv", "dvhsd");
// console.log((newClient.login = "gjggg"));
// console.log((newClient.email = "dsasag"));

const Cifre = {
    a: 10,
    b: 20,
}
const newObject = {
     ...Cifre
}
 console.log(newObject)
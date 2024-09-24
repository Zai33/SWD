// let x = 5;
// let y = 3;
// let myName = "kyaw gyi";
// // console.log(x, "and", y);
// console.log("my name is", myName);
// console.log(`The total of x + y is ${x + y}`);

// console.log(5 + 4);
// console.log(5 - 4);
// console.log(5 * 4);
// console.log(50 / 4);
// console.log(5 ** 4);

// let x = 10;
// x += 3;
// console.log(x);
// x -= 10;
// console.log(x);

// console.log(10 + "kg");
// console.log(100 + "30");

// console.log(++x);
// console.log(++x);
// console.log(++x);

// console.log(x++);
// console.log(x);

// function triangle(char = 0) {
//   console.log(`${char}`);
//   console.log(`${char}${char}`);
//   console.log(`${char}${char}${char}`);
//   return "finish";
// }

// console.log(triangle("*"));

// triangle("x");
// triangle("y");
// triangle();

// function calculateTax(amount = 0, taxRate = 5) {
//   const tax = (amount / 100) * taxRate;
//   return amount + tax;
// }

// console.log("GTR R34 -", calculateTax(25000000, 50), "laks");
// console.log("Nothing", calculateTax(0));

// let x = 5;
// let y = 10;

// if (x < 5) {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// } else {
//   console.log("* * *");
//   console.log("* * *");
// }

// const passedMark = 40;
// const yourMark = 90;
// if (yourMark >= passedMark) {
//   console.log("U pass");
// } else {
//   console.log("U fail");
// }

// let num1 = 5;
// let num2 =10;

// Find area

// const record = [];
// let index = 0;

// const area = (height, width) => {
//   const result = `${height * width} sqft`;

//   record[index++] = {
//     height: height + "ft",
//     width: width + "ft",
//     area: result,
//   };
//   return result;
// };

// console.log(area(5, 10));
// console.log(area(10, 70));

// console.table(record);

// Currency Exchange

// const rates = {
//   usd: 2100,
//   sgd: 1551.2,
//   eur: 2246,
// };

// const currencyToMmk = (amount, currency) => {
//   const currentCurrencyRate = rates[currency];
//   const result = `${amount * currentCurrencyRate} MMk`;
//   return result;
// };

// console.log(currencyToMmk(500, "usd"));
// console.log(currencyToMmk(350, "sgd"));
// console.log(currencyToMmk(900, "eur"));

// const fruits = {
//   apple: 500,
//   orange: 700,
//   mango: 1400,
//   banana: 200,
// };

// let total = 0;

// const calculate = (item, quantity) => {
//   const price = fruits[item];
//   const cost = price * quantity;
//   total += cost;
//   return cost;
// };

// console.log("total", total);

// const car = {
//   name: "Nata v",
//   color: "Silver",
//   range: 500,
//   drive() {
//     console.log(this);
//     return `${this.name} can drive`;
//   },
// };

// console.log(car.drive());

// const obj = {};

// const { a, b, c } = { a: "aaa", b: "bbb", c: "ccc" };
// console.log(a);
// console.log(b);
// console.log(c);

// // const arr = [];
// const [x, y, z] = ["aaa", "bbb", "ccc"];

// console.log(x);
// console.log(y);
// console.log(z);

// object Destructing

// const saleProduct = product
//   .filter(({ price, rating: { rate } }) => price < 100 && rate >= 4)
//   .map(({ id, title, price, rating: { rate } }) => ({
//     id,
//     title,
//     price: (price + 10).toFixed(2),
//     rate,
//   }));

const apiUrl = "https://fakestoreapi.com/products";

let product = [];
async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    product = await response.json();
  } catch (error) {
    console.error(error);
  }
}
fetchProducts().then(() => (product = product));

// const arr = ["apple", "orange", "banana", "pineapple"];
// console.log(arr);

const newArr = product.map((ar) => ar.toUpperCase());
console.log(newArr);
// console.log(arr);

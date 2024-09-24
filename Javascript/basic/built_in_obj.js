// const d = new Date();
// console.dir(d);

// console.log(d);

// console.log(d.toDateString());
// console.log(d.toLocaleDateString());
// console.log(d.toTimeString());
// console.log(d.toLocaleTimeString());

// console.log("Date", d.getDate());
// console.log("month", d.getMonth() + 1);
// console.log("day", d.getDay());
// console.log("hour", d.getHours());
// console.log("minute", d.getMinutes());
// console.log("second", d.getSeconds());

// const swdHour = 50;
// const hourPerDay = 2;
// const totalDay = swdHour / hourPerDay;
// console.log(totalDay);

// const d = new Date();
// d.setDate(d.getDate() + totalDay);

// console.log(d);

// const str = "apple";
// console.log(str.toUpperCase().split(""));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function separateEvenOdd(numbers, callback) {
  const evens = [];
  const odds = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
  });

  callback(evens, odds);
}

separateEvenOdd(numbers, (evens, odds) => {
  console.log("Even numbers:", evens);
  console.log("Odd numbers:", odds);
});

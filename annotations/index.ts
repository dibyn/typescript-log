let apples: number = 5; // number type aanotation
let speed: string = 'fast'; // string
let hasName: boolean = true; // boolean
let nothingMuch: null = null; // null
let now: Date = new Date(); // date
let colors: string[] = ['red', 'green']; //array of string
let numbers: number[] = [5, 6]; // array of number
class Car {
  // classes
}
let car: Car = new Car(); // instance of Car
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}; // Object literal
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}; // functions
// when to use type annotations
// - 1) when a function returns the any type and we need to clarify the value
const json = '{"x": 10. "y": 20}';
const cord: { x: number; y: number } = JSON.parse(json); // typescript can predict JSON.parse return types
console.log(cord);
// 2) when we declare a variable on one line
// and initialize it later
let words = ['red'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'red') foundWord = true;
}

// 3) variable whose type cannot be inferred correctly
let numbers1 = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let index = 0; index < numbers1.length; index++) {
  const element = numbers1[index];
  if (element > 0) numberAboveZero = element;
}

const add = (a: number, b: number): number => {
  return a + b;
};
function divide(a: number, b: number): number {
  return a / b;
}
const multiply = function (a: number, b: number): number {
  return a * b;
};
const logger = (message: string): void => {
  console.log(message);
};
const throwError = (message: string): void => {
  if (!message) throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};
const logWeather = (forecast: { date: Date; weather: string }) => {
  console.log(forecast.date, forecast.weather);
};
//es2015
const logWeather2015 = ({
  date,
  weather,
}: {
  date: Date;
  weather: String;
}): void => {
  console.log(date, weather);
};
logWeather(todaysWeather);
// es2015

//objects

const profile = {
  fname: 'alex',
  age: 20,
  cords: {
    lat: 0,
    lng: 25,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
const { age, fname }: { age: number; fname: string } = profile;
const {
  cords: { lat, lng },
}: { cords: { lat: number; lng: number } } = profile;

//arrays
const carsMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsMake = [['f150'], ['Corolla'], ['camero']];

// ts can do type inference when extracting values from an array
// helps with inference when extracting values
const car1 = carsMakers[0];
const myCar = carsMakers.pop();
// prevent us from adding incompatible values [ ts can prevent us from adding incompatible values to the array ]
// carsMakers.push(100);
// we can get help with map, forEach, reduce functions // helps with method auto complete
carsMakers.map((car: string): string => {
  return car.toLowerCase();
});
// flexible - arrays can still contain multiple different types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];

//tupples -==> // array like structure where each element represents some property of a record describes a single property

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 50,
};

type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 50];
const sprite: Drink = ['clear', true, 50];

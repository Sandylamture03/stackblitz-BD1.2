const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

// function to print api  "welcome to our service" //
function getWelcomeMessage() {
  return 'Welcome to our services!';
}

app.get('/Welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

// function to call aPi for greeting mssgae //
function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

//Create and endpoint that takes a password as a query parameter and return if it is strong (length > 15) or weak.

function checkPassword(password) {
  if (password.length > 15) {
    return 'password is strong';
  } else {
    return 'password is weak';
  }
}

app.get('/check-passwrd', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

// Return the sum of two numbers
// create an endpoint that takes two numbers as query paramters and returns their sum.

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
});

// return subscription status
// cretae an endpoint that takes a username and a boolean indicating subscription status as query parameters, and retyrn a messgae if te user is subscribed or not

function checkSubStatus(username, subscribe) {
  if (subscribe === 'true') {
    return username + ' is subscribed';
  } else {
    return username + ' is not subscribed';
  }
}

app.get('/sub-status', (req, res) => {
  let username = req.query.username;
  let subscribe = req.query.subscribe;
  res.send(checkSubStatus(username, subscribe));
});

//Return the final price after Discount
// create an endpoint that takes a product price and a discount percentage as query parameters, and returns the final price after discount

function calculateFinal(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice.toString();
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateFinal(price, discount));
});

// return a personalized Greeting Message
// create an endpoint that takes a user's age,gender, and name as query parameters, and return a personalized  greeting messgae.

function fullGreet(age, gender, name) {
  return `Hello, ${name}! you are a ${age} year old ${gender}`;
}

app.get('/personal-greet', (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(fullGreet(age, gender, name));
});

// Return the final price after applying discsosunt and tax
// create an endpooint that takes a product price, discount percentafe, and tax rate as query parameters, and return the final price afgter applying discuont and tax.

function calFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(calFinalPrice(price, discount, tax));
});

// Return the total exercise time
// create an endpoint that takes three fitness activity durations (running, cycling, swimming), as query parameter and return the total exercise time

function calTotalTime(running, cycling, swimming) {
  return (running + cycling + swimming).toString();
}

app.get('/total-ex-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(calTotalTime(running, cycling, swimming));
});

// 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let isItem = prompt("What is the name of the item?");
let basePrice = prompt("Whats your Base Price? (In Dollars)");
let blackFriday = prompt("Is today Black Friday?");
let searchEngine = prompt("Did the purchaser find product through the search engine? (Yes or No)");
let compare = prompt("Did you visit the comparison-shopping site?");
let finalPrice = basePrice;
// alertText is the message that we will show to user
let messageText = 'The base price for ' + isItem + ' is ' + basePrice;


if (blackFriday === 'yes') {
    messageText += ' Today is Black Friday, so we will lower the price by 25%. ';
    finalPrice = finalPrice * 0.75;
}

if (searchEngine === 'yes') {
   messageText += 'The purchaser came through a search engine, so we will increase the price by 1%. ';
    finalPrice = finalPrice * 1.01;
}

if (compare === 'yes') {
    messageText += 'You did visit the comparison shopping site ';
    finalPrice = finalPrice * 0.10;
}

alert(messageText + 'The final price is $' + finalPrice);
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
/* 
Be sure to try to find year and citation if possible for at least one, also, create a new tag called humor to also display to webpage. 
The tag property is going to be added to every quote and wrote to the HTML document as well. 
*/

const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing",
    source: "Walt E. Disney",
    tag: "Motivational"
  },
  {
    quote: "I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.",
    source: "Muriel Strode",
    citation: "The Open Court",
    year: 1903,
    tag: "Motivational"
  },
  {
    quote: "Yesterday, upon the stair, I met a man who wasn't there! He wasn't there again today. OH how I wish he'd go away!",
    source: "William Hughes Mearns",
    citation: "Antigonish",
    year: 1899,
    tag: "Creepy"
  },
  {
    quote: "Don’t talk. What you are thunders so loudly above what you say that I cannot hear you.",
    source: "Ralph Waldo Emerson",
    citation: "Social Aims",
    year: 1875,
    tag: "Thoughtful",
  },
  {
    quote: "The exaggerated esteem in which my lifework is held makes me very ill at ease, I feel compelled to think of myself as an involuntary swindler",
    source: "Albert Einstein",
    tag: "Imposter Syndrome",
  },
];



/***
 * `getRandomQuote` function
***/ 
/*
All this method is doing is returning a random index from the array, so that we can later access it's object properties in the printQuote method. 
Math.floor rounds the number down, since javascript .random is weird and doesn't guarantee to return us a whole value, we had to turn something like .86 * 5 down to 4,
as trying to pass quotes[4.3] would just break the program.
We multiply it by quotes length so that the math.floor can round down to multiple indexes, including something like .06 * 5 that would correct be rounded down to 0, to capute the 
first index value, but also a high random like .99 * 5 will still be 4, since math.random will never be 1 we should never see this method try to pull a quote out of the array index.
This method is also built to scale, so that it grows with the quotes array size.


*/
const getRandomQuote = quotesArray => {
  return quotes[Math.floor(Math.random() * quotes.length)];
  
}

const randomBackGroundColor = () => {
  /*
  Fuction that gets 3 random numbers and sets their value to between 0 and 255, then combines the 3 numbers in a rgb string that updates the background color to whatever random value
  the 3 integers return. We'll call this at the beginning of print quote so that each quote has a different background color. 
  */
  const red = Math.floor(Math.random() *256);
  const green = Math.floor(Math.random() *256);
  const blue = Math.floor(Math.random() *256);
  //format needs to be = `rgb(0,0,0)` with the 0's being whatever random integer is created form the 3 variables above 
  const combinedColors = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = combinedColors;
}



/***
 * `printQuote` function
***/
const printQuote = () => {
  randomBackGroundColor();
  quote = getRandomQuote(quotes); // gets a random quote by using our getRandomQuote method on the quotes array. 
  // setting up the quote to return in a string literal
  let quoteToPrint = `
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;
  
  /*
  The 3 statements below check to see if the tag exists in the quote, really appreciated how simple javascript made it to check see, since null also equals false if the property we're
  checking for is in the quote object we can add it, if not, nothing is added we simply move on to check the next property, Finally adding the closing <p> tag after checking if all 
  spans have been added
  */
  if (quote.citation) {
    quoteToPrint += `<span class ="citation"> ${quote.citation}</span>`;
  }
  if (quote.year) {
    quoteToPrint += `<span class ="year"> ${quote.year}</span>`;
  }
  if (quote.tag) {
    quoteToPrint += `<span class ="tag"> ${quote.tag}</span>`; 
  }
  quoteToPrint +=`</p>`;
                     
  document.getElementById('quote-box').innerHTML = quoteToPrint;
             
}
setInterval(printQuote, 5000); // calls the print quote function every 50 seconds this also changes



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
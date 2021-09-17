const quotes = [
  {
    quote: "I don’t want to survive. Want to live the life I want.",
    author: "?",
  },
  { quote: "The less their ability, the more their conceit.", author: "?" },
  { quote: "Only you can change yourself.", author: "?" },
  { quote: "Don’t dream it, be it.", author: "?" },
  { quote: "Only you can change yourself.", author: "?" },
  { quote: "Time you enjoy wasting is not wasted time.", author: "?" },
  { quote: "A day without laughter is a day wasted.", author: "?" },
  { quote: "We can give advice, but we cannot give conduct.", author: "?" },
  { quote: "Who dares, wins.", author: "?" },
  { quote: "Change before you have to.", author: "?" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

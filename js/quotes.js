const quotes = [
  {
    quote: "I don’t want to survive. Want to live the life I want.",
  },
  { quote: "The less their ability, the more their conceit." },
  { quote: "Only you can change yourself." },
  { quote: "Don’t dream it, be it." },
  { quote: "Only you can change yourself." },
  { quote: "Time you enjoy wasting is not wasted time." },
  { quote: "A day without laughter is a day wasted." },
  { quote: "We can give advice, but we cannot give conduct." },
  { quote: "Who dares, wins." },
  { quote: "Change before you have to." },
];

const quote = document.querySelector("#quote span:first-child");
//const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
//author.innerText = todaysQuote.author;

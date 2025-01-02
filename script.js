const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Default quote
const defaultQuote = {
  text: "The only limit to our realization of tomorrow is our doubts of today.",
  author: "Franklin D. Roosevelt",
};

// Display the default quote on load
window.onload = () => {
  displayQuote(defaultQuote);
};

// Function to display a quote
function displayQuote(quote) {
  quoteText.textContent = `"${quote.text}"`;
  authorText.textContent = `- ${quote.author}`;
}

// Function to fetch a random quote from the API
async function getRandomQuote() {
  console.log("Fetching a new quote..."); // Debugging
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data); // Debugging: Zeigt das Ergebnis der API an
    const randomQuote = {
      text: data.content,
      author: data.author,
    };
    displayQuote(randomQuote);
  } catch (error) {
    console.error("Error fetching the quote: ", error);
    quoteText.textContent = "Failed to fetch a new quote.";
    authorText.textContent = "";
  }
}

// Event listener for the "Get Random Quote" button
newQuoteBtn.addEventListener("click", getRandomQuote);

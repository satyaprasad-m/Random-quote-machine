const h1 = document.querySelector('.quote-text');
const h4 = document.querySelector('.quote-author');
const goButton = document.querySelector('.goButton');

const api_url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
console.log("Working");

async function getQuote() {
    const response = await fetch(api_url);
    const json = await response.json();
    let random_quote = json.quotes[Math.round(Math.random() * json.quotes.length)];
    // console.log(random_quote);

    h1.textContent = random_quote.quote;
    h4.innerHTML = "- " + random_quote.author;
}
goButton.addEventListener('click', getQuote);
getQuote();
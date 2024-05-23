document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteButton = document.getElementById('tweet-quote');

    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            displayQuote(data.content, data.author);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    function displayQuote(quote, author) {
        quoteElement.textContent = quote;
        authorElement.textContent = author ? `— ${author}` : '';
    }

    newQuoteButton.addEventListener('click', fetchQuote);

    tweetQuoteButton.addEventListener('click', () => {
        const quote = quoteElement.textContent;
        const author = authorElement.textContent;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} ${encodeURIComponent(author)}`;
        window.open(tweetUrl, '_blank');
    });

    // Fetch a quote when the page loads
    fetchQuote();
});

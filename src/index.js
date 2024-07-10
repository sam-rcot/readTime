// Access the parent window
const parentWindow = window.parent;
// Get the element from the parent window
const article = parentWindow.document.querySelector(".article").textContent;

// Display the text content inside the iframe
const textContainer = document.querySelector('.textContainer');

// Regex to match words
const wordMatchRegExp = /[^\s]+/g;
const words = article.matchAll(wordMatchRegExp)

// Convert iterator to array then work out reading time
const wordCount = [...words].length
const readingTime = Math.round(wordCount / 200)

// Update text with reading time
textContainer.textContent = `⏱️ ${readingTime} min read`
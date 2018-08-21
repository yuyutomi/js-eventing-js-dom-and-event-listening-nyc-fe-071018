const main = document.querySelector('#main');
// can also do things like: 
//takes the first p in a div --> const paragraph = document.querySelector('div > p');
//all paragraphs in a div --> const paragraph = document.querySelector('div > p');

main.addEventListener('click', (event) => {
  console.log("I was clicked");
});
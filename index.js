const main = document.querySelector('#main')
const paragraph = document.querySelector('p')

// can also do things like: 
//takes the first p in a div --> const paragraph = document.querySelector('div > p');
//all paragraphs in a div --> const paragraph = document.querySelector('div > p');

main.addEventListener('click', (event) => {
  console.log("I was clicked")
})

paragraph.addEventListener('click', (event) => {
  alert('You clicked the p!')
  paragraph.style.backgroundColor = 'yellow'
})
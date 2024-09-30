const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const heading = document.querySelector('.heading');

let value = parseInt(heading.innerText);

increment.addEventListener('onClick', () => {
  // increment
  console.log(value);
});

decrement.addEventListener('onClick', () => {
  // increment
});

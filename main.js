const app = document.querySelector('#app');

// const h3 = document.createElement('h3');
// h3.textContent = 'Hello World!';
//
// app.appendChild(h3);
//
// setTimeout(() => {
//     app.removeChild(h3);
// }, 3000);
let count = 0;
const $count = document.querySelector('#output');
$count.textContent = count;

const $addBtn = document.querySelector('.add');
$addBtn.addEventListener('click', () => {
    count++;
    $count.textContent = count;
});
const $resetBtn = document.querySelector('.reset');
$resetBtn.addEventListener('click', () => {
    count = 0;
    $count.textContent = count;
});
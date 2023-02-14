const span = document.querySelectorAll('span'),
    width = document.querySelector('.container').clientWidth,
    height = document.querySelector('.container').clientHeight,
    remaining = document.querySelector('.remaining');

let square = (width / 50) * (height / 50);
let randomColor;

remaining.innerHTML = `Remaining: ${square}`;

span.forEach((item, i) => {
    item.addEventListener('mouseover', () => {
        getColor();
        if (item.style.backgroundColor == ''){
            item.style.backgroundColor = `#${randomColor}`;
            square--;
            remaining.innerHTML = `Remaining: ${square}`;
        }
    });
});

function getColor(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
}
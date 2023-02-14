const span = document.querySelectorAll('span'),
    btn = document.querySelector('button');
let randomColor;

span.forEach(item => {
    item.addEventListener('mouseover', () => {
        if (item.style.backgroundColor == ''){
            getColor();
            item.style.backgroundColor = `#${randomColor}`;
        }
    });
});

function getColor(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
}

btn.addEventListener('click', () => {
    span.forEach(item => {
        item.style.backgroundColor = '';
    });
});
const span = document.querySelectorAll('span');
let randomColor;

span.forEach((item, i) => {
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
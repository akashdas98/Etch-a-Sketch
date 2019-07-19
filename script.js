const main = document.querySelector('.main');
let n = 32;
for(let i = 0; i < n**2; i++) {
    const div = document.createElement('div');
    div.className = 'grid';
    div.style.width = `${1/n*100}%`;
    div.style.height = div.style.width;
    main.appendChild(div);
}

const pixel = main.childNodes;
pixel.forEach(dot => {
    dot.addEventListener('mouseenter', e => {
        e.target.classList.add('hover');
    });
});

const clear = document.querySelector('button');
clear.addEventListener('click', clearPalette);

function clearPalette() {
    pixel.forEach(dot => {
        if(dot.className == 'grid hover') {
            dot.classList.remove('hover');
        }
    });
}
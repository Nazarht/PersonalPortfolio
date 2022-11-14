const next = document.querySelector('.next-button');
const prev = document.querySelector('.previous-button');
const img = document.querySelector('#img-container');
let card = 1;

const firstClone = img.children[0].cloneNode(true);
const lastClone = img.children[img.children.length - 1].cloneNode(true);


img.insertBefore(lastClone, img.children[0]);
img.appendChild(firstClone);

img.style.transitionDuration = '0.0s';
img.style.transform = `translate(-100%)`

next.onclick = function () {
    if (card < img.children.length - 1) {
        card++;
        img.style.transitionDuration = '0.0s';
        img.style.transform = `translate(-${card * 100}%)`;
        if (card === img.children.length - 1){
            card = 1;
            img.style.transitionDuration = '0.0s';
            img.style.transform = `translate(-${card * 100}%)`;
        }
    } else {
        return;
    }

    
};

prev.onclick = function () {
    if (card > 0) {
        card--;
        img.style.transitionDuration = '0.0s';
        img.style.transform = `translate(-${card * 100}%)`;
        if (card === 0){
            card = img.children.length - 2;
            img.style.transitionDuration = '0.0s';
            img.style.transform = `translate(-${card * 100}%)`;
        }
    } else {
        return;
    }

    
};

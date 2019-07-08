// nawigacja
const ham = document.querySelector(".menu-toggle")
const nav = document.querySelector('nav');

ham.addEventListener('click', () => {
    nav.classList.toggle('active');
})


// slides
const slideList = [{
        photo: "images/img1.jpg",
        txt: `I’m looking for freedom, looking for freedom
        And to find it, cost me everything I have`
    }, {
        photo: "images/img3.jpg",
        txt: `This passion inside
        Can't run from myself
        There's nowhere to hide`
    },
    {
        photo: "images/img4.jpg",
        txt: `Cisza i wiatr Słońce i radość 
         deszcz na Twych skroniach \n cóż więcej mógłbyś chcieć `
    },
    {
        photo: "images/img8.jpg",
        txt: `There’s a feeling that I can’t describe
        There’s a feeling that I can’t hide
        Because I’ve never seen a light that’s so bright`
    },
    {
        photo: "images/img10.jpg",
        txt: `Ouch, I have lost myself again
        Lost myself and I am nowhere to be found
        Yeah, I think that I might break
    `
    },
    {
        photo: "images/img12.jpg",
        txt: `How many roads must a man walk down
        Before you call him a man?
        How many seas must a white dove sail
        Before she sleeps in the sand?`

    }
]

const image = document.querySelector('img#slider');
const h1 = document.querySelector('h1#slider');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

// czas zmiany zdjec 
const time = 5000;
//okreslenie ktory slajd aktywny 
let active = 0;

// slides nonstop, jako funkja by zatrzymac przy klikaniu

const changeSlide = () => {
    active++;
    // aby slides nonstop
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].photo;
    h1.textContent = slideList[active].txt;
}

const slideLeft = () => {
    clearInterval(indexInterval);
    active--;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].photo;
    h1.textContent = slideList[active].txt;
    indexInterval = setInterval(changeSlide, time)
}

const slideRight = () => {
    clearInterval(indexInterval);
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].photo;
    h1.textContent = slideList[active].txt;
    indexInterval = setInterval(changeSlide, time)
}

let indexInterval = setInterval(changeSlide, time);

// zmiany zdjecia i tekstu po kliknieciu strzalki
arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);
const cntrl = document.querySelectorAll('.slider-cntrl');
const cntrlMob = document.querySelectorAll('.pagination-mobile > li');
const title = document.querySelector('.title');
const subTitle = document.querySelectorAll('.sub-title');
const img = document.querySelector('.thumbnail');
const count = document.querySelector('.slider-count');
const progress = document.querySelector('.progress div');

let id = 0;

const images = [
    'img/img1.png',
    'img/img2.png',
    'img/img3.png',
    ];

const progressWidth = [
    '33%',
    '66%',
    '100%',
] ;

const text = [
    'Гостиничное дело',
    'Что нужно изучать',
    'Карьерные возможности',
];

const_subtitles = [
    'бизнес отрасль в сфере услуг отелей, гостиниц, баз отдыха, основная цель которой максимальное удовлетворение потребности потребителя, обеспечение высокого уровня комфорта, удовлетворение различных бытовых, хозяйственных и культурных запросов посетителей',
    'Стандартизация и контроль качества гостиничных услуг, Организация службы приема и размещения, Делопроизводство в гостинице, Бухгалтерский учет в гостиничной индустрии, Правовые основы гостиничной деятельности, Управление номерным фондом, Организация службы питания, Оборудование гостиничных и ресторанных предприятий, Контроль качества ресторанной продукции и услуг, Товароведение продовольственных товаров',
    'С образованиемв области гостиничного дела можно работать в различных сферах отельного и ресторанного бизнеса и занимать любые должности — от рядового портье до управляющего']

for(let i = 0; i < cntrl.length; i++) {
    cntrl[i].addEventListener('click', () => {
        slider(i);

        id = i;

        stopAutoSlide();
    });

cntrlMob[i].addEventListener('click', () => {
    slider(i);
    id = 1;
    stopAutoSlide();
});
}

function slider(i) {
    img.src = images[i];
    progress.style.width = progressWidth[i];
    title.innerText = text[i];
    subTitle.forEach(sub => {
        sub.innerText = const_subtitles[i]
    });

    count.innerText = "/0" + (i + 1);

    for(let i = 0; i < cntrl.length; i++) {
        cntrl[i].classList.remove('active');
        cntrlMob[i].classList.remove('pag-active');
    }
    cntrl[i].classList.add('active');
    cntrlMob[i].classList.add('pag-active');
}

function nextSlide() {
    id ++;
    if (id > cntrl.length - 1) {
    id = 0;
    }
    slider(id);
}

let autoSlide = setInterval(nextSlide, 10000);

function stopAutoSlide() {
    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide, 10000);
}

//-------------------------------------------------
// Navegador Sticky
//-------------------------------------------------
window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

}

//-------------------------------------------------
// Navbar + Burger Menú | Responsive
//-------------------------------------------------
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toogle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();


$('#navbar li').on('click', function(){
    $('.nav-links').removeClass('nav-active');
    $('.burger').removeClass('toggle');
});

//-------------------------------------------------
// Opacity Background Image | Turn Off/On Lámpara
//-------------------------------------------------

const turnElem = document.querySelector('.turn');
const offElem = document.querySelector('.off');
const onElem = document.querySelector('.on');

const scrollAmount = -500;
window.addEventListener('scroll', (event) => {
    const {
        top
    } = turnElem.getBoundingClientRect();
    const turnInView = top - window.innerHeight < scrollAmount;
    offElem.style.opacity = +!turnInView;
    onElem.style.opacity = +turnInView;
});


//-------------------------------------------------
// Slider | Storytelling
//-------------------------------------------------
$(function () {
    $('.bxslider').bxSlider({
        auto: false,
        mode: 'fade',
        controls: true,
        pagerCustom: "#bx-pager",
        link: $("#bx-pager a"),
        speed: 400,
        infiniteLoop: false,
        hideControlOnEnd: true,
    });

    $('.bxslider2').bxSlider({
        auto: false,
        mode: 'fade',
        randomStart: false,
        controls: true,
        pager: true,
        speed: 600,
    });
    $('.bxslider3').bxSlider({
        auto: false,
        mode: 'fade',
        controls: true,
        pager: true,
        speed: 600,
    });
    $('.bxslider4').bxSlider({
        auto: false,
        mode: 'fade',
        controls: true,
        pager: true,
        speed: 600,
    });
    $('.bxslider5').bxSlider({
        auto: false,
        mode: 'fade',
        controls: true,
        pager: true,
        speed: 600,
    });

});


//-------------------------------------------------
// Comportamiento del Scrolling
//-------------------------------------------------
$('.menu a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 800);
    }
});

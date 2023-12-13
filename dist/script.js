//navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    //variabel to-top
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');

        //if to-top
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed');

        //else to-top
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
};


// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});

//click diluar hamburger 
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

//darkmode toggle   
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});

// contact us
const scriptURL = 'https://script.google.com/macros/s/AKfycbwVnIaTKmoIf-vfhrXWFmCMuQVCUoaW2KKHkZqnCK9mrGeKraCElnqggAPPjSZvT6sBdQ/exec'
const form = document.forms['submit-to-google-sheet'];
const buttonKirim = document.querySelector('.button-kirim');
const buttonLoading = document.querySelector('.button-loading');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    buttonKirim.classList.toggle('hidden');
    buttonLoading.classList.toggle('hidden');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            buttonKirim.classList.toggle('hidden');
            buttonLoading.classList.toggle('hidden');
            console.log('Success!', response);

            // Tambahkan alert di sini
            if (window.confirm('We have received your message')) {
                form.reset();
            }
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Tambahkan alert untuk kesalahan di sini jika diperlukan
            alert('An error occurred while submitting the form.');
        });
});


//typed js

const typed = new Typed ('.container',  { 
    strings: ['Software Engineer', 'Programmer', 'UI-UX Designer'],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 2000, 
    loop: true
});


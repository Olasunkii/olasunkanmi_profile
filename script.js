const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 200,
// //     reset: true
// });

// sr.reveal('.header',{}); 
// sr.reveal('.hero',{delay: 400}); 
// sr.reveal('.about',{ interval: 200}); 
// sr.reveal('.works',{interval: 200}); 
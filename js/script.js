const body = document.querySelector('.body');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
const first = document.querySelector('.first');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const reader = document.querySelector('.Reader');
const second = document.querySelector('.second');
const address = document.querySelector('.contact_address')
const services = document.querySelector('#Services');
const bookNow = document.querySelector('.container2');
const timeTable = document.querySelector('.Timetable');
const contact = document.querySelector('.contact');
const firstPrice = document.querySelector('.first_price');
const thirdPrice = document.querySelector('.third_price');
const secondPrice = document.querySelector('.second_price');
const socialIcons = document.querySelector('.social-media-icons')


// Counter function
jQuery(document).ready(function(){
  $('.counter').counterUp({
  delay: 10,
  time: 1000
  });
});


// when users scroll 1000px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500 ) {
    document.getElementById('myBtn').style.display = "block";
  } else {
    document.getElementById('myBtn').style.display = "none";
  }
}

//When user clicks on the button,scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Page animation effects
function scrollAppearFirst(){
  const itemPosition = item1.getBoundingClientRect().top;// Gets the height of the element from the top 
  const screenPosition = window.innerHeight/1.2;

  if (itemPosition < screenPosition) {
    item1.style.opacity = '1';
    item1.classList.add('animated', 'fadeIn');
  }
}

function scrollAppearSecond(){
 const itemPosition = item2.getBoundingClientRect().top;
 const screenPosition = window.innerHeight /1.2;

 if (itemPosition < screenPosition) {
   item2.style.opacity = '1';
   item2.classList.add('animated', 'fadeIn');
 }
}

function scrollAppearThird(){
 const itemPosition = item3.getBoundingClientRect().top;
 const screenPosition = window.innerHeight /1.5;

 if (itemPosition < screenPosition) {
   item3.style.opacity = '1';
   item3.classList.add('animated', 'fadeIn');
 }
}

function scrollAppearLast(){
 const itemPosition = item4.getBoundingClientRect().top;
 const screenPosition = window.innerHeight /1.5;

 if (itemPosition < screenPosition) {
   item4.style.opacity = '1';
   item4.classList.add('animated', 'fadeIn');
 }
}

function appearLeft(){
  const itemPosition = first.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (itemPosition < screenPosition) {
    first.classList.add('animated', 'slideInLeft');
  }
}

function appearRight(){
  const itemPosition = second.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (itemPosition < screenPosition) {
    second.classList.add('animated', 'slideInRight');
  }
}

function bookingFlipIn(){
  const itemPosition = bookNow.getBoundingClientRect().top;
  const screenPosition = window.innerHeight /1.5;

  if (itemPosition < screenPosition) {
    bookNow.style.opacity = '1';
    bookNow.classList.add('animated', 'flipInX')
  }
}

function card1flipIn() {
  const itemPosition = card1.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (itemPosition < screenPosition) {
     card1.style.opacity = '1';
     card1.classList.add('animated', 'flipInY');
  }
}

function card2flipIn() {
  const itemPosition = card2.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (itemPosition < screenPosition) {
     card2.style.opacity = '1';
     card2.classList.add('animated', 'flipInY');
  }
}

function card3flipIn() {
  const itemPosition = card3.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (itemPosition < screenPosition) {
     card3.style.opacity = '1';
     card3.classList.add('animated', 'flipInY');
  }
}

function counterFlipIn(){
  const itemPosition = reader.getBoundingClientRect().top;
  const screenPosition = window.innerHeight /1.5;

  if (itemPosition < screenPosition) {
    reader.style.opacity = '1';
    reader.classList.add('animated', 'zoomIn')
  }
}

function timeTableflipIn(){
  const itemPosition = timeTable.getBoundingClientRect().top;
  const screenPosition = window.innerHeight /1.5;

  if (itemPosition < screenPosition) {
    timeTable.style.opacity = '1';
    timeTable.classList.add('animated', 'zoomIn')
  }
}

function firstCardPrice() {
  const itemPosition = firstPrice.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (itemPosition < screenPosition) {
     firstPrice.style.opacity = '1';
     firstPrice.classList.add('animated', 'flipInY');
  }
}

function secondPriceCard() {
  const itemPosition = secondPrice.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (itemPosition < screenPosition) {
     secondPrice.style.opacity = '1';
     secondPrice.classList.add('animated', 'flipInY');
  }
}

function thirdPriceCard() {
  const itemPosition = thirdPrice.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (itemPosition < screenPosition) {
     thirdPrice.style.opacity = '1';
     thirdPrice.classList.add('animated', 'flipInY');
  }
}

function servicesFlipIn(){
  const itemPosition = services.getBoundingClientRect().top;
  const screenPosition = window.innerHeight /1.5;

  if (itemPosition < screenPosition) {
    services.style.visibility = 'visible';
    services.classList.add('animated', 'zoomIn')
  }
}

function contactSlideIn(){
  const itemPosition = contact.getBoundingClientRect().top;
  const screenPosition = window.innerHeight/1.2;

  if (itemPosition < screenPosition) {
    contact.style.visibility = 'visible'
    contact.classList.add('animated', 'slideInLeft');
  }
}

function addressSlideIn(){
 const itemPosition = address.getBoundingClientRect().top;
 const screenPosition = window.innerHeight /1.2;

 if (itemPosition < screenPosition) {
   address.style.visibility = 'visible'
   address.classList.add('animated', 'slideInRight');
 }
}

function bounceIn(){
 const itemPosition = socialIcons.getBoundingClientRect().top;
 const screenPosition = window.innerHeight /1.2;

 if (itemPosition < screenPosition) {
   socialIcons.style.opacity = '1';
   socialIcons.classList.add('animated', 'bounceIn');
 }
}


window.addEventListener('scroll', bounceIn);
window.addEventListener('scroll', appearLeft);
window.addEventListener('scroll', appearRight);
window.addEventListener('scroll', card1flipIn);
window.addEventListener('scroll', card2flipIn);
window.addEventListener('scroll', card3flipIn);
window.addEventListener('scroll', bookingFlipIn);
window.addEventListener('scroll', counterFlipIn);
window.addEventListener('scroll', scrollAppearFirst);
window.addEventListener('scroll', scrollAppearSecond);
window.addEventListener('scroll', scrollAppearThird);
window.addEventListener('scroll', scrollAppearLast);
window.addEventListener('scroll', firstCardPrice);
window.addEventListener('scroll', servicesFlipIn);
window.addEventListener('scroll', thirdPriceCard);
window.addEventListener('scroll', contactSlideIn);
window.addEventListener('scroll', addressSlideIn);
window.addEventListener('scroll', secondPriceCard);
window.addEventListener('scroll', timeTableflipIn);

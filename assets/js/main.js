/**
* Template Name: BizLand - v3.7.0
* Template URL: https://bootstrapmade.com/bizland-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function disableArrows(arrows){
  if(currentArticleSlide>=maxSlide-1){
    arrows[1].style.opacity = .5;
  }
  if(currentArticleSlide < maxSlide-1){
    arrows[1].style.opacity = 1;
  }
  if(currentArticleSlide <= 0){
    arrows[0].style.opacity = .5;
  }
  if(currentArticleSlide>0){
    arrows[0].style.opacity = 1;
  }
}

//Article controlls start
currentArticleSlide = 0;

function updateCurrentArticleSlideIndicator(slide){
  indicator = document.querySelectorAll('.article-slider-indicator span');
  indicator.forEach((element)=>{
    element.classList.remove('active');
  });
  indicator[slide].classList.add('active');
  arrows = document.querySelectorAll('#articles .arrow')
  disableArrows(arrows);
}


function checkArticleIsInView(){
  articleSlide = document.querySelectorAll('.articles-slides > div');
  articleSlide.forEach((element,index)=>{
    if(isInViewport(element)){
    currentArticleSlide = index;
    updateCurrentArticleSlideIndicator(currentArticleSlide)
    }
  })
  
}

function slidRight(){
  articleSlide = document.querySelectorAll('.articles-slides > div');
  maxSlide = document.querySelectorAll('.articles-slides > div').length;

  if(currentArticleSlide < maxSlide-1){
    currentArticleSlide++;
    articleSlide[currentArticleSlide].scrollIntoViewIfNeeded()
  }
}
function slidLeft(){
  if(currentArticleSlide > 0){
    currentArticleSlide--;
    articleSlide[currentArticleSlide].scrollIntoViewIfNeeded()
  }
}
//article controlls end

//work controlls start

currentWorkSlide = 0;
workSlideIndicator = 1;

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events

function updateCurrentWorkSlideIndicator(changeCategory = false){
  maxSlide = document.querySelectorAll('.active-slide2 > div').length;
  slider = document.querySelector(".active-slide2");
  currentSlideIndicator = document.querySelector('.work-indicator .current-slide');
  totalWorkSlides = document.querySelector('.work-indicator .total-slides');
  slider.addEventListener('scroll', function ( event ) {

    // Clear our timeout throughout the scroll
    window.clearTimeout( isScrolling );
  
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {
  
      // Run the callback
      console.log( 'Scrolling has stopped.' );
      currentSlideIndicator.innerText = workSlideIndicator;
      
    }, 66);
  
  }, false);

  if(changeCategory){
    totalWorkSlides.innerText = maxSlide;
    currentSlideIndicator.innerText = workSlideIndicator;
  }
  
}



function checkworkSlideIsInView(){
  workSlide = document.querySelectorAll('.active-slide2 > div');
  workSlide.forEach((element,index)=>{
    if(isInViewport(element)){
      currentworkSlide = index;
      // console.log(index);
      
      // updateCurrentWorkSlideIndicator(currentworkSlide)
    }
  })
}



function slidRight2(){
  workSlides = document.querySelectorAll('.active-slide2 > div');
  maxSlide = document.querySelectorAll('.active-slide2 > div').length;

  

  if(currentWorkSlide < maxSlide-1){
    currentWorkSlide++;
    workSlides[currentWorkSlide].scrollIntoViewIfNeeded()
    ++workSlideIndicator;
    updateCurrentWorkSlideIndicator()
  }
  if(currentWorkSlide == maxSlide-1){
    workRightarrow.style.opacity = .5;
  }
  if(currentWorkSlide < maxSlide-1){
    workRightarrow.style.opacity = 1;
  }
  if(currentWorkSlide > 0){
    workLeftarrow.style.opacity = 1;
  }
  if(currentWorkSlide == 0){
    workLeftarrow.style.opacity = .5;
  }
}
function slidLeft2(){
  workSlides = document.querySelectorAll('.active-slide2 > div');
  maxSlide = document.querySelectorAll('.active-slide2 > div').length;

  

  if(currentWorkSlide >0){
    currentWorkSlide--;
    workSlides[currentWorkSlide].scrollIntoViewIfNeeded()
    --workSlideIndicator
    updateCurrentWorkSlideIndicator()

  }
  if(currentWorkSlide == maxSlide-1){
    workRightarrow.style.opacity = .5;
  }
  if(currentWorkSlide < maxSlide-1){
    workRightarrow.style.opacity = 1;
  }
  if(currentWorkSlide > 0){
    workLeftarrow.style.opacity = 1;
  }
  if(currentWorkSlide == 0){
    workLeftarrow.style.opacity = .5;
  }

}

//work links selection
//check article is in view 
// document.querySelector('.articles-slides').onscroll(checkArticleIsInView)
function updateWorkArrows(){ 
  workLeftarrow = document.querySelector(".slide2-left");
  workRightarrow = document.querySelector(".slide2-right");
  maxSlide = document.querySelectorAll('.active-slide2 > div').length;

  if(currentWorkSlide == maxSlide-1){
    workRightarrow.style.opacity = .5;
  }
  if(currentWorkSlide < maxSlide-1){
    workRightarrow.style.opacity = 1;
  }
  if(currentWorkSlide > 0){
    workLeftarrow.style.opacity = 1;
  }
  if(currentWorkSlide == 0){
    workLeftarrow.style.opacity = .5;
  }
  // console.log('arrow update'+"max:"+maxSlide+"current:"+currentWorkSlide)
}
window.onload = (function() {
 

  document.querySelectorAll('.work-links > .link').forEach((element)=>{
    element.addEventListener('click', (e)=>{
      
      document.querySelectorAll('.work-links > .link').forEach((element)=>{
        element.classList.remove('active');
      });
      e.target.classList.add('active');
      allSlides.forEach((element)=>{
        if(element.classList.contains('active-slide2')){
          element.classList.remove('active-slide2');
          element.classList.add('hide');
        }
      });
      i=e.target.id[e.target.id.length-1] -1;
      allSlides[i].classList.add('active-slide2');
      allSlides[i].classList.remove('hide');
      horizontalSlide2 =0;
      document.querySelector('.active-slide2').scrollTo(horizontalSlide2,0);
      
      if(i==1){
        document.querySelectorAll('.industrySubLink').forEach(
          (element)=>{
            element.classList.remove('hide');
          }
        )
      }else{
        document.querySelectorAll('.industrySubLink').forEach(
          (element)=>{
            if(!element.classList.contains('hide')){
            element.classList.add('hide');
            }
          }
        )
      }
      currentWorkSlide=0;
      workSlideIndicator = 1;
      updateWorkArrows();
      updateCurrentWorkSlideIndicator(true);
    });

      

})

  document.querySelectorAll('li.industrySubLink').forEach((element)=>{
    element.addEventListener('click', (e)=>{
      document.querySelectorAll('.industrySubLink').forEach((element)=>{
        element.classList.remove('active');
      });
      e.target.classList.add('active');
      if(e.target.id == 'medical'){
      document.querySelector('.active-slide2').scrollTo(0,0);
      }
      if(e.target.id == 'product'){
      document.querySelector('.active-slide2').scrollTo(200,0);
      }
    });
  })

})();

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
  on('click', '.close', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    select('.mobile-nav-toggle').classList.toggle('bi-list')
    select('.mobile-nav-toggle').classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox
   */
  // const glightbox = GLightbox({
  //   selector: '.glightbox'
  // });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  // if(window.location.hostname != 'cerulean-bonbon-9ec587.netlify.app'){
  //   document.body.style.opacity = 0;
  // }

  /**
   * Initiate portfolio lightbox 
   */
  // const portfolioLightbox = GLightbox({
  //   selector: '.portfolio-lightbox'
  // });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

const carouselText = [
  { text: "Apple", color: "red" },
  { text: "Orange", color: "orange" },
  { text: "Lemon", color: "yellow" }
];

$(document).ready(async function () {
  carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

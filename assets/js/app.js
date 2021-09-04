let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

/**
 * Carte map
 */
 let map = document.querySelector('#map');
 let paths = document.querySelectorAll('.map__image a');
 let links = document.querySelectorAll('.map__list a');
 let ville = document.querySelector('#carte-map .carousel');


document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();

  let paths_ville_B = document.querySelectorAll('.map__image a path');
  paths_ville_B.forEach((element)=>{
  element.classList.remove('ville_active');
 });

 document.querySelector('#carte-map .carousel').querySelectorAll('.carousel__item--visible').forEach(function(item){
  let id = item.id.replace('list-','');
  let path_ = document.getElementById(`region-${id}`).firstElementChild;
  path_.classList.add("ville_active");
});
 
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();

  let paths_ville_C = document.querySelectorAll('.map__image a path');
  paths_ville_C.forEach(function(element){
    element.classList.remove('ville_active');
  });
 
  ville.querySelectorAll('.carousel__item--visible').forEach(function(item){
   let itemHtml = item;
   let id = itemHtml.id.replace('list-','');
   let path = document.getElementById(`region-${id}`).firstElementChild;
   path.classList.add("ville_active");
 });
}

 if(NodeList.prototype.forEach === undefined){
     NodeList.prototype.forEach = function(callback){
         [].forEach.call(this, callback);
     }
 }
 
 let activeArea = (id)=>{

  let paths_ville = document.querySelectorAll('.map__image a path');
  paths_ville.forEach(function(element){
  element.classList.remove('ville_active');
  });

  ville.querySelectorAll('.carousel__item--visible').forEach(function(item){
         item.classList.remove('carousel__item--visible')
     })
     if(id !== undefined){
         document.getElementById(`list-${id}`).classList.add('carousel__item--visible');
         document.getElementById(`region-${id}`).classList.add('carousel__item--visible');
         document.getElementById(`region-${id}`).firstElementChild.classList.add('ville_active');
     }
 }

 paths.forEach((path)=>{
    path.addEventListener('mouseover',()=>{
      let id = path.firstElementChild.id.replace('region-','');
      activeArea(id);
    });
 });
 
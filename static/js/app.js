let slideIndex = 1;
showSlides(slideIndex);

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const menu = document.querySelector('.menu_button');
const nav = document.querySelector('.main__nav');
let menuToggle = false;

const projectTexts = document.querySelectorAll('.project_text');

const aboutMe = document.querySelector('.about');
const modal = document.querySelector('.aboutme_modal');

aboutMe.addEventListener('click', () => {
  modal.addEventListener('click', () => {
    setToNone(modal);
  })
    setToBlock(modal);
})

projectTexts.forEach(projectText => {
  const title = projectText.querySelector('.title');
  const text = projectText.querySelector('p');
  const projectTitle = projectText.querySelector('.project_title');
  let projectToggle = false;
  title.addEventListener('click',() => {
    if(!projectToggle){
      setToBlock(text);
      projectTitle.style.alignItems = 'flex-end';
      projectTitle.style.justifyContent = 'flex-end';
    }
    else {
      setToNone(text);
      projectTitle.style.alignItems = 'flex-start';
      projectTitle.style.justifyContent = 'center';
    }
    projectToggle = !projectToggle;
  })
})

menu.addEventListener('click', () => {
  if(!menuToggle){
    setToFlex(nav);
  }
  else{
    setToNone(nav);
  }
    menuToggle = !menuToggle;
})

next.addEventListener('click', () => {
  plusSlides(1)
})

prev.addEventListener('click', () => {
  plusSlides(-1)
})

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}
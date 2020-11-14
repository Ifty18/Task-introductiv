let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{

  let slides = document.getElementsByClassName("ASIIslider_slide");

  let dots = document.getElementsByClassName("ASIIslider_dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (let i = 0; i < slides.length; i++) 
  {
      slides[i].classList.remove("ASIIslider_activeSlide");
  }
  for (let i = 0; i < dots.length; i++) 
  {
      dots[i].classList.remove("ASIIslider_activeDot");
  }
  
  slides[slideIndex-1].classList.add("ASIIslider_activeSlide");
  dots[slideIndex-1].classList.add("ASIIslider_activeDot");
}
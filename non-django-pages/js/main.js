/*========== FOOTER DYNAMIC YEAR ==========*/
const date = new Date();
$('.year').html(date.getFullYear());

/*========== SMOOTH SCROLL TO LINK ==========*/
$(window).on('on', function(){
  const selector = 'ul li';
  let path = window.location.href.split('/')
  console.log(path)
  let lookup = path[path.length-1]
  console.log(lookup)

  $(selector).each(function(){
    $(this).children('a').removeClass('nav-link-fade-up-active');
    if($(this).find('a').attr('href')==('./'+lookup)) {
      $(this).children('a').addClass('nav-link-fade-up-active');
    }
  })
});

/*========== SMOOTH SCROLL TO LINK ==========*/
$(document).on('click', 'a[href^="#"]', function (event) { //when link with "#" clicked
  event.preventDefault(); //prevent default click event
  $('html, body').animate({ //animate window scrolling (on click of "#" link)
      scrollTop: $($.attr(this, 'href')).offset().top //when scrolling to link destination
  }, 1000); //at animated window speed of 1000ms
});

/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () { //when document(DOM) loads completely
  if ($(window).width() < 768) { //if the window is less than 768px
    $("div").attr('data-animation', 'fadeInUp'); //any div with the "data-animation" attribute should have it's value (animation style) changed to "fadeInUp"
    $("div").attr('data-delay', '0s'); //remove data delay
  }
});

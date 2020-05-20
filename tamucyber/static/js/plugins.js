/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
$(document).ready(function () { //when document(DOM) loads completely
  checkScroll(); //check if page is scrolled
  $(window).scroll(checkScroll); //get scroll position of window
});

function checkScroll() { //check if page is scrolled
  if ($(window).scrollTop() >= 220) { //if window is scrolled 220px or more
      $('.navbar').addClass('solid'); //add class 'solid' to element with class 'navbar'
  } else { //if page is not scrolled 300px from top
      $('.navbar').removeClass('solid'); //remove class 'solid' from navbar element
  }
}

/*========== FADE OUT HOME TITLE & CAPTION ON SCROLL ==========*/
$(document).ready(function(){
    $(window).scroll(function(){
        $("#home-title").css("opacity", 1.5 - $(window).scrollTop() / 250);
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        $("#home-title-caption").css("opacity", 1.6 - $(window).scrollTop() / 300);
    });
});


/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
  $('.navbar-toggler').click(function () { //when navbar-toggler is clicked
    if ($(window).scrollTop() <= 300) { //if window scrolled 300px or less from top
      $("nav.navbar").toggleClass("solid-toggle"); //add the solid class to navbar
    }
  });


/*========== SMOOTH SCROLL TO LINK ==========*/
$(document).on('click', 'a[href^="#"]', function (event) { //when link with "#" clicked
  event.preventDefault(); //prevent default click event
  $('html, body').animate({ //animate window scrolling (on click of "#" link)
      scrollTop: $($.attr(this, 'href')).offset().top //when scrolling to link destination
  }, 1000); //at animated window speed of 1000ms
});


/*========== BOUNCING DOWN ARROW ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
$(window).scroll(function(){ //on browser scroll
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //make the opacity for the arrow class go from 1 to "-" (negative infinity) spanning 250px in height
  });
});

/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () { //when document(DOM) loads completely
  if ($(window).width() < 768) { //if the window is less than 768px
    $("div").attr('data-animation', 'fadeInUp'); //any div with the "data-animation" attribute should have it's value (animation style) changed to "fadeInUp"
    $("div").attr('data-delay', '0s'); //remove data delay
  }
});


/*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
$(function () { // a self calling function
  function onScrollInit(items, trigger) { // a custom made function
      items.each(function () { //for every element in items run function
          var osElement = $(this), //set osElement to the current
              osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
              osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

          osElement.css({ //change css of element
              '-webkit-animation-delay': osAnimationDelay, //for safari browsers
              '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
              'animation-delay': osAnimationDelay //normal
          });

          var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

          osTrigger.waypoint(function () { //scroll upwards and downwards
              osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
          }, {
                  triggerOnce: true, //only once this animation should happen
                  offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
              });
      });
  }

  onScrollInit($('.os-animation')); //function call with only items
  onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});
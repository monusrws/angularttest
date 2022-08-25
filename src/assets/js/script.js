jQuery(document).ready(function () {
  var isMobileCheck = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobileCheck.Android() || isMobileCheck.BlackBerry() || isMobileCheck.iOS() || isMobileCheck.Opera() || isMobileCheck.Windows());
    }
};






  /* var swiper = new Swiper('.swiper-inner-slider', {

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); */
  
 
  var newReleaseSwiperX = 0, ottSliderX=0, ottSliderAcclaimedX= 0, ottSliderTrailerX = 0;
  /* var ottSlider = new Swiper('.ott-slider', {
    slidesPerView: 4.5,
    spaceBetween: 30,
    pagination: {
      el: '.ott-slider-pagination',
      type: 'progressbar',
    },
    breakpoints: {
     
      499: {
        slidesPerView: 1.2,
        spaceBetweenSlides: 50
      },
      600: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
      },
      991: {
        slidesPerView: 2.2,
        spaceBetweenSlides: 50
      },
      1025: {
        slidesPerView: 3.5,
        spaceBetweenSlides: 50
      },
    },
    on: {
      init: function () {
        if(!isMobileCheck.any()){
        
          $('.ott-slider').mousemove(function (e) {
            var ottSliderSlidesLength = ottSlider.slides.length;
              let slideTo = ottSlider.activeIndex;
              if (e.clientX > (ottSliderX+70) &&  ottSlider.activeIndex < (ottSliderSlidesLength-1)) {
                slideTo = ottSlider.activeIndex + 1;
                ottSliderX = e.clientX;
                ottSlider.slideTo(slideTo, 8000);
              }
              else if(e.clientX < (ottSliderX-70) && ottSlider.activeIndex > 0) {
                slideTo = ottSlider.activeIndex - 1;
                ottSliderX = e.clientX;
                ottSlider.slideTo(slideTo, 8000);
              }
          });
          
        }
      }
    }
  }); */

  /* var ottSliderAcclaimed = new Swiper('.ott-slider-acclaimed', {
    slidesPerView: 4.5,
    spaceBetween: 30,
    pagination: {
      el: '.ott-slider-acclaimed-pagination',
      type: 'progressbar',
    },
    breakpoints: {
     
      499: {
        slidesPerView: 1.2,
        spaceBetweenSlides: 50
      },
      600: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
      },
      991: {
        slidesPerView: 2.2,
        spaceBetweenSlides: 50
      },
      1025: {
        slidesPerView: 3.5,
        spaceBetweenSlides: 50
      },
    },
    on: {
      init: function () {
        if(!isMobileCheck.any()){
         
          $('.ott-slider-acclaimed').mousemove(function (e) {
            var ottSliderAcclaimedSlidesLength = ottSliderAcclaimed.slides.length;
              let slideTo = ottSliderAcclaimed.activeIndex;
              if (e.clientX > (ottSliderAcclaimedX+70) &&  ottSliderAcclaimed.activeIndex < (ottSliderAcclaimedSlidesLength-1)) {
                slideTo = ottSliderAcclaimed.activeIndex + 1;
                ottSliderAcclaimedX = e.clientX;
                ottSliderAcclaimed.slideTo(slideTo, 8000);
              }
              else if(e.clientX < (ottSliderAcclaimedX-70) && ottSliderAcclaimed.activeIndex > 0) {
                slideTo = ottSliderAcclaimed.activeIndex - 1;
                ottSliderAcclaimedX = e.clientX;
                ottSliderAcclaimed.slideTo(slideTo, 8000);
              }
          });
         
        }
      }
    }
  }); */

  /* var ottSliderTrailer = new Swiper('.ott-slider-trailer', {
    slidesPerView: 3.2,
    spaceBetween: 30,
    pagination: {
      el: '.ott-slider-trailer-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      // when window width is <= 499px
      499: {
        slidesPerView: 1.2,
        spaceBetweenSlides: 50
      },
      600: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
      },
      991: {
        slidesPerView: 2.2,
        spaceBetweenSlides: 50
      },
      1025: {
        slidesPerView: 3.5,
        spaceBetweenSlides: 50
      },
    },
    on: {
      init: function () {
        if(!isMobileCheck.any()){
         
          $('.ott-slider-trailer').mousemove(function (e) {
            var ottSliderTrailerSlidesLength = ottSliderTrailer.slides.length;
              let slideTo = ottSliderTrailer.activeIndex;
              if (e.clientX > (ottSliderTrailerX+70) &&  ottSliderTrailer.activeIndex < (ottSliderTrailerSlidesLength-1)) {
                slideTo = ottSliderTrailer.activeIndex + 1;
                ottSliderTrailerX = e.clientX;
                ottSliderTrailer.slideTo(slideTo, 8000);
              }
              else if(e.clientX < (ottSliderTrailerX-70) && ottSliderTrailer.activeIndex > 0) {
                slideTo = ottSliderTrailer.activeIndex - 1;
                ottSliderTrailerX = e.clientX;
                ottSliderTrailer.slideTo(slideTo, 8000);
              }
          });
          
        }
      }
    }
  }); */

  /* var swiper = new Swiper('.home-page-slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); */


  /* var newReleaseSwiper = new Swiper('.new-release-slider', {
    slidesPerView: 4.2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      499: {
        slidesPerView: 1.2,
        spaceBetweenSlides: 50
      },
      600: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
      },
      991: {
        slidesPerView: 2.2,
        spaceBetweenSlides: 50
      },
      1025: {
        slidesPerView: 3.5,
        spaceBetweenSlides: 50
      },
    },
    on: {
      init: function () {
        if(!isMobileCheck.any()){
         
          $('.new-release-slider').mousemove(function (e) {
            var newReleaseSwiperSlidesLength = newReleaseSwiper.slides.length;
            //if(!newReleaseSwiper.animating){
              let slideTo = newReleaseSwiper.activeIndex;
              //let curTranslate = newReleaseSwiper.getTranslate();
              //let translateTo = 0;
              if (e.clientX > (newReleaseSwiperX+70) &&  newReleaseSwiper.activeIndex < (newReleaseSwiperSlidesLength-1)) {
                slideTo = newReleaseSwiper.activeIndex + 1;
                //translateTo = curTranslate  - 100;
                newReleaseSwiperX = e.clientX;
                newReleaseSwiper.slideTo(slideTo, 8000);
              }
              else if(e.clientX < (newReleaseSwiperX-70) && newReleaseSwiper.activeIndex > 0) {
                slideTo = newReleaseSwiper.activeIndex - 1;
                newReleaseSwiperX = e.clientX;
                newReleaseSwiper.slideTo(slideTo, 8000);
                //translateTo = curTranslate + 100;
              }            
            //}
          });
         
        }
      }
    }
  }); */
  /* var swiper = new Swiper('#news-part', {
    spaceBetween: 30,
    slidesPerView: 3.2,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is <= 499px
      499: {
        slidesPerView: 1.2,
        spaceBetweenSlides: 50
      },
      600: {
        slidesPerView: 2,
        spaceBetweenSlides: 50
      },
      991: {
        slidesPerView: 2.2,
        spaceBetweenSlides: 50
      },
      1025: {
        slidesPerView: 3.5,
        spaceBetweenSlides: 50
      },
    }
  }); */

  /* var swiper = new Swiper('#social-part', {
    spaceBetween: 30,
    slidesPerView: 3.2,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  }); */

 /*  var swiper = new Swiper('.featured-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: '3',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },

  }); */
});


jQuery(document).ready(function(){
   
  !function ($) {
 
   "use strict";
 
   /**
   * Swiper slider - Timeline
   */
   var container = $('.timeline');
 
   /* var timelineContents = new Swiper('.timeline-contents', {
     navigation: {
       nextEl: '.timeline-button-next',
       prevEl: '.timeline-button-prev',
     },
     grabCursor: true,
       spaceBetween: 10,
       autoHeight: true,
     autoplay: {
       delay: (container.data('autoplay'))?parseInt(container.data('autoplay'), 10):5000,
     },
   speed: (container.data('speed'))?parseInt(container.data('speed'), 10):700,
   }); */
 
    
   /* var timelineDates = new Swiper('.timeline-dates', {
       spaceBetween: 70,
       centeredSlides: true,
       slidesPerView: 'auto',
       touchRatio: 0.2,
       slideToClickedSlide: true
   }); */
   let slideChange = false;
   let yearChange = false;
   let curYearIndex = -1;
   /* timelineContents.on('slideChangeTransitionStart',function(){
     let activeIndex = this.activeIndex;
     let slidesArray = this.slides;
     let currentSlide =  $(slidesArray[activeIndex]);
     let curYear = currentSlide.attr('data-year');
     let yearIndex = 0;
     $('.timeline-dates .swiper-slide').each(function(i,v){
       if($(this).attr('data-year') == curYear){
         yearIndex = i;
         return false;
       }
     });
     if(curYearIndex != yearIndex){
       curYearIndex = yearIndex;
       slideChange = true;
       timelineDates.slideTo(yearIndex);
     }
   }); */
   /* timelineDates.on('slideChangeTransitionStart',function(){
     let activeIndex = this.activeIndex;
     let slidesArray = this.slides;
     let currentSlide =  $(slidesArray[activeIndex]);
     let curYear = currentSlide.attr('data-year');
     if(slideChange === false){
       let slideIndex = 0;
       $('.timeline-contents .swiper-slide').each(function(i,v){
         if($(this).attr('data-year') == curYear){
           slideIndex = i;
           return false;
         }
       });
       timelineContents.slideTo(slideIndex);
     }
     slideChange = false;
   }); */
 //   timelineContents.controller.control = timelineDates;
 //   timelineDates.controller.control = timelineContents;
 
 }(jQuery);
 
 
  });

$(window).scroll(function () {
  if ($(this).scrollTop() > 350) {
    $('header').addClass('newClass');

  } else {
    $('header').removeClass('newClass');
  }
});

jQuery(document).ready(function () {
  // $('section.home-page-news .swiper-wrapper').each(function(){var highestBox = 0;$('.news-box', this).each(function(){if($(this).height() > highestBox) {
  //         highestBox = $(this).height(); 
  //       }
      
  //     });   $('.news-box',this).height(highestBox);
                    
  //   }); 
  // $("a.ubermenu-responsive-toggle-content-align-left").click(function(){
  //   $("header").toggleClass("main-nav");
  // });
  jQuery('.ubermenu-responsive-toggle').on('ubermenutoggledopen', function (e) {

    $("header").addClass("main-nav");
  });
  jQuery('.ubermenu-responsive-toggle').on('ubermenutoggledclose', function (e) {

    $("header").removeClass("main-nav");
  });
});

jQuery(document).ready(function () {
 /*  $('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    lazyLoad: true,
    nav: true,
    navText: ["<div class='icon-prev-btn'></div>", "<div class='icon-next-btn'></div>"],
    responsive: {
      0: {
        items: 1.2,
        stagePadding: 0
      },
      600: {
        items: 1.2,
        stagePadding: 0
      },
      1200: {
        items: 1,
        stagePadding: 250
      },
      1400: {
        items: 1,
        stagePadding: 300
      },
      1600: {
        items: 1,
        stagePadding: 350
      },
      1800: {
        items: 1,
        stagePadding: 400
      }
    }
  }) */
});

 function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}









$(window).on("load",function(){
  
  // home section slideshow
  let slideIndex = $(".slide.active").index();
  const slideLen = $(".slide").length;
  
  function slideShow(){
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    if(slideIndex == slideLen-1){
      slideIndex = 0;
    }
    else{
      slideIndex++;
    }
    setTimeout(slideShow,5000);
  }
  slideShow();

  //gallery popup
  const wHeight = $(window).height();
  $(".gallery-popup img").css("max-height", wHeight + "px");

  let gpIndex = 0;
  const totalGalleryItems = $(".gallery-item").length;

})
var preloader = document.getElementById('load_icon');
function load__() {
  preloader.style.display = 'none';
}


$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header").removeClass("active");
      }
  });
});



$(".navigation .nav-item").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
        $(this).children("ul").stop().slideDown(100);
    } else {
        $(this).children("ul").stop().slideUp(300);
    }
});


$( ".readMore" ).click(function() {
    $(this).hide();
    $(this).parents(".row").next("#HiddenDiv").slideToggle();
});


"use script";
$(document).ready(function () {
  // lightgallery
  $("#lightgallery").lightGallery();

  // back to top
  $(window).on("scroll", function () {
    let currentScrolling = $(this).scrollTop();
    let bc2top = $(".backToTop");

    if (currentScrolling > 150) {
      bc2top.fadeIn();
    } else {
      bc2top.fadeOut(1000);
    }
  });
  // preloader
  $(function () {
    // makes sure the whole site is loaded
    var preloader = $("#preloader div");
    preloader.fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow");
    // will fade out the white DIV that covers the website.
    $("body").delay(350).css({ overflow: "visible" });
  });
  // nav
  $(".nav-link ").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  //   end
});

let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

window.addEventListener("scroll", function () {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("active", windowPosition);
});

hamburgerMenu.addEventListener("click", function () {
  header.classList.toggle("menu-open");
});

//TOGGLING NESTED ul
$(".drop-down .selected a").click(function () {
  $(".drop-down .options ul").toggle();
});

//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down .options ul li a").click(function () {
  var text = $(this).html();
  $(".drop-down .selected a span").html(
    text + `&nbsp;&nbsp; <i class="fas fa-angle-down"></i>`
  );
  $(".drop-down .options ul").hide();
});

//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("drop-down"))
    $(".drop-down .options ul").hide();
});

$(".recommendation-slider").slick({
  infinite: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  touchMove: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
});

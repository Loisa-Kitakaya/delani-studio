//jquery front-end code
$(document).ready(function() {
  //function to control the display of text in-place of the what we do icons

  //design space
  $("#design-icon").click(function() {
    $("#design-icon").hide();
    $("#design-icon-description").toggle();
    $("#design-icon-description").show();
  });
  $("#design-icon-description").click(function() {
    $("#design-icon-description").hide();
    $("#design-icon").toggle();
    $("#design-icon").show();
  });
  //development-space
  $("#development-icon").click(function() {
    $("#development-icon").hide();
    $("#development-icon-description").toggle();
    $("#development-icon-description").show();
  });
  $("#development-icon-description").click(function() {
    $("#development-icon-description").hide();
    $("#development-icon").toggle();
    $("#development-icon").show();
  });
  //product management stage
  $("#product-icon").click(function() {
    $("#product-icon").hide();
    $("#product-icon-description").toggle();
    $("#product-icon-description").show();
  });
  $("#product-icon-description").click(function() {
    $("#product-icon-description").hide();
    $("#product-icon").toggle();
    $("#product-icon").show();
  });

  //functions to control the display of the project headers on the project images on mouse hoover, in the portfolio section

  //project one
  $("#project-one").hover(function() {
    $("#project-one-title").toggle("#project-one");
  });
  //project two
  $("#project-two").hover(function() {
    $("#project-two-title").toggle("#project-two");
  });
  //project three
  $("#project-three").hover(function() {
    $("#project-three-title").toggle("#project-three");
  });
  //project four
  $("#project-four").hover(function() {
    $("#project-four-title").toggle("#project-four");
  });
  //project five
  $("#project-five").hover(function() {
    $("#project-five-title").toggle("#project-five");
  });
  //project six
  $("#project-six").hover(function() {
    $("#project-six-title").toggle("#project-six");
  });
  //project seven
  $("#project-seven").hover(function() {
    $("#project-seven-title").toggle("#project-seven");
  });
  //project eight
  $("#project-eight").hover(function() {
    $("#project-eight-title").toggle("#project-eight");
  });
});

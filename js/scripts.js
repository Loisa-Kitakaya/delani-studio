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
  $().hoover(function() {
    $().toggle();
    $().show();
  });
  //project two
  $().hoover(function() {
    $().toggle();
    $().show();
  });
  //project three
  $().hoover(function() {
    $().toggle();
    $().show();
  });
  //project four
  $().hoover(function() {
    $().toggle();
    $().show();
  });
  //project five
  $().hoover(function() {
    $().toggle();
    $().show();
  });
  //project six
  $().hoover(function() {
    $().toggle();
    $().show();
  });
  //project seven
  $().hoover(function() {
    $().toggle();
    $().show();
  });
  //project eight
  $().hoover(function() {
    $().toggle();
    $().show();
  });
});

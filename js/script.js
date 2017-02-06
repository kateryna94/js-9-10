$(function () {
var $firstLinks = $('.menu__item');
var $secondLinks = $('.submenu__item');

$firstLinks.hover(function() {
  $(this).children('.submenu').stop(true, false).slideToggle(300).animate({
    backgroundColor: "#81a0f7",
  }, 500);
}, function() {
  $(this).children('.submenu').stop(true, false).slideToggle(300).animate({
    backgroundColor: "#9ba7fd",
  }, 500);
})

$secondLinks.hover(function() {
  $(this).children('.undersubmenu').stop(true, false).slideToggle(300).animate({
    backgroundColor: "#81a0f7",
      }, 500);
}, function() {
  $(this).children('.undersubmenu').stop(true, false).slideToggle(300).animate({
    backgroundColor: "#9ba7fd",
  }, 500);
})

$( "#holiday" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );

  $('input').iCheck({
            checkboxClass: 'icheckbox_minimal',
            radioClass: 'iradio_minimal'
          });

});

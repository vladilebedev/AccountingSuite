$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function(){
    $(".navbar-toggler").click(function() {
        $(".navbar-toggler-icon").toggleClass("active");
    });
    
    $(".navbar-toggler").click(function() {
        $(".collapse").toggleClass("menu_min");
        $(".sw-topper").toggleClass("sw-topper-min");
    });
});
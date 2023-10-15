$(document).ready(function() {
    $("img").click(function() {
      if ($(this).hasClass("zoomed")) {
        $(this).removeClass("zoomed");
      } else {
        $(this).addClass("zoomed");
      }
    });
  });
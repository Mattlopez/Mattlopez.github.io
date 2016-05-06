$(document).ready(function(){

      // Opacity when hovering over

      $('.austir_logo').mouseenter(function() {
            $(this).stop(true).animate({opacity: 0.5});
          });
      $('.austir_logo').mouseout(function() {
            $(this).stop(true).animate({opacity: 1});
          });

      $('.twitter_logo').mouseenter(function() {
            $(this).stop(true).animate({opacity: 0.5});
          });
      $('.twitter_logo').mouseout(function() {
            $(this).stop(true).animate({opacity: 1});
          });

      $('.facebook_logo').mouseenter(function() {
            $(this).stop(true).animate({opacity: 0.5});
          });
      $('.facebook_logo').mouseout(function() {
            $(this).stop(true).animate({opacity: 1});
          });

      $('.grey').mouseenter(function() {
            $('.grey_text').attr("class","grey_text_on")
            $(this).stop(true).animate({opacity: 0.5});
          });
      $('.grey').mouseout(function() {
            $('.grey_text_on').attr("class",'grey_text');
            $(this).stop(true).animate({opacity: 1});
          });

})

   

      var owl = $(".carousel");
      owl.owlCarousel({
        margin: 20,
        loop: true,
        autoplayHoverPause: true,
   		
        responsive: {
          0:{
            items:1,
            nav: false
          },
          600:{
            items:2,
            nav: false
          },
          1000:{
            items:3,
            nav: false
          }
        }

      });
     
     $('#navigation-left').click(function() {
    owl.trigger('prev.owl.carousel');})
     $('#navigation-right').click(function() {
    owl.trigger('next.owl.carousel');})
   
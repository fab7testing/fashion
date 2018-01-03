  
//nav effect

        $(document).ready(function() {
            $("#cross").hide();
            $("#bars").click(function(){
                $("#nav").animate({"right": 0 }, "slow");
                $("#bars").fadeOut(500);
                $("#cross").fadeIn(500);
            });
            $("#cross").click(function (){
                $("#nav").animate({"right": 1000 }, "slow");
                $("#cross").fadeOut(500);
                $("#bars").fadeIn(500);
            });
            $("#main").click(function (){
                $("#nav").animate({"right": 1000 }, "slow");
                $("#cross").fadeOut(500);
                $("#bars").fadeIn(500);
            });
        });
        
//nav effect


//owlcarousel

 $(document).ready(function () {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 4
                , loop: true
                , margin: 0
                , autoplay: true
                , autoplayTimeout: 3000
                , autoplayHoverPause: false,
                 prevNext:false,
                 responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    480:{
                        items:1,
                        nav:false
                    },
                    768:{
                        items:2,
                        nav:true,
                        loop:false
                    },
                    1366:{
                        items:4,
                        nav:true,
                        loop:false
                    }
                }
                        });
        })
		

//owlcarousel

//nav effect

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
    });

//nav effect
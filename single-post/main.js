(function($){"use strict";$(window).on('load',function(event){$('#loader').fadeOut();});$(window).on('scroll',function(event){var scroll=$(window).scrollTop();if(scroll<20){$(".navigation").removeClass("sticky");}else{$(".navigation").addClass("sticky");}});$('.page-scroll').click(function(){var hash=this.hash;var position=$(hash).offset().top-60;$('html').animate({scrollTop:position},900);});var scrollLink=$('.page-scroll');$(window).scroll(function(){var scrollbarLocation=$(this).scrollTop();scrollLink.each(function(){var sectionOffset=$(this.hash).offset().top-73;if(sectionOffset<=scrollbarLocation){$(this).parent().addClass('active');$(this).parent().siblings().removeClass('active');}});});$(".navbar-nav a").on('click',function(){$(".navbar-collapse").removeClass("show");});$(".navbar-toggler").on('click',function(){$(this).toggleClass("active");});$(".navbar-nav a").on('click',function(){$(".navbar-toggler").removeClass('active');});$('.counter').counterUp({time:1000});$('#portfolio').mixItUp();$('.lightbox').magnificPopup({type:'image',gallery:{enabled:true,}});var owl=$("#testimonials");owl.owlCarousel({navigation:false,pagination:true,slideSpeed:1000,stopOnHover:true,autoPlay:true,responsive:{0:{items:1},768:{items:2}}});var owl=$("#clients-scroller");owl.owlCarousel({navigation:false,nav:false,autoPlay:true,autoplayTimeout:1000,loop:true,responsive:{0:{items:1},480:{items:2},768:{items:3},992:{items:4},1200:{items:5}}});$('.video-popup').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false,});$(".back-to-top").click(function(){$("html,body").animate({scrollTop:0},1000);});$(window).scroll(function(){if($(this).scrollTop()>180){$(".back-to-top").fadeIn();}else{$(".back-to-top").fadeOut();}});new WOW().init();}(jQuery));
$(function(){

	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.banner-slider, .testimonial-slider').slick({
		dots:true,
		arrows:false,

	})

	$('.portfolio-slider').slick({
		dots:true,
		appendArrows: '.portfolio-slider--buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-right"></i></button>',

	})

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	}

	$(window).bind('load resize', hf);


});

   



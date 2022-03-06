

$(function() {

	if ($(window).width() > 800 ) {
		for (i = 1; i <= 4; i++) {
			$(".rotateme").eq(i - 1).height(600 * (i / 4));
			$(".rotateme").eq(i - 1).width(600 * (i / 4));
		}
	} else if ($(window).width() < 800 && $(window).width() > 400) {
		for (i = 1; i <= 4; i++) {
			$(".rotateme").eq(i - 1).height(300 * (i / 4));
			$(".rotateme").eq(i - 1).width(300 * (i / 4));
		}
	} else if ($(window).width() < 400) {
		for (i = 1; i <= 4; i++) {
			$(".rotateme").eq(i - 1).height(220 * (i / 4));
			$(".rotateme").eq(i - 1).width(220 * (i / 4));
		}
	}

	$(window).scroll(function() {
		
		function rotateOnScroll(factor) {
			var theta = $(window).scrollTop() / factor;
			$(".rotateme:even img").css({ transform: "rotate(" + theta + "deg)" });
			$(".rotateme:odd img").css({ transform: "rotate(-" + theta + "deg)" });
		}

		rotateOnScroll(15);

		var bodyHeight = window.innerHeight + 2685;
		$('body').css('height', bodyHeight)

	});

	$(window).scroll(function() {
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
			$('.my-button').addClass('hithere');
		} else {
			$('.my-button').removeClass('hithere');
		}
	})

});




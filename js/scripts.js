(function() {
	document.addEventListener('DOMContentLoaded', function() {
		var slider = document.querySelector('.main-slider');
		var prev = slider.querySelector('.left-arrow');
		var next = slider.querySelector('.right-arrow');
        var slide1 = slider.querySelectorAll('.slide-1');
        var slide2 = slider.querySelectorAll('.slide-2');
		var timer = null;
		var slideDelay = 5000;


        var timeoutChangeSlide = function() {
			timer = setTimeout(function() {
				next.click();
			}, slideDelay);
		};


        var changeSlide = function() {

            for (var i=0; i<=1; i++) {
                if(slide1[i].classList.contains('notact')) {
                    slide1[i].classList.remove('notact');
                    slide2[i].classList.add('notact');
                } else {
                    slide2[i].classList.remove('notact');
                    slide1[i].classList.add('notact');
                }
            };

            clearTimeout(timer);
			timeoutChangeSlide();
        };

        timeoutChangeSlide();

        prev.addEventListener('click', changeSlide);
        next.addEventListener('click', changeSlide);

	});
})();

'use strict'

/*let sliderThumb = document.querySelector('.slider__thumb');

sliderThumb.addEventListener('mousedown', function (evt) {
	let shiftX = evt.clientX - sliderThumb.getBoundingClientRect().left;

	document.addEventListener('mousemove', moveAt);

	function moveAt(evt) {
		let change = evt.clientX - shiftX - 50 ;

		if (change < 0) {
			sliderThumb.style.left = '0px';
		} else if (change > 870) {
			sliderThumb.style.left = '870px';
		} else {
			sliderThumb.style.left = change + 'px';
		}
	}

	document.onmouseup = function() {
		document.removeEventListener('mousemove', moveAt);
		document.onmouseup = null;
	};

	sliderThumb.ondragstart = function() {
      return false;
    };
});*/

let field = document.querySelector('body');

field.addEventListener('mousedown', function (evt) {
	let target = evt.target;

	if (target.className == 'player') {
		evt.preventDefault();

		let shiftX = evt.clientX - target.getBoundingClientRect().left;
		let shiftY = evt.clientY - target.getBoundingClientRect().top;

		function moveAt(evt) {
			let changeX = evt.clientX - shiftX;
			let changeY = evt.clientY - shiftY;

			target.style.position = 'absolute';

			if (changeX < 0) {
				target.style.left = '0px';
			} else if (changeX > (field.offsetWidth  - target.offsetWidth)) {
				target.style.left = fieldWidth - target.offsetWidth + 'px';
			} else {
				target.style.left = changeX + 'px';
			}


			if (changeY < 0) {
				target.style.top = '0px';
			} else if (changeY > (field.offsetHeight  - target.offsetHeight)) {

			} else {
				target.style.top = changeY + 'px';
			}			
		}

		document.addEventListener('mousemove', moveAt);
		document.onmouseup = function() {
			document.removeEventListener('mousemove', moveAt);
			document.onmouseup = null;
		};
	}

});

// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	// Custom JS

	document
		.querySelectorAll('.header__burger, .header .nav__close')
		.forEach((el) => {
			el.addEventListener('click', () => {
				const navElement = document.querySelector('#header-nav');
				if (navElement) {
					navElement.classList.toggle('--active');
				}
			});
		});
});

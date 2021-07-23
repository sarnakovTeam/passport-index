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
			el.addEventListener('click', (e) => {
				e.preventDefault();
				const navElement = document.querySelector('#header-nav');
				if (navElement) {
					navElement.classList.toggle('--active');
				}
			});
		});

	MicroModal.init({
		// onShow: (modal) => console.info(`${modal.id} is shown`),
		// onClose: (modal) => console.info(`${modal.id} is hidden`),
		// openTrigger: 'data-custom-open',
		// closeTrigger: 'data-custom-close',
		openClass: 'is-open',
		// disableScroll: true,
		// disableFocus: false,
		awaitOpenAnimation: true,
		awaitCloseAnimation: true,
		// debugMode: true,
	});

	const host = 'https://mystifying-fermi-27df8c.netlify.app';
	// fetch('https://mystifying-fermi-27df8c.netlify.app/asset-manifest.json')

	function loadScript(src, callback) {
		var script = document.createElement('script');
		script.type = 'text/javascript';

		// IE
		if (script.readyState) {
			script.onreadystatechange = function () {
				if (
					script.readyState === 'loaded' ||
					script.readyState === 'complete'
				) {
					script.onreadystatechange = null;
					callback();
				}
			};
		}
		// Others
		else {
			script.onload = callback;
		}

		script.src = src;
		document.head.appendChild(script);
	}

	let fetchStyle = function (url) {
		return new Promise((resolve, reject) => {
			let link = document.createElement('link');
			link.type = 'text/css';
			link.rel = 'stylesheet';
			link.onload = function () {
				resolve();
				console.log('style has loaded');
			};
			link.href = url;

			let headScript = document.querySelector('script');
			headScript.parentNode.insertBefore(link, headScript);
		});
	};

	fetch(`${host}/asset-manifest.json`)
		.then((res) => res.json())
		.then(({ entrypoints }) => {
			console.log({ entrypoints });
			entrypoints.forEach((file) => {
				if (file.includes('.js')) loadScript(`${host}/${file}`);
				if (file.includes('.css')) fetchStyle(`${host}/${file}`);
				console.log(file);
			});
			// const script = document.createElement('script');
			// script.id = scriptId;
			// script.crossOrigin = '';
			// script.src = `${host}${manifest.files['main.js']}`;
			// script.onload = () => {
			// 	renderMicroFrontend();
			// };
			// document.head.appendChild(script);
		});
});

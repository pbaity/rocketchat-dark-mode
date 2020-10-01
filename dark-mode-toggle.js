const darkModeDefault = false;

const darkModeSymbol = `<svg id="icon-darkmode" viewBox="0 0 468 468" fill="currentColor">
  <path d="m428.75601,300.104c-0.664,-3.81 -2.33401,-7.047 -4.996,-9.71301c-5.89999,-5.90298 -12.75201,-7.142 -20.55399,-3.716c-20.93701,9.70801 -42.64102,14.55801 -65.09702,14.55801c-28.17099,0 -54.15201,-6.94 -77.94299,-20.83801c-23.791,-13.89398 -42.63101,-32.73599 -56.52501,-56.52998c-13.899,-23.793 -20.84399,-49.77299 -20.84399,-77.94499c0,-21.88802 4.33299,-42.68301 12.991,-62.384c8.66,-19.7 21.17599,-36.973 37.543,-51.82c6.283,-5.898 7.713,-12.752 4.287,-20.557c-3.23601,-7.801 -9.041,-11.511 -17.41501,-11.132c-29.12099,1.141 -56.71999,7.664 -82.797,19.556c-26.076,11.89499 -48.48901,27.54699 -67.23801,46.96499c-18.747,19.414 -33.595,42.39899 -44.54,68.94999c-10.942,26.55301 -16.416,54.39 -16.416,83.51102c0,29.694 5.806,58.05399 17.416,85.082c11.613,27.02798 27.218,50.34399 46.824,69.94897c19.604,19.599 42.92,35.207 69.951,46.82202c27.028,11.60699 55.38399,17.41498 85.075,17.41498c42.63998,0 81.987,-11.56299 118.05399,-34.69c36.069,-23.12399 63.05002,-54.00598 80.944,-92.64499c1.52402,-3.42297 1.95102,-7.03598 1.28003,-10.83798zm-122.19101,84.064c-24.646,11.711 -50.67599,17.56201 -78.08701,17.56201c-24.743,0 -48.38998,-4.853 -70.94699,-14.55801c-22.554,-9.70499 -41.97099,-22.69501 -58.24599,-38.97198c-16.271,-16.272 -29.259,-35.686 -38.97,-58.241c-9.707,-22.556 -14.561,-46.20302 -14.561,-70.94801c0,-40.922 12.135,-77.466 36.403,-109.636c24.266,-32.165 55.53099,-53.959 93.78799,-65.379c-19.795,31.405 -29.694,65.379 -29.694,101.926c0,34.644 8.564,66.715 25.69701,96.22301c17.12799,29.49901 40.446,52.81099 69.95,69.94798c29.49899,17.129 61.565,25.694 96.211,25.694c10.65601,0 21.129,-0.85498 31.40799,-2.56998c-17.31799,20.93799 -38.30701,37.25497 -62.952,48.95099z"/>
</svg>`; // moon icon
const lightModeSymbol = `<svg id="icon-darkmode" viewBox="0 0 302.4 302.4" fill="currentColor">
  <path d="m204.8,97.6c-13.60001,-13.6 -32.8,-22.4 -53.60001,-22.4s-40,8.4 -53.6,22.4c-13.6,13.6 -22.4,32.8 -22.4,53.6s8.8,40 22.4,53.59999c13.6,13.60001 32.8,22.40001 53.6,22.40001s40,-8.40001 53.60001,-22.40001c13.59999,-13.59999 22.39999,-32.8 22.39999,-53.59999s-8.39999,-40 -22.39999,-53.6zm-14.40001,92.8c-10,10 -24,16 -39.2,16s-29.2,-6 -39.2,-16s-16,-24 -16,-39.2s6,-29.2 16,-39.2s23.99999,-16 39.2,-16s29.2,6 39.2,16s16,23.99999 16,39.2s-6,29.2 -16,39.2z"/>
  <path d="m292,140.8l-30.79999,0c-5.60001,0 -10.40001,4.8 -10.40001,10.39999c0,5.60001 4.8,10.40001 10.40001,10.40001l30.79999,0c5.60001,0 10.39999,-4.8 10.39999,-10.40001c0,-5.59999 -4.79999,-10.39999 -10.39999,-10.39999z"/>
  <path d="m151.2,250.8c-5.59999,0 -10.39999,4.8 -10.39999,10.40001l0,30.79999c0,5.60001 4.8,10.39999 10.39999,10.39999c5.60001,0 10.40001,-4.79999 10.40001,-10.39999l0,-30.79999c0,-5.60001 -4.8,-10.40001 -10.40001,-10.40001z"/>
  <path d="m258,243.60001l-22,-22c-3.60001,-4 -10.39999,-4 -14.39999,0s-4,10.40001 0,14.40001l22,21.99998c4,4 10.39999,4 14.39999,0s4,-10.39999 0,-14.39999z"/>
  <path d="m151.2,0c-5.59999,0 -10.39999,4.8 -10.39999,10.4l0,30.8c0,5.6 4.8,10.4 10.39999,10.4c5.60001,0 10.40001,-4.8 10.40001,-10.4l0,-30.8c0,-5.6 -4.8,-10.4 -10.40001,-10.4z"/>
  <path d="m258.39999,44.4c-4,-4 -10.40001,-4 -14.40001,0l-22,22c-4,4 -4,10.4 0,14.4c3.60001,4 10.40001,4 14.40001,0l22,-22c4,-4 4,-10.4 0,-14.4z"/>
  <path d="m41.2,140.8l-30.8,0c-5.6,0 -10.4,4.8 -10.4,10.39999s4.4,10.40001 10.4,10.40001l30.8,0c5.6,0 10.4,-4.8 10.4,-10.40001c0,-5.59999 -4.8,-10.39999 -10.4,-10.39999z"/>
  <path d="m80.4,221.60001c-3.6,-4 -10.4,-4 -14.4,0l-22,22c-4,4 -4,10.40001 0,14.39999s10.4,4 14.4,0l22,-21.99998c4,-4.00002 4,-10.40001 0,-14.40001z"/>
  <path d="m80.4,66.4l-22,-22c-4,-4 -10.4,-4 -14.4,0s-4,10.4 0,14.4l22,22c4,4 10.4,4 14.4,0s4,-10.4 0,-14.4z"/>
</svg>`; // sun icon

const darkModeToggleText = {
	'en': 'Toggle Dark Mode',
	'de': 'Dark Mode umschalten',
	'fr': 'Toggle Dark Mode',
	'es': 'Toggle Dark Mode',
	'hu': 'Sötét mód be/ki',
	'it': 'Toggle Dark Mode',
	'nl': 'Toggle Dark Mode',
	'pl': 'Toggle Dark Mode',
	'pt': 'Alternar Tema',
	'ru': 'Смена оформления',
	'he': 'מצב לילה',
	'hi': 'डार्क मोड'
}[defaultUserLanguage()] || 'Toggle Dark Mode';

const toggleButton = `<button class="sidebar__toolbar-button rc-tooltip rc-tooltip--down js-button" aria-label="${darkModeToggleText}">D</button>`;

function isDarkModeSet() {
	return localStorage.getItem('dark-mode') === 'true';
}

function getDarkModeIcon() {
	return `<svg class="rc-icon sidebar__toolbar-button-icon sidebar__toolbar-button-icon--darkmode" aria-hidden="true">
    <use xlink:href="#icon-darkmode"></use>
    ${isDarkModeSet() ? lightModeSymbol : darkModeSymbol}
  </svg>`;
}

function toggleDarkMode() {
	document.body.classList.toggle('dark-mode');
	const setting = (!isDarkModeSet()).toString();
	localStorage.setItem('dark-mode', setting);
}

function addDarkModeToggle() {
	const sidebarToolbar = $('.sidebar__toolbar');

	// wait for the sidebar toolbar to be visible
	// this will also be false if the toolbar doesn't exist yet
	if(!sidebarToolbar.is(':visible')) {
		setTimeout(addDarkModeToggle, 250);
		return;
	}

	var darkModeButton = $(`.js-button[aria-label="${darkModeToggleText}"]`);

	// do nothing if button is already on the screen
	if (darkModeButton.is(':visible')) {
		return;
	}

	darkModeButton = $(toggleButton).prependTo(sidebarToolbar);
	darkModeButton.html(getDarkModeIcon());

	darkModeButton.on('click', function() {
		toggleDarkMode();
		darkModeButton.html(getDarkModeIcon());
		$(this).blur();
	});
}

if (darkModeDefault) {
	if (localStorage.getItem("dark-mode") === null) {
		localStorage.setItem('dark-mode', 'true');
	}
}

$(addDarkModeToggle);

// Apply dark mode immediately if it's been set previously
if(localStorage.getItem('dark-mode') === 'true') {
	document.body.classList.add('dark-mode');
}

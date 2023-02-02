const darkModeDefault = 'auto';

// CSS class used to set Dark Mode properties
const DARK_MODE_CSS = 'dark-mode';

// LocalStorage key used to store Dark Mode state
const DARK_MODE_STORAGE = 'dark-mode';

// CSS id used for Dark Mode icon
const DARK_MODE_ICON = `icon-${DARK_MODE_CSS}`;

// CSS id used for Dark Mode button
const DARK_MODE_BUTTON = `button-${DARK_MODE_CSS}`;

const DARK_MODE_MODES = ["auto", "dark", "light"];

const systemModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const screenMaxWidthMediaQuery = window.matchMedia("screen and (max-width: 1440px)");

const modeSymbols = {
	'dark': `<svg id="${DARK_MODE_ICON}" viewBox="0 0 468 468" fill="currentColor">  <path d="M428.756 300.104c-.664-3.81-2.334-7.047-4.996-9.713-5.9-5.903-12.752-7.142-20.554-3.716-20.937 9.708-42.641 14.558-65.097 14.558-28.171 0-54.152-6.94-77.943-20.838-23.791-13.894-42.631-32.736-56.525-56.53-13.899-23.793-20.844-49.773-20.844-77.945 0-21.888 4.333-42.683 12.991-62.384 8.66-19.7 21.176-36.973 37.543-51.82 6.283-5.898 7.713-12.752 4.287-20.557-3.236-7.801-9.041-11.511-17.415-11.132-29.121 1.141-56.72 7.664-82.797 19.556C111.33 31.478 88.917 47.13 70.168 66.548c-18.747 19.414-33.595 42.399-44.54 68.95-10.942 26.553-16.416 54.39-16.416 83.511 0 29.694 5.806 58.054 17.416 85.082 11.613 27.028 27.218 50.344 46.824 69.949 19.604 19.599 42.92 35.207 69.951 46.822 27.028 11.607 55.384 17.415 85.075 17.415 42.64 0 81.987-11.563 118.054-34.69 36.069-23.124 63.05-54.006 80.944-92.645 1.524-3.423 1.951-7.036 1.28-10.838zm-122.191 84.064c-24.646 11.711-50.676 17.562-78.087 17.562-24.743 0-48.39-4.853-70.947-14.558-22.554-9.705-41.971-22.695-58.246-38.972-16.271-16.272-29.259-35.686-38.97-58.241-9.707-22.556-14.561-46.203-14.561-70.948 0-40.922 12.135-77.466 36.403-109.636 24.266-32.165 55.531-53.959 93.788-65.379-19.795 31.405-29.694 65.379-29.694 101.926 0 34.644 8.564 66.715 25.697 96.223 17.128 29.499 40.446 52.811 69.95 69.948 29.499 17.129 61.565 25.694 96.211 25.694 10.656 0 21.129-.855 31.408-2.57-17.318 20.938-38.307 37.255-62.952 48.951z"/></svg>`, // moon icon
	'light': `<svg  id="${DARK_MODE_ICON}" viewBox="0 0 302.4 302.4" fill="currentColor"> <path d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"/> </svg>`, // sun icon
	'auto': `<svg id="${DARK_MODE_ICON}" viewBox="0 0 302.4 302.4" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <path d="m 117.87754,56.176017 c -7.8278,-7.827806 -18.878822,-12.892856 -30.85076,-12.892856 -11.971937,0 -23.022957,4.83482 -30.850763,12.892856 -7.827806,7.827806 -12.892856,18.878826 -12.892856,30.850763 0,11.971938 5.06505,23.02296 12.892856,30.85076 7.827806,7.82781 18.878826,12.89287 30.850763,12.89287 11.971938,0 23.02296,-4.83483 30.85076,-12.89287 7.82781,-7.8278 12.89287,-18.878822 12.89287,-30.85076 0,-11.971937 -4.83483,-23.022957 -12.89287,-30.850763 z m -8.28826,53.413263 c -5.75574,5.75574 -13.813776,9.20918 -22.5625,9.20918 -8.748724,0 -16.806759,-3.45344 -22.562498,-9.20918 -5.75574,-5.75574 -9.209184,-13.813776 -9.209184,-22.5625 0,-8.748724 3.453444,-16.806759 9.209184,-22.562498 5.755739,-5.75574 13.813774,-9.209184 22.562498,-9.209184 8.748724,0 16.80676,3.453444 22.5625,9.209184 5.75574,5.755739 9.20918,13.813774 9.20918,22.562498 0,8.748724 -3.45344,16.80676 -9.20918,22.5625 z m 58.47831,-28.548469 h -17.72768 c -3.22321,0 -5.98597,2.762755 -5.98597,5.985969 0,3.223214 2.76276,5.98597 5.98597,5.98597 h 17.72768 c 3.22322,0 5.98598,-2.762756 5.98598,-5.98597 0,-3.223214 -2.76276,-5.985969 -5.98598,-5.985969 z M 87.02678,144.35394 c -3.223214,0 -5.985969,2.76276 -5.985969,5.98597 v 17.72768 c 0,3.22322 2.762755,5.98598 5.985969,5.98598 3.223214,0 5.98597,-2.76276 5.98597,-5.98598 v -17.72768 c 0,-3.22321 -2.762756,-5.98597 -5.98597,-5.98597 z m 61.47129,-4.14413 -12.66262,-12.66262 c -2.07207,-2.3023 -5.98597,-2.3023 -8.28826,0 -2.3023,2.30229 -2.3023,5.98596 0,8.28826 l 12.66262,12.66262 c 2.3023,2.3023 5.98597,2.3023 8.28826,0 2.3023,-2.30229 2.3023,-5.98596 0,-8.28826 z M 87.02678,0 c -3.223214,0 -5.985969,2.7627549 -5.985969,5.985969 v 17.727677 c 0,3.223214 2.762755,5.98597 5.985969,5.98597 3.223214,0 5.98597,-2.762756 5.98597,-5.98597 V 5.985969 C 93.01275,2.7627549 90.249994,0 87.02678,0 Z m 61.70153,25.555483 c -2.3023,-2.302296 -5.98597,-2.302296 -8.28827,0 L 127.77742,38.21811 c -2.3023,2.302295 -2.3023,5.985968 0,8.288265 2.07206,2.302295 5.98596,2.302295 8.28826,0 l 12.66263,-12.662628 c 2.30229,-2.302295 2.30229,-5.985968 0,-8.288264 z M 23.713646,81.040811 H 5.985969 C 2.7627549,81.040811 0,83.803566 0,87.02678 c 0,3.223214 2.5325254,5.98597 5.985969,5.98597 h 17.727677 c 3.223214,0 5.98597,-2.762756 5.98597,-5.98597 0,-3.223214 -2.762756,-5.985969 -5.98597,-5.985969 z m 22.562499,46.506379 c -2.072067,-2.3023 -5.98597,-2.3023 -8.288265,0 l -12.662626,12.66262 c -2.302297,2.3023 -2.302297,5.98597 0,8.28826 2.302295,2.3023 5.985968,2.3023 8.288264,0 l 12.662627,-12.66262 c 2.302296,-2.3023 2.302296,-5.98597 0,-8.28826 z m 0,-89.32908 -12.662627,-12.662627 c -2.302296,-2.302296 -5.985969,-2.302296 -8.288264,0 -2.302297,2.302296 -2.302297,5.985969 0,8.288264 L 37.98788,46.506375 c 2.302295,2.302295 5.98597,2.302295 8.288265,0 2.302296,-2.302297 2.302296,-5.98597 0,-8.288265 z"/> <path d="m 301.90371,249.29701 c -0.25471,-1.46156 -0.89535,-2.7033 -1.91652,-3.726 -2.26329,-2.26446 -4.89179,-2.73976 -7.88472,-1.4255 -8.03165,3.72408 -16.35753,5.58459 -24.97188,5.58459 -10.8067,0 -20.77328,-2.66225 -29.89975,-7.99367 -9.12648,-5.32988 -16.3537,-12.55787 -21.68358,-21.68549 -5.3318,-9.12725 -7.99597,-19.09345 -7.99597,-29.90052 0,-8.39646 1.66218,-16.37364 4.98348,-23.93115 3.32207,-7.55712 8.12333,-14.18322 14.40188,-19.87869 2.41023,-2.26253 2.95879,-4.8918 1.64454,-7.88588 -1.24137,-2.99254 -3.46822,-4.41574 -6.68058,-4.27035 -11.17111,0.4377 -21.75837,2.93999 -31.76179,7.50188 -10.00302,4.56305 -18.60088,10.56732 -25.7932,18.01627 -7.19154,7.44741 -12.88739,16.26469 -17.086,26.44994 -4.19747,10.186 -6.29735,20.86457 -6.29735,32.03569 0,11.39092 2.22725,22.27012 6.68096,32.63833 4.45487,10.36822 10.4411,19.31249 17.96217,26.83317 7.5203,7.51837 16.46457,13.50577 26.83393,17.96141 10.36824,4.45256 21.24589,6.68057 32.63566,6.68057 16.35715,0 31.45107,-4.43569 45.28675,-13.30744 13.83644,-8.87061 24.18663,-20.71727 31.05096,-35.53959 0.58462,-1.3131 0.74841,-2.69909 0.49101,-4.15757 z m -46.87373,32.24782 c -9.45446,4.49247 -19.43985,6.73697 -29.95499,6.73697 -9.49167,0 -18.5629,-1.86167 -27.21601,-5.5846 -8.65194,-3.72294 -16.1005,-8.70604 -22.34377,-14.95006 -6.24172,-6.24212 -11.22406,-13.68953 -14.9493,-22.34186 -3.7237,-8.65271 -5.58575,-17.72395 -5.58575,-27.21639 0,-15.69811 4.65511,-29.71676 13.96458,-42.05751 9.30868,-12.33883 21.30227,-20.69923 35.97805,-25.08007 -7.59358,12.04729 -11.39093,25.08007 -11.39093,39.09988 0,13.2898 3.28524,25.59256 9.85764,36.91214 6.57048,11.31612 15.5155,20.25885 26.83355,26.83278 11.31612,6.57087 23.61696,9.85649 36.90754,9.85649 4.08775,0 8.1053,-0.32798 12.04843,-0.98588 -6.64336,8.03204 -14.69496,14.2914 -24.14904,18.77811 z" /></svg>` // sun / moon icon
}

const darkModeToggleText = {
	'en': 'Toggle Dark Mode',
	'de': 'Dark Mode umschalten',
	'fr': 'Activer le mode sombre',
	'es': 'Alternar Modo Obscuro',
	'hu': 'Sötét mód be/ki',
	'it': 'Attiva/Disattiva modalità scura',
	'nl': 'Toggle Dark Mode',
	'pl': 'Toggle Dark Mode',
	'pt': 'Alternar Modo Escuro',
	'ru': 'Смена оформления',
	'he': 'מצב לילה',
	'hi': 'डार्क मोड',
	'zh': '切换暗色主题'
}[defaultUserLanguage()] || 'Toggle Dark Mode';

const normalModeSidebarSelector = '.rcx-sidebar-topbar .rcx-button-group';
const embeddedModeSidebarSelector = '.rcx-room-header .rcx-button-group';

let addDarkModeToggleRetryCount = 0;
const addDarkModeToggleRetryMax = 10;

const toggleButton = `<button id="${DARK_MODE_BUTTON}" class="rcx-box rcx-box--full rcx-button--small-square rcx-button--square rcx-button--icon rcx-button rcx-button-group__item" aria-label="${darkModeToggleText}">D</button>`;

function getDarkModeSetting() {
	let mode = localStorage.getItem(DARK_MODE_STORAGE);
	if (mode === null || DARK_MODE_MODES.indexOf(mode) == -1) {
		// If the setting is missing or not one of the valid options initialize storage to the default
		localStorage.setItem(DARK_MODE_STORAGE, darkModeDefault);
	}
	return localStorage.getItem(DARK_MODE_STORAGE);
}

function getDarkModeIcon() {
	return `<svg class="rcx-box rcx-box--full rcx-icon--name-darkmode rcx-icon rcx-@4pvxx3" aria-hidden="true">
	<use xlink:href="#${DARK_MODE_ICON}"></use>
	${modeSymbols[getDarkModeSetting()]}
  </svg>`;
}

function toggleDarkMode() {
	// Cycle through modes
	const nextMode = DARK_MODE_MODES[(DARK_MODE_MODES.indexOf(getDarkModeSetting()) + 1) % DARK_MODE_MODES.length];
	localStorage.setItem(DARK_MODE_STORAGE, nextMode);
	maybeModeChange();
	updateButton(nextMode);
}

function switchToMode(targetMode) {
	if (targetMode == 'dark') {
		document.body.classList.add(DARK_MODE_CSS);
	} else {
		document.body.classList.remove(DARK_MODE_CSS);
	}
}

function maybeModeChange() {
	const userMode = getDarkModeSetting();
	const systemMode = (systemModeMediaQuery.matches ? 'dark' : 'light');

	if (userMode === "auto") {
		switchToMode(systemMode);
	} else {
		switchToMode(userMode);
	}
}

function updateButton(mode) {
	const darkModeButton = $(`#${DARK_MODE_BUTTON}`);
	darkModeButton.html(getDarkModeIcon());
	darkModeButton.attr('data-title', `${darkModeToggleText}, current: ${mode}`);
}

function addDarkModeToggle() {
	const normalModeSidebarPresent = $(normalModeSidebarSelector).length > 0;
	const screenIsSmall = screenMaxWidthMediaQuery.matches;

	let toggleButtonLocation = null;

	if (normalModeSidebarPresent && !screenIsSmall) {
		toggleButtonLocation = $(normalModeSidebarSelector).first();
	} else {
		toggleButtonLocation = $(embeddedModeSidebarSelector).first();
	}

	// wait for the sidebar toolbar to be visible
	// this will also be false if the toolbar doesn't exist yet
	if(!toggleButtonLocation.is(':visible') && addDarkModeToggleRetryCount < addDarkModeToggleRetryMax) {
		setTimeout(addDarkModeToggle, 250);
		addDarkModeToggleRetryCount += 1;
		return;
	}

	var darkModeButton = $(`#${DARK_MODE_BUTTON}`);

	// do nothing if button is already on the screen
	if (darkModeButton.is(':visible')) {
		return;
	}

	darkModeButton = $(toggleButton).prependTo(toggleButtonLocation);
	updateButton(getDarkModeSetting());

	darkModeButton.on('click', function() {
		toggleDarkMode();
		$(this).blur();
	});
}

// Switch mode on system theme changes
systemModeMediaQuery.addEventListener("change", maybeModeChange);

// Trigger initial mode change if necessary
maybeModeChange();

// Add toggle button
$(addDarkModeToggle);
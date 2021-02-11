const darkModeDefault = false;

// CSS class used to set Dark Mode properties
const DARK_MODE_CSS = 'dark-mode';

// LocalStorage key used to store Dark Mode state
const DARK_MODE_STORAGE = 'dark-mode';

// CSS id used for Dark Mode icon
const DARK_MODE_ICON = "icon-darkmode"; // could be `icon-${DARK_MODE_CSS}`;

// CSS id used for Dark Mode button
const DARK_MODE_BUTTON = "dark-mode-button"; // could be `button-${DARK_MODE_CSS}`;

const darkModeSymbol = `<svg id="${DARK_MODE_ICON}" viewBox="0 0 468 468" fill="currentColor">
  <path d="M428.756 300.104c-.664-3.81-2.334-7.047-4.996-9.713-5.9-5.903-12.752-7.142-20.554-3.716-20.937 9.708-42.641 14.558-65.097 14.558-28.171 0-54.152-6.94-77.943-20.838-23.791-13.894-42.631-32.736-56.525-56.53-13.899-23.793-20.844-49.773-20.844-77.945 0-21.888 4.333-42.683 12.991-62.384 8.66-19.7 21.176-36.973 37.543-51.82 6.283-5.898 7.713-12.752 4.287-20.557-3.236-7.801-9.041-11.511-17.415-11.132-29.121 1.141-56.72 7.664-82.797 19.556C111.33 31.478 88.917 47.13 70.168 66.548c-18.747 19.414-33.595 42.399-44.54 68.95-10.942 26.553-16.416 54.39-16.416 83.511 0 29.694 5.806 58.054 17.416 85.082 11.613 27.028 27.218 50.344 46.824 69.949 19.604 19.599 42.92 35.207 69.951 46.822 27.028 11.607 55.384 17.415 85.075 17.415 42.64 0 81.987-11.563 118.054-34.69 36.069-23.124 63.05-54.006 80.944-92.645 1.524-3.423 1.951-7.036 1.28-10.838zm-122.191 84.064c-24.646 11.711-50.676 17.562-78.087 17.562-24.743 0-48.39-4.853-70.947-14.558-22.554-9.705-41.971-22.695-58.246-38.972-16.271-16.272-29.259-35.686-38.97-58.241-9.707-22.556-14.561-46.203-14.561-70.948 0-40.922 12.135-77.466 36.403-109.636 24.266-32.165 55.531-53.959 93.788-65.379-19.795 31.405-29.694 65.379-29.694 101.926 0 34.644 8.564 66.715 25.697 96.223 17.128 29.499 40.446 52.811 69.95 69.948 29.499 17.129 61.565 25.694 96.211 25.694 10.656 0 21.129-.855 31.408-2.57-17.318 20.938-38.307 37.255-62.952 48.951z"/>
</svg>`; // moon icon
const lightModeSymbol = `<svg  id="${DARK_MODE_ICON}" viewBox="0 0 302.4 302.4" fill="currentColor">
  <path d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6s8.8 40 22.4 53.6c13.6 13.6 32.8 22.4 53.6 22.4s40-8.4 53.6-22.4c13.6-13.6 22.4-32.8 22.4-53.6s-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"/>
</svg>`; // sun icon

const darkModeToggleText = {
	'en': 'Toggle Dark Mode',
	'de': 'Dark Mode umschalten',
	'fr': 'Activer le mode sombre',
	'es': 'Alternar Modo Obscuro',
	'hu': 'Sötét mód be/ki',
	'it': 'Toggle Dark Mode',
	'nl': 'Toggle Dark Mode',
	'pl': 'Toggle Dark Mode',
	'pt': 'Alternar Modo Escuro',
	'ru': 'Смена оформления',
	'he': 'מצב לילה',
	'hi': 'डार्क मोड'
}[defaultUserLanguage()] || 'Toggle Dark Mode';

const toggleButton = `<button id="${DARK_MODE_BUTTON}" class="rcx-box rcx-box--full rcx-button--small-square rcx-button--square rcx-button--small rcx-button--ghost rcx-button rcx-button-group__item rcx-@ue04p" aria-label="${darkModeToggleText}">D</button>`;

function isDarkModeSet() {
	return localStorage.getItem(DARK_MODE_STORAGE) === 'true';
}

function getDarkModeIcon() {
	return `<svg class="rcx-box rcx-box--full rcx-icon--name-darkmode rcx-icon rcx-@4pvxx3" aria-hidden="true">
    <use xlink:href="#${DARK_MODE_ICON}"></use>
    ${isDarkModeSet() ? lightModeSymbol : darkModeSymbol}
  </svg>`;
}

function toggleDarkMode() {
	document.body.classList.toggle(DARK_MODE_CSS);
	const setting = (!isDarkModeSet()).toString();
	localStorage.setItem(DARK_MODE_STORAGE, setting);
}

function addDarkModeToggle() {
	const sidebarToolbar = $('.rcx-sidebar-topbar .rcx-button-group').first();

	// wait for the sidebar toolbar to be visible
	// this will also be false if the toolbar doesn't exist yet
	if(!sidebarToolbar.is(':visible')) {
		setTimeout(addDarkModeToggle, 250);
		return;
	}

	var darkModeButton = $(`#${DARK_MODE_BUTTON}`);

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
	if (localStorage.getItem(DARK_MODE_STORAGE) === null) {
		localStorage.setItem(DARK_MODE_STORAGE, 'true');
	}
}

$(addDarkModeToggle);

// Apply dark mode immediately if it's been set previously
if(localStorage.getItem(DARK_MODE_STORAGE) === 'true') {
	document.body.classList.add(DARK_MODE_CSS);
}

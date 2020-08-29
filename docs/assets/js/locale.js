'use strict';

// ---------------------------------------------------------------------------------------------------------------------
// Init.
// ---------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  localeRedirect();
});

// ---------------------------------------------------------------------------------------------------------------------
// Locale Detect.
// ---------------------------------------------------------------------------------------------------------------------

function localeDetect() {
  const locale = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage;

  return locale.toLowerCase().substr(0, 2);
}

// ---------------------------------------------------------------------------------------------------------------------
// Locale Redirect.
// ---------------------------------------------------------------------------------------------------------------------

function localeRedirect() {
  const locale = localeDetect();

  switch (locale) {
    case 'en':
      window.location.href = '/en/';
      break;
    case 'ru':
      window.location.href = '/ru/';
      break;
    default:
      window.location.href = '/ru/';
  }
}


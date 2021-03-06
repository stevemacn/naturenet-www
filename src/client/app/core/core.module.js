(function () {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate',
      'ngSanitize',

      'blocks.exception',
      'blocks.logger',
      'blocks.router',

      'ui.router',
      'firebase',
      'ngMap',
      'ngplus',
      'ngCookies',
      'ngFileUpload',
      'ngGeolocation',
      'angular-cloudinary',
      'google.places',
    ]);

})();

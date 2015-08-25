(function() {
  var app;

  app = angular.module('app', ['ngRoute', 'ngAnimate', 'pascalprecht.translate', 'ui.bootstrap']);

  app.config(function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: '/speedbag/i18n/',
      suffix: '.json'
    });
    return $translateProvider.preferredLanguage('pt-BR');
  });

  angular.element(document).ready(function() {
    return angular.bootstrap(angular.element('#app-container'), ['app']);
  });

  window.app = app;

}).call(this);

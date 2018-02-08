const downloadModule = angular.module('downloadApp');
// Register `about` component, along with its associated controller and template
downloadModule.component('downloadApp', {
    templateUrl: 'download/download.template.html',
    controller: ['$http', function publicationsController($http) {
      const self = this;

      $http.get('download/xmi.json').then(function(response) {
        self.models = response.data;
      });
    }]
  });

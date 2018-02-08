const publicationsModule = angular.module('publications');
// Register `about` component, along with its associated controller and template
publicationsModule.component('publications', {
    templateUrl: 'publications/publications.template.html',
    controller: ['$http', function publicationsController($http) {
      const self = this;
      this.orderProp = 'year';

      $http.get('publications/publications.json').then(function(response) {
        self.publications = response.data;
      });
    }]
  });

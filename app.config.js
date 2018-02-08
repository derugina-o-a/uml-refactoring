const myApp = angular.module('todoApp', ['ui.router','publications','home','downloadApp','contacts']);


myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  const publicationsState = {
    name: 'publications',
    url: '/publications',
    component: 'publications'
  }
  const homeState = {
    name: 'home',
    url: '/home',
    component: 'home'
  }

  const downloadState = {
    name: 'downloadApp',
    url: '/download',
    component: 'downloadApp'
  }

  const contactsState = {
    name: 'contacts',
    url: '/contacts',
    component: 'contacts'
  }

  $stateProvider.state(publicationsState).state(homeState).state(downloadState).state(contactsState);
});

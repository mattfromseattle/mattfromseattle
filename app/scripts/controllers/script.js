// script.js

    // create the module and name it mattfromseattleApp
        // also include ngRoute for all our routing needs
        var mattfromseattleApp = angular.module('mattfromseattleApp', ['ngRoute']);
        
            // configure our routes
            mattfromseattleApp.config(function($routeProvider) {
                $routeProvider
        
                    // route for the home page
                    .when('/', {
                        templateUrl : 'views/main.html',
                        controller  : 'mainController'
                    })
        
                    // route for the about page
                    .when('/about', {
                        templateUrl : 'views/about.html',
                        controller  : 'aboutController'
                    })

                    // route for the portfolio page
                    .when('/portfolio', {
                        templateUrl : 'views/portfolio.html',
                        controller  : 'portfolioController'
                    })

                    // route for the github page
                    .when('/github', {
                        templateUrl : 'views/github.html',
                        controller  : 'githubController'
                    })
        
                    // route for the contact page
                    .when('/contact', {
                        templateUrl : 'views/contact.html',
                        controller  : 'contactController'
                    });
            });
        
            // create the controller and inject Angular's $scope
            mattfromseattleApp.controller('mainController', function($scope) {
                // create a message to display in our view
            });
        
            mattfromseattleApp.controller('aboutController', function($scope) {
            });

            mattfromseattleApp.controller('portfolioController', function($scope) {
            });

            mattfromseattleApp.controller('githubController', function($scope) {
            });
        
            mattfromseattleApp.controller('contactController', function($scope) {
            });
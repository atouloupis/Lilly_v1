// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
        url: '/login',
        //abstract:false,
        templateUrl: 'templates/login.html',
        controller: 'AppCtrl'
    })
    .state('signin', {
          //views: {
                  url: '/signin',
                  templateUrl: 'templates/signin.html',
                  controller :'MyCtrl'
          //}
      })
      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.wall', {
      url: '/wall',
      views: {
        'menuContent': {
          templateUrl: 'templates/wall.html',
          controller : 'MyThumbnailCtrl',
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.mycard', {
    url: '/mycard/:cardId',
    views: {
      'menuContent': {
        templateUrl: 'templates/mycard.html',
        controller: 'CardCtrl'
      }
    }
  })
        .state('app.othercard', {
          url: '/othercard/:cardId',
          views: {
            'menuContent': {
              templateUrl: 'templates/mycard.html',
              controller: 'CardCtrl'
            }
          }
        });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
})




    /*.factory('Projects',function() {
  return {
    all: function () {
      var projectString = window.localStorage['projects'];
      if (projectString) {
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function (projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function (projectTitle) {
      //Add a new project
      return {
        title: projectTitle,
        tasks: []
      };
    },
    getLastActiveIndex: function (index) {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },
    setLastActiveIndex: function (index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
})



    .controller('StarterCtrl', function($scope, $timeout, $ionicModal,Projects,$ionicSideMenuDelegate) {
      //A utility function for creating a new project
      //with the given projectTitle
      var createProject = function(projectTitle){
        var newProject=Projects.newProject(projectTitle);
        $scope.projects.push(newProject);
        Projects.save($scope.projects);
        $scope.selectProject(newProject,$scope.projects.length-1);
      }
      //Load or initialize projects
      $scope.projects=Projects.all();

      //Grab the last active or the first project
      $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];
      //Called to create a new project
      $scope.newProject=function(){
        var projectTitle=prompt('Project name');
        if(projectTitle){
          createProject(projectTitle)
        }
      };

      //Called to select the given project
      $scope.selectProject = function(project,index){
        $scope.activeProject = project;
        Projects.setLastActiveIndex(index);
        $ionicSideMenuDelegate.toggleLeft(false);
      };


      //no need for testing data anymore
      // $scope.tasks = [];
      //Create and load the Modal
      $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
        $scope.taskModal = modal;
      }, {
        scope : $scope,
        // animation: 'slide-in-up'
      });

      //Called when the form is submitted
      $scope.createTask = function(task){
        if(!$scope.activeProject||!task){
          return;
        }
        $scope.activeProject.tasks.push({
          title : task.title
        });
        $scope.taskModal.hide();


        // Inefficient, but save all projects
        Projects.save($scope.projects);
        task.title="";
      };
      //Open our new task modal
      $scope.newTask = function() {
        $scope.taskModal.show();
      };

      //Close the new task modal
      $scope.closeNewTask = function() {
        $scope.taskModal.hide();
      }
        $scope.toggleProjects = function(){
        $ionicSideMenuDelegate.toggleLeft();
      };
      //Try to create the first project, make sure to defer
      //this by using $timeout so everything is initialized
      //properly
      $timeout(function(){
        if($scope.projects.length==0){
          while(true){
            var projectTitle=prompt('Your first project title :');
            if (projectTitle){
              createProject(projectTitle);
              break;
            }
          }
        }
      });

    })*/;

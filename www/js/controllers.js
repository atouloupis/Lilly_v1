angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    console.log('Enter in the AppCtrl controller');
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the forgot modal
  $scope.forgotData = {};
  $scope.privateMsgData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/forgot-password.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
      console.log('Modal created');
  });
  $ionicModal.fromTemplateUrl('templates/private-msg.html', {
      scope: $scope
  }).then(function(modal1) {
    $scope.modal1 = modal1;
    console.log('Modal created');
  });

  // Triggered in the login modal to close it
  $scope.closeForgot = function() {
      console.log('Close Forgot modal');
    $scope.modal.hide();
  };
        $scope.closePrivateMsg = function() {
            console.log('Close Forgot modal');
            $scope.modal1.hide();
        };
  // Open the login modal
  $scope.forgot = function() {
    $scope.modal.show();
    console.log('Open Modal passwrd');
  };
        $scope.privateMsg = function() {
            $scope.modal1.show();
            console.log('Open Modal passwrd');
        };
  // Perform the login action when the user submits the login form
  $scope.doForgot = function() {
    console.log('Doing forgot passwd', $scope.forgotData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeForgot();
    }, 1000);
  };
        // Perform the login action when the user submits the login form
        $scope.doPrivateMsg = function() {
            console.log('Doing forgot passwd', $scope.privateMsgData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                $scope.closePrivateMsg();
            }, 1000);
        };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('CardCtrl', function($scope, $stateParams) {

})

.controller ('MyCtrl',function ($scope, $ionicHistory) {
$scope.myGoBack = function() {
  $ionicHistory.goBack();
}})

.controller('MyThumbnailCtrl', function($scope) {
        $scope.mythumbnails = [
            { title: 'Reggae', subtitle:'Bien posey', id: 1, img:'ionic.png'},
            { title: 'Chill', subtitle:'Electro clubbing', id: 2, img:'ionic.png'},
            { title: 'Dubstep', subtitle:'Danse frénétique', id: 3, img:'ionic.png'},
        ];
        $scope.otherthumbnails = [
            { title: 'River', subtitle:'Il fait un froid de canard ici', id: 4, img:'riviere.jpg', avatar:'avat1.png',describe:'Prend toi en photo te baignant dans une rivière.'},
            { title: 'Mansion', subtitle:'Minecraft', id: 5, img:'mansion.jpg', avatar:'avat2.png',describe:'Il est temps de construire ta maison. Mais protège la bien, si elle est détruite avant la fin du challenge, c\'est perdu'},
            { title: 'Bal de Promo', subtitle:'Invite ton mec', id: 6, img:'beaugosse.jpg', avatar:'avat1.png',describe:'Le ball de promo arrive à grand pas. Trouve toi un compagnon à inviter et tu remportes le challenge'}
        ];
    })
;
(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.service('CardService', function ($http) {
    this.getAllCards = function (callback) {
      $http({
        method: 'GET',
        url: '/cards'
      }).then(function successCallback(response) {
        callback(response.data)
      }, function errorCallback(response) {
        console.log('error', response);
      });
    }

    this.saveCard = function (question, callback) {
      $http({
        method: 'POST',
        url: '/cards',
        data: {
          question: question
        }
      }).then(function successCallback(response) {
        callback(response.data)
      }, function errorCallback(response) {
        console.log('error', response);
      });
    }
  });
})();

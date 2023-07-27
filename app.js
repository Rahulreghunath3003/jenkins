<!DOCTYPE html>
<html lang="en" ng-app="myApp">

<head>
  <meta charset="UTF-8">
  <title>AngularJS API Call</title>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"></script>
  <script src="app.js"></script>
</head>

<body ng-controller="myController">
  <h1>AngularJS API Call Example</h1>
  <button ng-click="getData()">Get Data</button>
  <div ng-show="response">
    <h2>Response:</h2>
    <pre>{{ response }}</pre>
  </div>
</body>

</html>

root@ip-172-31-23-75:~/app# cat app.js
angular.module('myApp', [])
  .controller('myController', function($scope, $http) {
    $scope.getData = function() {
      $http.get('/getData')
        .then(function(response) {
          $scope.response = response.data;
        })
        .catch(function(error) {
          console.log('Error:', error);
        });
    };
  });

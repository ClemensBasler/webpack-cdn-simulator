import greeter = require('./greeter');
import $ = require('jquery');
import angular = require('angular');

$(() => {
  $(document.body).html(greeter('from the ts cdn :)'));
});
console.log(angular.equals('1', '1'));

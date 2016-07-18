import greeter = require('./greeter');
import $ = require('jquery');
// import angular = require('angular');
//
// console.log(angular.equals('1', '1'));

$(() => {
  $(document.body).html(greeter('from your internal ts file :)'));
});

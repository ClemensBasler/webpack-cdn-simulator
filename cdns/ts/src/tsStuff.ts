import greeter = require('./greeter');
import $ = require('jquery');
import angular = require('angular');

$(() => {
  $(document.body).html(greeter("from the ts cdn :)"));
});

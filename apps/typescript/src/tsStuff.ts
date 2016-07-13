import greeter = require('./greeter');
import $ = require('jquery');

$(() => {
  $(document.body).html(greeter("from your internal ts file :)"));
});

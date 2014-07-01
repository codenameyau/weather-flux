/* global Template */
'use strict';

Template.hello.greeting = function () {
  return 'Welcome to weather-flux!';
};

Template.hello.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined') {
      console.log('You pressed the button');
    }
  }
});

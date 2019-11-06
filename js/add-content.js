'use strict'
var createGreet = function(){
  var hourNow;
  hourNow = prompt('Are you ready to learn English');
  var name;
  name = prompt('What`s your name?')
  var greeting;

  if (hourNow == "yes" ) {
    greeting = 'Good Job!';
  } else if (hourNow == "No" ) {
    greeting = 'Good No Problem';
  }

  return '<h3>' + greeting + ' ' + name + '</h3>';

}
createGreet();

function writeGreet(){
  var hourNow;
  hourNow = prompt('do you like English?');
  var name;
  name = prompt('write down your English Level?')
  var greeting;

  if (hourNow == "yes"  ) {
    greeting = 'cool!';
  } else if (hourNow == "no") {
    greeting = 'Good bye!';
  }

  document.write('<h3>' + greeting + ' ' + name + '</h3>');

}
writeGreet();
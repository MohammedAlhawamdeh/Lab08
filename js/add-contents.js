'use strict';

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
/*
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
function writeGreets(){
  var hourNow;
  hourNow = prompt('How many courses would you like to see in the future?');
  var name;
  name = prompt('write down your English Level?');
  var greeting;
  if (hourNow == "yes") {
    greeting = 'cool!';
  } else if (hourNow == "no") {
    greeting = 'Good bye!';
  }
  document.write('<h3>' + greeting + ' ' + name + '</h3>');
}
writeGreets();
*/
var course = prompt("speaking or reading course?");
while(course != "speaking" && course != "reading"){
  course = prompt("wrong answer! Speaking or Reading?");
}var imageSource;
if (course == "speaking") {
  imageSource = 'https://blog.ed.gov/files/2017/01/Teachers-Do-You-Have-Student-Loans.jpg';
}else{
  imageSource = 'https://timesofindia.indiatimes.com/thumb/msid-70980246,imgsize-158567,width-800,height-600,resizemode-4/70980246.jpg';
}
var numOfTeachers = prompt("How many times you want to see teachers?");
while(numOfTeachers == '' || isNaN(numOfTeachers)){
  numOfTeachers = prompt("Wrong answer! How many times you want to see teachers?");
}
// Build the <img> element to add it to the page
var imgElement = '<img src="'+imageSource+'"/>';
// make a loop to repeat the picture
for(var i=0; i<numOfTeachers; i+=1){
  document.write(imgElement);
}
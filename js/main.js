// Initialize varibles
var $window = $(window);
var $usernameInput = $('.usernameInput'); // Input for username
var $messages = $('.messages'); // Messages area
var $inputMessage = $('.inputMessage'); // Input message input box

var $splashPage = $('.splash.page'); // The login page
var $detailPage = $('.detail.page'); // The chatroom page

$('#logo').click(function() {
  enter();
});

var enter = function() {
  $splashPage.fadeOut();
  $detailPage.show();
}

$('#ical-link').click(function() {
  console.log(this);
  copy(this);
})
//javascript copy function

function copy(inElement) {
  if (inElement.createTextRange) {
  var range = inElement.createTextRange();
  if (range && BodyLoaded==1)
   range.execCommand('Copy');
  } else {
  var flashcopier = 'flashcopier';
  if(!document.getElementById(flashcopier)) {
    var divholder = document.createElement('div');
    divholder.id = flashcopier;
    document.body.appendChild(divholder);
  }
  document.getElementById(flashcopier).innerHTML = '';
  var divinfo = '';
  document.getElementById(flashcopier).innerHTML = divinfo;
  }
}
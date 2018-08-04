function getIt() {
<<<<<<< HEAD
  $('p').on("click", function() {
  alert('Hey!');
});
}
  
function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty");
});
}

function submitIt(){
  $('form').on("submit", function(){
  alert("Your form is going to be submitted now.");
  });
}

function pressIt(){
  $('#typing').on("keydown", function(event) {
=======
  return "Hey!";
}
  
function frameIt() {
  $('img').addClass("tasty");
  return;
}

function submitIt(){
  alert("Your form is going to be submitted now.");
  return;
}

$('p').on("click", getIt());
 
$('img').on("load", frameIt());

$('#typing').on("keypress", function pressIt(event) {
  event = event.which;
>>>>>>> d491ab74d1b202bfd7b4c18ce746f79696bf7d4f
  if (event.which == 71) {
  alert("G!");
    }
});
<<<<<<< HEAD
}

=======

$('input:last').on("click", submitIt());

>>>>>>> d491ab74d1b202bfd7b4c18ce746f79696bf7d4f
$(document).ready(function(){
 
 getIt();
 frameIt();
 pressIt();
 submitIt();
 
});

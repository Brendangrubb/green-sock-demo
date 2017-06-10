


// Business Logic

function backwardsize(input) { // Reverses Input String
  var splitInput = input.split("");
  var reversedInput = splitInput.reverse();
  var joinedInput = reversedInput.join("");

  return joinedInput;
};

// User Interface Logic

$(document).ready(function() {
  // jquery alert test
  $(".jumbotron").click(function() {
    alert("test sucka");
  });
  // Calls backwardsize Function and Prints Return
  $("#backwards-name-form").submit(function(event) {
    var input = $('#input').val();
    var output = backwardsize(input);
    $(".output-intro").addClass("visible");
    $("#output").text(output);
    event.preventDefault();
  });

  // Green Sock
  var logoOne = document.getElementById("logo-id");
  var logoTwo = document.getElementById("logo-two-id");
  TweenMax.to(logoOne, 6, {
    left:600,
    backgroundColor:"#c66a1c",
    border:"5px solid black",
    borderRadius:15});
  TweenMax.to(logoTwo, 6, {
    right:600,
    backgroundColor: "#1c78c6",
    border:"5px solid black",
    borderRadius:15});

});

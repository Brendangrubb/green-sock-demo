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
    $("#output").text(output);
    event.preventDefault();
  });
});

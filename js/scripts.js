


// Business Logic

function backwardsize(input) { // Reverses Input String
  var splitInput = input.split("");
  var reversedInput = splitInput.reverse();
  var joinedInput = reversedInput.join("");

  return joinedInput;
};

function testFunction() {
  alert("Green Sock Rules!");
}

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

  // ANIMATION logos cross left to right, add background-color
  // TweenMax.to(logoOne, 6, {
  //   left:600,
  //   backgroundColor:"#c66a1c",
  //   border:"5px solid black",
  //   borderRadius:15});
  // TweenMax.to(logoTwo, 6, {
  //   right:600,
  //   backgroundColor: "#1c78c6",
  //   border:"5px solid black",
  //   borderRadius:15}

  // ANIMATION fly away/fly in (.to/.from)
  // TweenMax.from(logoOne, 3, {x:600, rotation:360, scale:.05})
  // TweenMax.from(logoTwo, 3, {x:-600, rotation:-360, scale:.05})

  // ANIMATION bounce in
  TweenMax.from(logoOne, 1.5, {
    opacity:0,
    scale:0,
    ease:Bounce.easeOut
  });
  TweenMax.from(logoTwo, 2, {
    opacity:0,
    scale:0,
    ease:Elastic.easeOut,
    delay:1,
    onComplete: testFunction
  });

  TweenMax.staggerFrom(".box", 1, {
    opacity:0,
    y:200,
    delay:0.5,
    rotation: 360,
    scale:2,
    ease: Circ.easeOut,
    delay:1,
  },
  0.2);
});

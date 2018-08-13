$(document).ready(function() {
  $("#formOne").submit (function(event) {
    var parts = ["adjective1", "adjective2", "bird", "room", "verb1", "verb2", "relative", "noun1", "liquid", "verb3", "bodyPart", "noun2", "verb4", "noun3"]


    parts.forEach(function(part) {
      var userInput = $("input#" + part).val();
      $("." + part).text(userInput);
    });





    // var adjective1Input = $("input#adjective1").val();
    // var adjective2Input = $("input#adjective2").val();
    // var birdInput = $("input#bird").val();
    // var roomInput = $("input#room").val();
    // var verb1Input = $("input#verb1").val();
    // var verb2Input = $("input#verb2").val();
    // var relativeInput = $("input#relative").val();
    // var noun1Input = $("input#noun1").val();
    // var liquidInput = $("input#liquid").val();
    // var verb3Input = $("input#verb3").val();
    // var bodyPartInput = $("input#bodyPart").val();
    // var noun2Input = $("input#noun2").val();
    // var verb4Input = $("input#verb4").val();
    // var noun3Input = $("input#noun3").val();
    //
    // $(".adjective1").text (adjective1Input);
    // $(".adjective2").text (adjective2Input);
    // $(".bird").text (birdInput);
    // $(".room").text (roomInput);
    // $(".verb1").text (verb1Input);
    // $(".verb2").text (verb2Input);
    // $(".relative").text (relativeInput);
    // $(".noun1").text (noun1Input);
    // $(".liquid").text (liquidInput);
    // $(".verb3").text (verb3Input);
    // $(".bodyPart").text (bodyPartInput);
    // $(".noun2").text (noun2Input);
    // $(".verb4").text (verb4Input);
    // $(".noun3").text (noun3Input);
    $("#list").show();
    $("#story").show();
    event.preventDefault();
  });
  // var iceCreams = ["vanilla", "chocolate", "pistachio"];
  //   iceCreams.forEach(function(iceCream) {
  //   $("#list").append($("<li>").text(iceCreams));
  // });

  var iceCreams = ["vanilla", "chocolate", "pistachio"];
    iceCreams.forEach(function(iceCream) {
    $("#list").append($("<li>").text(iceCream));
  });
});

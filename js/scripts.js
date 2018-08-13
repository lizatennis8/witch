var adjective1Input
var adjective2Input
var birdInput
var roomInput
var verb1Input
var verb2Input
var relativeInput
var noun1Input
var liquidInput
var verb3Input
var bodyPartInput
var noun2Input
var verb4Input
var noun3Input
var arrayTest
var arrayTest2
var list1
var list2
var list3

$(document).ready(function() {
  $("#formOne").submit (function(event) {
  adjective1Input = $("input#adjective1").val();
   adjective2Input = $("input#adjective2").val();
   birdInput = $("input#bird").val();
   roomInput = $("input#room").val();
   verb1Input = $("input#verb1").val();
   verb2Input = $("input#verb2").val();
   relativeInput = $("input#relative").val();
   noun1Input = $("input#noun1").val();
   liquidInput = $("input#liquid").val();
   verb3Input = $("input#verb3").val();
   bodyPartInput = $("input#bodyPart").val();
   noun2Input = $("input#noun2").val();
   verb4Input = $("input#verb4").val();
   noun3Input = $("input#noun3").val();
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
    arrayTest2 = [birdInput]
    arrayTest = [adjective1Input, adjective2Input, roomInput, verb2Input]
    arrayTest.push(arrayTest2);
    list1 = arrayTest[0]
    list2 = arrayTest[1]
    list3 = arrayTest[2]

    $(".adjective1").text (adjective1Input);
    $(".adjective2").text (adjective2Input);
    $(".bird").text (birdInput);
    $(".room").text (roomInput);
    $(".verb1").text (verb1Input);
    $(".verb2").text (verb2Input);
    $(".relative").text (relativeInput);
    $(".noun1").text (noun1Input);
    $(".liquid").text (liquidInput);
    $(".verb3").text (verb3Input);
    $(".bodyPart").text (bodyPartInput);
    $(".noun2").text (noun2Input);
    $(".verb4").text (verb4Input);
    $(".noun3").text (noun3Input);
    $(".ready").text (list1);
    $(".ready1").text (list2);
    $(".ready2").text (list3);

    $("#story").show();
    $("#array").show();
    event.preventDefault();
  });
});

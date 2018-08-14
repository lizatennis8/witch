$(document).ready(function() {
  $("#formOne").submit (function(event) {
    event.preventDefault();

var countby = parseInt($("#countby").val());
var countto = parseInt($("#countto").val());

var total = 0;
for(var index = countby; index <= countto; index += countby) {
alert(index);
  };

  // index.forEach(function(item){
  //   $("#countresults").append("<li>" + item + "</li>");
  //     $("#countresults").append(index);
// });
//
//
//     $("#countresults").show();
//     $("#formOne").hide();
  });
});

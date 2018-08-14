$(document).ready(function() {
  $("#formOne").submit (function(event) {
    event.preventDefault();


    var string = $("#sentence").val();
    var res = string.split("o").join("-").split("e").join("-").split("a").join("-").split("i").join("-").split("u").join("-");
    alert(res);
  });
});
//
// .join("-")

// , "a", "e", "i", "u"

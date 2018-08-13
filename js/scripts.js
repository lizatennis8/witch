$(document).ready(function() {
  $("#formOne").submit (function(event) {
    var items = ["item1", "item2", "item3", "item4", "item5", "item6"]

    items.forEach(function(item) {
      var userValue = $("#" + item).val();
      $("." + item).text(userValue);
      $("#shoppinglist").append($("<li>").text(userValue));
  });
    $("#shoppinglist").show();
    $("#formOne").hide();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#formOne").submit (function(event) {
    event.preventDefault();
    var itemIds = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var answers = [];
    itemIds.forEach(function(id) {
      var answer = $("#" + id).val();
      answers.push(answer);
    });

    // sort

    // display

    // generate a list shopping list
    // $("#shoppinglist").append($("<li>").text(answer));







    $("#shoppinglist").show();
    $("#formOne").hide();
  });
});

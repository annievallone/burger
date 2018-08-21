
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var eaten = $(this).data("eaten");
    var eatenState = {
      devoured: eaten
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState
    }).then(
      function() {
        console.log("changed to devoured", eatenState);
        location.reload();
      }
    )
  });
$(".submitBurger").on("submit", function(event){
  event.preventDefault();
console.log("creating")
  var newBurger = {
    name: $("#bg").val().trim()
  };
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
    success: function() {
      location.reload();
    }
  })
})
  });


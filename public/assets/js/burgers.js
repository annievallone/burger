
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    // var eaten = $(this).data("eaten");
    // console.log("eaten " + eaten)
    var eatenState = {
      devoured: id
    };
    $.ajax("/api/burgers", {
      type: "PUT",
      data: eatenState
    }).then(
      function() {
        console.log("changed to devoured", eatenState);
        location.reload();
      }
    )
  });
$(".create-form").on("submit", function(event){
  event.preventDefault();
console.log("creating")
  var newBurger = {
    name: $("#bg").val().trim()
  };
  $.ajax( {
    method: "POST",
    url: "/api/burgers",
    data: newBurger,
    success: function() {
      location.reload();
    }
  })
})
  });


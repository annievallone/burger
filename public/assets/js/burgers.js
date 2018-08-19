// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var eaten = $(this).data("eaten");

    var eatenState = {
      devoured: true
    };

    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
      location.reload()
    }).then(
      function() {
        console.log("Added new burger ", newBurger);
        location.reload("/");
      }
    );
  });

  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newBurger = {
  //     name: $("#bg").val().trim()
      
  //   };
  //   console.log("NEW  BURGER; ", newBurger)

  //   // Send the POST request.
  //   $.post("/api/burgers", newBurger, function(){

    // })
    // $.ajax("/api/burgers", {
    //   type: "POST",
    //   data: newBurger
    // }).then(
    //   function() {
    //     console.log("created new burger");
    //     // Reload the page to get the updated list
    //     // 
    //     location.reload();
    //   }
    // );
  });


var giphy = ["cactus", "mint", "pine cone", "oak tree"];

function displayTheGiphy() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=hTpu7xQEYNQIOqd6NOybPMX5bmVVw6nP&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
        var gifDiv = $("<div class='gif-it'>");

        var rated = response.data[0].rating;
        var pOne = $("<p>").text("Rated: " + rated);
        gifDiv.append(pOne);

        var theGif = response.data[0].images.original.url
        var image = $("<img>").attr("src", theGif);
        gifDiv.append(image);

        $("#gif-viewd").prepend(gifDiv);
    });
  }

      function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < giphy.length; i++) {
          var a = $("<button>");
    
          a.addClass("gif");
          a.attr("data-name", giphy[i]);
          a.text(giphy[i]);
   
          $("#buttons-view").append(a);
        }
      }
      $("#add-gif").on("click", function(event) {
        event.preventDefault();
        var gif = $("#gif-input").val().trim();
    
        giphy.push(gif);
        console.log(giphy);

        renderButtons();
      });
      $(document).on("click", ".gif", displayTheGiphy);
      renderButtons();
var topics = ["computers", "cars", "halo", "weather", "space", "animals", "tools", "nature", "tesla", "books"];

function displayInfo() {

var topic = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

console.log(queryURL);
console.log(response);

  var results = response.data;

    for (var i = 0; i < results.length; i++) {

      var topicDiv = $("<div>");
      var p = $("<p>").text("Rating: " + results[i].rating);
      var topicImage = $("<img>");

      topicImage.attr("src", results[i].images.fixed_height.url);

      topicDiv.append(p);
      topicDiv.append(topicImage);

      $("#topics-view").prepend(topicDiv);
    };
  });
}
function renderButtons() {
  $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {

    var a = $("<button>");

    a.addClass("topic-btn");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);

    $("#buttons-view").append(a);
  }
}

$("#add-topic").on("click", function(event) {
  event.preventDefault();

  var topic = $("#topic-input").val().trim();

  topics.push(topic);

  renderButtons();
});

$(document).on("click", ".topic-btn", displayInfo);

renderButtons();
function Ticket(movie, time, age) {
  this.movieName = movie;
  this.time = time;
  this.age = age;
}


















$(document).ready(function() {
  $("form#goer-input").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("input#movie-name").val();
    var inputTime = $("input#time").val();
    var inputAge = $("input#age").val();

    var newTicket =  new Ticket(inputtedMovie, inputTime, inputAge);

    $("div#price").append("<p><span class='ticket'>" + newTicket.movieName + "</span></p>");


  });
});

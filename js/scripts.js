function Ticket(movie, time, age) {
  this.movieName = movie;
  this.time = time;
  this.age = age;
}

var ticketPrice = "";

var resultCalc = function(inputTime, inputAge) {
  console.log(inputAge);
  if (inputTime >= 1 && inputTime <= 5) {
    ticketPrice = "3.00";
  } else if (inputTime >= 6 && inputTime <= 11 && inputAge >= 1 && inputAge <= 16) {
    ticketPrice = "7.00";
  } else if (inputTime >= 6 && inputTime <= 11 && inputAge >= 55 && inputAge <= 100) {
    ticketPrice = "8.00";
  } else {
    ticketPrice = "10.00";
  }
};

$(document).ready(function() {
  $("form#goer-input").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("input#movie-name").val();
    var inputTime = $("input#time").val();
    var inputAge = $("input#age").val();
    var result = resultCalc(inputTime, inputAge);
    var newTicket = new Ticket(inputtedMovie, inputTime, inputAge);

    $("#price").text(ticketPrice);
  });
});

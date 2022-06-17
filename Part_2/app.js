$(function () {
    $("button").on("click", function (event) {
        event.preventDefault();
        const movie = $("#movie-title").val()
        const rating = $("#movie-rating").val()
        if (movie.length <2) {
            alert("The movie's title must be more than 1 character")
        } else {
            if (rating < 0 || rating > 10) {
                alert("The movie's rating must be between 0 and 10")
            } else {
                $("tbody").append(`<tr><td>${movie}</td><td>${rating}</td><td><button type="submit">X</button></td></tr>`)
            }
        }
    });
    $("table").on("click", "button", function () {
      $(this).parent().parent().remove();  
    });

})
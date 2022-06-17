
//When we do this, it wait for the DOM to load to run the conde inside
$(function () {
    console.log("Let's get ready to party with jQuery!");
    //here we are adding the "image-center" class to the image
    $("article img").addClass("image-center");
    // Here we remove the las paragraph of the article
    $("article p").eq(5).remove();
    //Here we are setting the title's size to a random number between 0 to 100 px
    $("#title").css("font-size", `${Math.random() * 100}px`);
    // Here we appended a new li to the list
    $("ol").append("<li>The puppy is really cute</li>");
    //But here we removed ir and adde a paragraph apologizing for the list
    $("aside").children().remove();
    $("aside").append("<p>Im sorry, the  list was dumb</p>");
    //Here we are adding an event listener for the background color to be set to the values of the inputs
    $("input").on("change", function () {
        const red = $("input").eq(0).val()
        const blue = $("input").eq(1).val()
        const green = $("input").eq(2).val()
        $("body").css("background-color", `rgb(${red},${green},${blue})`)
    })
    //Here we add an event listener for the image to be removed when clicked
    $("img").on("click", function () {
        $(this).remove();
    })
})
$(document).ready(function () {
    const height = parseInt(prompt("Please enter your height"))

    if (height > 3 < 5){
        $("#three").show();
    } else if (height === 3) {
        alert("Have Fun!");
        $("#three").show();
    } else {
        $("#Under-3").show();
    }

    if (height > 5){
        $("#five").show();
    } else if (height === 5) {
        alert("Enjoy!");
        $("#five").show();
    } else {
        $("#Under-5").show();
    }

})
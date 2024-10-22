$(document).ready(function () {
    let height = parseInt(prompt("Please enter your height"))
    let new1 = height === 4 || height === 3 
    let new2 = height >= 5
    let new3 = height < 3
    if (new1) {
        $("#three").show();
        alert("Have Fun!");
    } else if (new2) {
        $("#five").show();
        alert("Enjoy!");
    } else if (new3) {
        $("#Under-3").show();
    } else {
        $("#Under-3").show();

    }
})
$(document).ready(function () {
    const height = parseInt(prompt("Please enter your height"))

    if (height === 3, 4 ){
        $("#three").show();
        alert("Have Fun!");
    } else if (height === 5, 6){
        $("#five").show();
        alert("Enjoy!");
    }else {
        $("#Under-3").show();

    }
})
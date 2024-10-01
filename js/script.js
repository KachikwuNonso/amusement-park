$(document).ready(function () {
    const age = parseInt(prompt("Please enter your age"))

    if (age > 21){
        $("#rides").show();
    } else if (age === 21) {
        alert("Don't go wild!");
        $("#rides").show();
    } else {
        $("#Under-21").show();
    }
})
window.onload = () => {
    $( "tr:lt(2)" ).css( "font-style", "italic");
    $("td:lt(2)").css("background-color", "red");

    $("td:gt(2)").css("background-color", "green");
}


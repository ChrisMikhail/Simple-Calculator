function check_click(clicked_id)
{
    let equation = document.getElementById("display").innerHTML += clicked_id;
    if (clicked_id == "") {
        document.getElementById("display").innerHTML = clicked_id;
    }
    if (clicked_id == "=") {
        let statement = equation.substring(0, equation.length - 1);
        let result = Function("return " + statement)();
        document.getElementById("display").innerHTML = result
    }    
}
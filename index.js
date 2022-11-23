function reply_click(clicked_id)
{
    let S = document.getElementById("display").innerHTML += clicked_id;
    if (clicked_id == "") {
        document.getElementById("display").innerHTML = clicked_id;
    }
    if (clicked_id == "=") {
        let equation = S.substring(0, S.length - 1);
        let result = Function("return " + equation)();
        document.getElementById("display").innerHTML = result
    }    
}
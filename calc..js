
function somar()
{

    console.log("mensagem no console");

    var somar = num1 + num2;


    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    somar = num1 + num2;

    document.getElementById("somar").value = somar;
    console.log(somar);

    document.getElementById("history").innerHTML += "<h1>"+SVGFEConvolveMatrixElement+"</h1>";

}

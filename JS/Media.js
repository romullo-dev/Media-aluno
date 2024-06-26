function Media () {
    let N1 = parseFloat(document.getElementById('N1').value);
    let N2 = parseFloat(document.getElementById('N2').value);
    let N3 = parseFloat(document.getElementById('N3').value);
    let N4 = parseFloat(document.getElementById('N4').value);

    let M = (N1 + N2 + N3 + N4)/4;

    let resultadosDiv = document.getElementById('resultados')

    if (M < 5) {
        resultadosDiv.innerHTML="<h3> Resultados:</h3>" + "<p>" +" REPROVADO COM MEDIA " + M.toFixed(2) + "</p>";
    }  else if (M < 7){
        resultadosDiv.innerHTML="<h3> Resultados:</h3>" + "<p>" +" EM RECUPERAÇAO COM MEDIA " + M.toFixed(2) + "</p>";
    } else {
        resultadosDiv.innerHTML="<h3> Resultados:</h3>" + "<p>" +" APROVADO COM MEDIA " + M.toFixed(2) + "</p>";
    }
    



}
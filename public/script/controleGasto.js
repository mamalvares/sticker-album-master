function inserirValores() {
    var num1 = document.querySelector(".valorInserido").value;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    if (num1 > 0) {
        var resultadoValorGasto = "R$" + parseInt(num1) + " - " + today;
        document.querySelector(".resultadoValorGasto").innerHTML = resultadoValorGasto;
        //aqui tem que criar uma nova div par ao novo valor, deixando o antigo valor do jeito que estava
    } else {
        window.alert('Insira um valor maior que 0');
    }

    if (num1 > 0) {
        var resultadoValorGasto = "R$" + parseInt(num1);
        document.querySelector(".resultadoValorTotalGasto").innerHTML = resultadoValorGasto;
        //aqui tem que somar todos os valores inseridos
    } else {
        window.alert('Não há valores para somar');
    }
}
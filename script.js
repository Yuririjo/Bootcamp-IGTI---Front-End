var valor = document.getElementById('valor');
var prazo = document.getElementById('prazo');
var juros = document.getElementById('jurosAno')
var tbody = document.querySelector('tbody')

function calcular (){
    var total = valor.valueAsNumber;
    var meses = prazo.valueAsNumber * 12;
    var jurosAA = juros.valueAsNumber;
    var jurosAM = (1 + jurosAA) ** (1/12) - 1;
    var amortizacao = total/meses;
    document.getElementById('meses').valueAsNumber = meses;
    document.getElementById('jurosMes').valueAsNumber = jurosAM;

    for ( var i = 0; i < 5; i++){
        var saldoDevedor = total - i * amortizacao;
        var jurosP = saldoDevedor * jurosAM;
        var tr = tbody.children[i]
        tr.children[1].textContent = amortizacao.toFixed(2);
        tr.children[2].textContent = amortizacao.toFixed(2);
        tr.children[2].textContent = (amortizacao + jurosP).toFixed(2);
    }

    var totalJuros = 0;
    for(var i = 0; i < meses; i++){
        var saldoDevedor = total - i * amortizacao;
        var jurosP = saldoDevedor * jurosAM;
        totalJuros += jurosP; 
    }
    document.getElementById('jurosAcumulados').value = totalJuros.toFixed(2);
}

calcular()

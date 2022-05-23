'use strict';
//variáveis
let somaMussarela = 0;
let somaCamarão = 0;
let somaMarguerita = 0;
let vendasMussarela = 0.00;
let vendasCamarão = 0.00;
let vendasMarguerita = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click',vendas,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//funções
function vendas(e) 
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendasMussarela = vendasMussarela + 25.00;
        if(somaMussarela < 0)
        {
            somaMussarela = 0;
            vendasMussarela = 0.00;
        }
        document.getElementById('resuldoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendasMussarela').innerHTML = vendasMussarela.toFixed(2);
    }else if(document.getElementById('camarão').checked)
    {
        somaCamarão = somaCamarão + 1;
        vendasCamarão = vendasCamarão + 40;
        if(somaCamarão < 0)
        {
            somaCamarão = 0;
            vendasCamarão = 0.00;
        }
        document.getElementById('resultadocamarão').innerHTML = somaCamarão;
        document.getElementById('vendascamarão').innerHTML = vendasCamarão.toFixed(2);
    }else if(document.getElementById('marguerita').checked)
    {
        somaMarguerita = somaMarguerita + 1;
        vendasMarguerita = vendasMarguerita + 30;
        if(somaMarguerita < 0)
        {
            somaMarguerita = 0;
            vendasMarguerita = 0.00;
        }
        document.getElementById('resultadoMarguerita').innerHTML = somaMarguerita;
        document.getElementById('vendasMarguerita').innerHTML = vendasMarguerita.toFixed(2);
    }
}
function estorno(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela - 1;
        vendasMussarela = vendasMussarela - 25;
        document.getElementById('resuldoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendasMussarela').innerHTML = vendasMussarela.toFixed(2);
    }else if(document.getElementById('camarão').checked)
    {
        somaCamarão = somaCamarão - 1;
        vendasCamarão = vendasCamarão - 40;
        document.getElementById('resultadocamarão').innerHTML = somaCamarão;
        document.getElementById('vendascamarão').innerHTML = vendasCamarão.toFixed(2);
    }else if(document.getElementById('marguerita').checked)
    {
        somaMarguerita = somaMarguerita - 1;
        vendasMarguerita = vendasMarguerita - 30;
        document.getElementById('resultadoMarguerita').innerHTML = somaMarguerita;
        document.getElementById('vendasMarguerita').innerHTML = vendasMarguerita.toFixed(2);
    }

}
function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}


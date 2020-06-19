function calcular() {
    var maquina = maquinas.value;

    var total = maquina * 120;

    if (maquina < 0) {
        div_simulador.innerHTML = "Número inválido"
    } else {

        div_simulador.innerHTML = `O nosso sistema ficou no total de <u>R$${total}</u> para você!`;
    }
}
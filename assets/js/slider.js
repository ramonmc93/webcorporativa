function cambiarImagenSlider( idHistoriaCliente = 1, accionBotonCambio = false) {

    let contadorImagenesMostradas = 0;
    let contenedorImagenes = $("div[data-historia-cliente]");
    let totalImagenes = contenedorImagenes.length;

    setInterval(function(){

        let idHistoriaClienteAuxiliar = contenedorImagenes[contadorImagenesMostradas].dataset.historiaCliente;

        $(".contenedorHistoriasClientes-active").removeClass(["d-flex", "contenedorHistoriasClientes-active"]).addClass("d-none");
        $(".contenedorHistoriasClientes").removeClass("contenedorHistoriasClientes");

        let contenedorHistoriaCliente = $("[data-historia-cliente="+idHistoriaClienteAuxiliar+"]");
        contenedorHistoriaCliente.removeClass("d-none").addClass("d-flex");
        contenedorHistoriaCliente.addClass("contenedorHistoriasClientes");
        
        setTimeout(function(){
            contenedorHistoriaCliente.addClass("contenedorHistoriasClientes-active");
        }, 10);

        contadorImagenesMostradas++;

        if ( contadorImagenesMostradas > (totalImagenes-1) ) {
            contadorImagenesMostradas = 0;
        }

    }, 5000);

}
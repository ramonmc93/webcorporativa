function iniciarSliderImagenes( intervalo = 0 ) {

    let contadorImagenesMostradas = 1;
    let contenedorImagenes = $("div[data-historia-cliente]");
    let totalImagenes = contenedorImagenes.length;
    let intervaloSlider = null;
    let intervaloInicial = intervalo;

    document.addEventListener("visibilitychange", function() {
        
        let visibilidadPagina = document.visibilityState;

        if ( visibilidadPagina == "visible" ) {
            
            // --- Se deshabilita la secuencia del inicio principal del slider.
            clearInterval(intervaloInicial);

            intervaloSlider = setInterval(function(){
        
                let idHistoriaClienteAuxiliar = contenedorImagenes[contadorImagenesMostradas].dataset.historiaCliente;
                cambiarImagenSlider( idHistoriaClienteAuxiliar );
        
                contadorImagenesMostradas++;
                if ( contadorImagenesMostradas > (totalImagenes-1) ) {
                    contadorImagenesMostradas = 0;
                }

            }, 5000);

        } else {
            clearInterval(intervaloSlider);
        }

    });

}


function empezarSlider( activar = true ) {

    let contadorImagenesMostradas = 1;
    let contenedorImagenes = $("div[data-historia-cliente]");
    let totalImagenes = contenedorImagenes.length;
    
    let intervalo = setInterval(function(){
        
        if ( document.visibilityState == "visible" && activar == true ) {

            let idHistoriaClienteAuxiliar = contenedorImagenes[contadorImagenesMostradas].dataset.historiaCliente;
            cambiarImagenSlider( idHistoriaClienteAuxiliar );
    
            contadorImagenesMostradas++;
            if ( contadorImagenesMostradas > (totalImagenes-1) ) {
                contadorImagenesMostradas = 0;
            }
            
        }

    }, 5000);

    return intervalo;

}


function cambiarImagenSlider( idHistoriaClienteAuxiliar ) {

    $(".contenedorHistoriasClientes-active").removeClass(["d-flex", "contenedorHistoriasClientes-active"]).addClass("d-none");
    $(".contenedorHistoriasClientes").removeClass("contenedorHistoriasClientes");

    let contenedorHistoriaCliente = $("[data-historia-cliente="+idHistoriaClienteAuxiliar+"]");
    contenedorHistoriaCliente.removeClass("d-none").addClass("d-flex");
    contenedorHistoriaCliente.addClass("contenedorHistoriasClientes");
    
    setTimeout(function(){
        contenedorHistoriaCliente.addClass("contenedorHistoriasClientes-active");
    }, 10);

}
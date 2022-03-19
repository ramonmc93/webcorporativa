window.addEventListener("load", function() {

    // $('.slider').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // });
    
    let indexHistoriaClienteAnterior = 1;
    $(document).on("click", ".btnCambirHistori", function(evt){
        
        let idHistoriaCliente = evt.target.dataset.idHistoriaCliente;
        if ( indexHistoriaClienteAnterior != idHistoriaCliente ) {
            
            $(".contenedorHistoriasClientes-active").removeClass(["d-flex", "contenedorHistoriasClientes-active"]).addClass("d-none");
            $(".contenedorHistoriasClientes").removeClass("contenedorHistoriasClientes");

            let contenedorHistoriaCliente = $("[data-historia-cliente="+idHistoriaCliente+"]");
            contenedorHistoriaCliente.removeClass("d-none").addClass("d-flex");
            contenedorHistoriaCliente.addClass("contenedorHistoriasClientes");
            
            setTimeout(function(){
                contenedorHistoriaCliente.addClass("contenedorHistoriasClientes-active");
            }, 100);
    
            indexHistoriaClienteAnterior = idHistoriaCliente;

        }
    
    });

    console.log(1);

});
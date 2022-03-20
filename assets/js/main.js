window.addEventListener("load", function() {

    // --- Mandar el scroll al final.
    // $("html, body").animate({ scrollTop: (document.scrollingElement.offsetHeight ) }, "slow");
    
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
            }, 10);
    
            indexHistoriaClienteAnterior = idHistoriaCliente;

        }
    
    });


    // --- Menú
    $(document).on("click", ".menuPrincipal li", function(){
        $(".menuPrincipal li").removeClass("item-activo");
        let itemMenu = $(this)[0];
        itemMenu.className = "item-activo";
    });

    
    // --- Menú desplegable
    let estadoMenu = false;
    $(document).on("click", ".btnMostrarMenuPrincipal, .menu", function(){
        abrirCerrarMenu();
    });

    // $(document).on("click", "body", function(){
    //     if ( estadoMenu ) {
    //         abrirCerrarMenu();
    //     }
    // });

    function abrirCerrarMenu() {
        if ( !estadoMenu ) {
            $(".menu").removeClass("d-none").addClass("d-block");
            estadoMenu = true;
        } else {
            $(".menu").removeClass("d-block").addClass("d-none");
            estadoMenu = false;
        }
    }

});
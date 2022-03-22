window.addEventListener("load", function() {

    // --- Mandar el scroll al final.
    // $("html, body").animate({ scrollTop: (document.scrollingElement.offsetHeight ) }, "slow");
    
    // --- Se inicializa el slider.
    if ( document.visibilityState == "visible" ) {

        let intervalo = empezarSlider();
        iniciarSliderImagenes(intervalo);

    }

    // --- Cambio manual slider.
    let indexHistoriaClienteAnterior = 1;
    $(document).on("click", ".btnCambirHistoriaCliente", function(evt){
        
        let idHistoriaCliente = evt.target.dataset.idHistoriaCliente;
        if ( indexHistoriaClienteAnterior != idHistoriaCliente ) {
        
            iniciarSliderImagenes( idHistoriaCliente, true );
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
    $(document).on("click", ".btnMostrarMenuPrincipal, .contenedorMenu li", function(){
        abrirCerrarMenu();
    });

    function abrirCerrarMenu() {
        if ( !estadoMenu ) {
            $(".contenedorMenu").addClass("menu-activo");
            estadoMenu = true;
        } else {
            $(".contenedorMenu").removeClass("menu-activo");
            estadoMenu = false;
        }
    }

});
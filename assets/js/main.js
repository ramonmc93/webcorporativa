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

    // $(document).on("click", "body", function(){
    //     if ( estadoMenu ) {
    //         abrirCerrarMenu();
    //     }
    // });

    function abrirCerrarMenu() {
        if ( !estadoMenu ) {
            $(".contenedorMenu").removeClass("d-none").addClass("d-block");
            estadoMenu = true;
        } else {
            $(".contenedorMenu").removeClass("d-block").addClass("d-none");
            estadoMenu = false;
        }
    }

});
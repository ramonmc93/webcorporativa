// $('.slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
// });

$(document).on("click", ".btnCambirHistori", function(evt){
    let idHistoriaCliente = evt.target.dataset.idHistoriaCliente;
    console.log(idHistoriaCliente);
});
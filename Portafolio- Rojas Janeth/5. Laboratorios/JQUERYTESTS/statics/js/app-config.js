function buscarJugador(){
    //alert("Haz presionado el botón");
    alert('el jugador es: ' +App.elements.jugadorTxt.val());
};

App = {
    init: function(){

        App.bindEvents();

    },

    elements:{
        buscarJugadorBtn: $(".buscador-jugador-btn-js"),
        jugadorTxt: $(".jugador-txt-js")

    },
        bindEvents: function(){
        App.elements.buscarJugadorBtn.on("click",buscarJugador );

        
    }
};
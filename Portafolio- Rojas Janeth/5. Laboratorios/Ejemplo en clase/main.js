(function (){
    //primera prueba
        //alert("Hola Janetho");
    //segunda prueba
    document.getElementById("reemplazame").innerHTML = 5+5;
    //tercera prueba
    var nombre= "Janetho", apellido="Rojas";
    console.log("La estudiante es: "+nombre + " "+ apellido + ".");

    var estudiante = "Janeth";
    console.log("estudiantes que van a pasar: "+ estudiante);

    //callbacks
  /*  function sumar(a,b,callback){

        return callback  (a+b);
    }

    function _callback(a){

        return a/2;
    }

    sumar(4,5, _callback);*/
    function sortNumber(a, b){

        return a - b;
    }

    function __sort(a){ 
        return a.sort(); 
    }

    function __add(a){
        var acum=0;

        for(var i=0; i < a.length; i++){
            acum += a[i];
            
        }
        return acum;

    }


    function randomGenerator(callback){

        var quantity=5, randoms= [];
        for (var i=0; i < quantity; i++ ){
        randoms.push(Math.floor((Math.random()*10) +1));
                }

                console.log(randoms);
                return typeof(callback) !=="undefined"? callback(randoms): randoms;
                
}

console.log(randomGenerator());
console.log(randomGenerator(__sort));
console.log(randomGenerator(__add));

})();

   /* //paso por valor
    console.log(sumar(10,10, function(a){
        return a/2;
    }));
})();*/
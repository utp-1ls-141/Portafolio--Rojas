function control1() {
    var str1=$("#String1").val();
    var str2=$("#String2").val();
    concatenar(str1,str2);
}

function concatenar(str1, str2){
    $('.modal-body').html('La nueva cadena concatenada es: '+str1+' '+str2);
}

function control2(){
   

    var str1=$("#String1").val();
    var matriz=[];
    /*var matriz=new Array(str1);

    for (var i = 0; i < str1; i++){
        matriz[i]=[];
    }*/

    for(var i=0; i<str1; i++){
        matriz[i]=[];
        for(var j=0; j<str1; j++){ 

         var num= Math.floor(Math.random() * 100);

        if(i!=j){

            matriz[i][j]=num; 
        }else{

            matriz[i][i]=num*3;

        }


        
        /* if(((num%3)==0) && i==j ){

            //if((num%3)=0){
                matriz[i][j]=num;  
            
            //}

         }else{
            matriz[i][j]=num; 

         } */
         

         

        }   
    }

    $('.modal-header').html(JSON.stringify(matriz));

}

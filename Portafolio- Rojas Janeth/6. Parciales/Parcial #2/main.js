function isomorfos(){
    var str1= document.getElementById('string1').value;
    var str2= document.getElementById('string2').value;
    var str3= document.getElementById('string3').value;
    //var texto =alert("Son palabras isomorficas");
    var c1=new Array(str1.length);//crea vector
    var c2=new Array(str2.length);
    var c3=new Array(str3.length);
    var cd1=new Array(str1.length); //crea otro vector con el codigo
    var cd2=new Array(str2.length);
    var cd3=new Array(str3.length);
    
    
  if(str1==""||str2==""||str3==""){
    $('.modal-header').html(JSON.stringify('no hay palabra en un campo'));
    }                        
    else if(str1.length!=str2.length && str3.length!=str2.length && str1.length!=str3.length){
        $('.modal-header').html(JSON.stringify('no tienen igual longuitudes'));
    }else{ 

        for(var i=0; i<str1.length; i++){

            c1[i]= str1.charAt(i); //cargamos vector
            c2[i]= str2.charAt(i);
            c3[i]= str3.charAt(i);
            cd1[i]=i;
            cd2[i]=i;
            cd3[i]=i;

            }

            for(var i=0; i<str1.length; i++){
                for(var j=1; j<str1.length; j++){ 
                    if(c1[i]==c1[j])
                        cd1[j]=i; //cambia el numero en el arreglo del codigo

                    }
                }
            for(var l=0; l<str2.length; l++){
                for(var u=1; u<str2.length; u++){ 
                    if(c2[l]==c2[u])
                        cd2[u]=l;

                    }
                }
                for(var l=0; l<str3.length; l++){
                    for(var u=1; u<str3.length; u++){ 
                        if(c3[l]==c3[u])
                            cd3[u]=l;
    
                        }
                    }
                    if(JSON.stringify(cd2) === JSON.stringify(cd3) && JSON.stringify(cd2) === JSON.stringify(cd1) && JSON.stringify(cd1) === JSON.stringify(cd3)){ //cambio a cadena el arreglo
                        $('.modal-header').html(JSON.stringify('son palabras isomorficas'));
                        
                        }else{ 
                            $('.modal-header').html(JSON.stringify('no son isomorficas'));
                        }             


    }

}    

function palindromo(){
    var str4= document.getElementById('string4').value;
    var cadena1=new Array(str4.length);
    var cadena2=new Array(str4.length);
    var d= [];
    var binA = [];
    var binB = [];
    var binin = [];
    var resp = false;
    var binCad1 = (str4 >>> 0).toString(2);
    var binl = binCad1.length;
    for(var i=0; i<str4.length; i++){
        cadena1[i]= str4.charAt(i); //cargamos vector
        d[i]=cadena1[i];
    }
    for(var j = 0; j< binl; j++){
        binA[j] = binCad1.charAt(j);
        binin[j] = binA[j]
    }
    binB = binin.reverse();
    cadena2 = d.reverse();
        for(var i=0; i<str4.length; i++){
                if(cadena1[i]==cadena2[i]){ 
                 resp = true;
        
                if(binA[i] == binB[i]){
                    resp = true;
                }
                $('.modal-header').html("Es Doblemente palindromo");
            }else
                $('.modal-header').html("no es doblemente palindromo");
                              
        }
        
}

function control2(){
    var i = $("#num1").val();
    matriz(i);
 }
 
 function matriz(i){
    var ind = i-1;
    var matriz = [], x = 0;
    if(i%2==0){
         for(var n=0; n<i; n++){
           matriz [n] = [];
           for(var j=0; j<i; j++){ 
              x= Math.floor(Math.random() * 1000) + 1;
              var mol = x%23;
              matriz[n][j]=x;
              if(n!=j){
                  matriz[n][j]=x;
              }else if (n==j){
                 if(mol==0)
                  matriz[n][n]=x; 
                 else
                  j = j - 1;     
               }else if(n== (j+i-1)){
                 if(x%x!=0 && x%1!=0){
                 matriz[j][j]=x;
                 }
                 else
                 j = j +1;                                                  
               }  
             }
           }
       }
     else{
       for(var n=0; n<i; n++){
         matriz [n] = [];
           for(var j=0; j<i; j++){ 
             x= Math.floor(Math.random() * 1000) + 1;
             var mol = x%23;
             matriz[n][j]=x;
             if(n!=j){
               matriz[n][j]=x;
             }
             else if (n==j){
               if(mol==0)
                 matriz[n][n]=x;
               else
                 j = j - 1;
             }
             else if(n== (j+i-1)){
               if(x%x!== 0 && x%1!==0)
                  matriz[j][j]=x;  
             }
           }
         }
         var r =Math.floor(matriz.length/2) ;
         matriz[r][r]=23;              
       }
   console.log(matriz);
   $('.modal-header').html(' '+matriz + '\n');      
 }
 
 
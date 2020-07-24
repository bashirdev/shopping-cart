    // plusBtn  inputValue  minusBtn price 
    //  subTotal tax totalAmount
    // plus button handler
    const pBtn=document.getElementById('plusBtn');
    pBtn.addEventListener('click', ()=>{

    var quantityM=parseFloat(document.getElementById('inputValue').value);
    quantityM ++;
    document.getElementById('inputValue').value=quantityM;

                                                                    
    mobileQuntity('price', quantityM );

    totalSum('subTotal' , quantityM )



    })

    //minus Button button handler

    minusBtn.addEventListener('click', ()=>{

        var quantityMinus=parseFloat(document.getElementById('inputValue').value);
        quantityMinus --;
        document.getElementById('inputValue').value=quantityMinus;
        
        mobileQuntity('price', quantityMinus );
        totalSum('subTotal' , quantityMinus )

        
        })





    var casePlusBtn =document.getElementById('casePlusBtn');

    casePlusBtn.addEventListener('click', ()=>{
        var siliconQuantity=parseFloat(document.getElementById('caseInput').value);
        siliconQuantity ++;
    document.getElementById('caseInput').value=siliconQuantity;

    silicon_quantity('siliconPrice', siliconQuantity);

    caseHandler('subTotal' , siliconQuantity )


    })



    var caseMinusBtn=document.getElementById('caseMinusBtn'); 
    caseMinusBtn.addEventListener('click', ()=>{

        var caseMinusQuantity=parseFloat(document.getElementById('caseInput').value);
        caseMinusQuantity --;
        document.getElementById('caseInput').value=caseMinusQuantity;
        
        silicon_quantity('siliconPrice', caseMinusQuantity );
        
        caseHandler('subTotal' , caseMinusQuantity )
        
        })

          //totalAmount tax subTotal
        function totalSum(id, quantityM, casePrice){
             
            var subAmount=parseFloat(document.getElementById(id).innerText='1309');
            var taxAmount=parseFloat(document.getElementById(id).innerText='');
            // var subAmountWithTax = subAmount % quantityM  * 5;
            // parseFloat(document.getElementById(id).innerText=subAmountWithTax);
      var subAmountTotal =  document.getElementById(id).innerText=  subAmount * quantityM ;
   
    }

    function caseHandler(id,casePrice){
        var subAmount=parseFloat(document.getElementById(id).innerText='59');

    //    subT= document.getElementById(id).innerText='1309';

     var taxAmount=parseFloat(document.getElementById(id).innerText='');
            // var subAmountWithTax = subAmount % quantityM  * 5;
            // parseFloat(document.getElementById(id).innerText=subAmountWithTax);
      var subAmountTotal =  document.getElementById(id).innerText= subAmount * casePrice  ;
    }
   

    function silicon_quantity(id, siliconQuantity){
        var caseprice=parseFloat(document.getElementById(id).innerText='59');
       var si= document.getElementById(id).innerText=caseprice * siliconQuantity ;
      

    }


        
    function mobileQuntity(id, quantityM){
        var price=parseFloat(document.getElementById(id).innerText='1250');
        document.getElementById(id).innerText=price * quantityM ;
        
     
        
    }
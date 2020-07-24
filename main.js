// plusBtn  inputValue  minusBtn price 
//  subTotal tax totalAmount
// plus button handler
const pBtn=document.getElementById('plusBtn');
pBtn.addEventListener('click', ()=>{

var quantityM=parseFloat(document.getElementById('inputValue').value);
 quantityM ++;
document.getElementById('inputValue').value=quantityM;

                                                                  // var price=parseFloat(document.getElementById('price').innerText='1250');
                                                                              // document.getElementById('price').innerText=price * quantityM ;
mobileQuntity('price', quantityM );
// mobileQuntity('subTotal', quantityM)



 })

//minus Button button handler

minusBtn.addEventListener('click', ()=>{

    var quantityMinus=parseFloat(document.getElementById('inputValue').value);
    quantityMinus --;
    document.getElementById('inputValue').value=quantityMinus;
    
    mobileQuntity('price', quantityMinus )
//    silicon_quantity('subTotal', quantityMinus )
    
     })




   //Case silicon handler
   //id= caseMinusBtn  CaseInput  casePlusBtn  siliconPrice

var casePlusBtn =document.getElementById('casePlusBtn');

casePlusBtn.addEventListener('click', ()=>{
    var siliconQuantity=parseFloat(document.getElementById('caseInput').value);
       siliconQuantity ++;
   document.getElementById('caseInput').value=siliconQuantity;

   silicon_quantity('siliconPrice', siliconQuantity);
//    silicon_quantity('subTotal', siliconQuantity);

})



  var caseMinusBtn=document.getElementById('caseMinusBtn'); 
  caseMinusBtn.addEventListener('click', ()=>{

    var caseMinusQuantity=parseFloat(document.getElementById('caseInput').value);
    caseMinusQuantity --;
    document.getElementById('caseInput').value=caseMinusQuantity;
    
    silicon_quantity('siliconPrice', caseMinusQuantity );
    // silicon_quantity('subTotal', caseMinusQuantity)
    
     })


function silicon_quantity(id, siliconQuantity){
    var caseprice=parseFloat(document.getElementById(id).innerText='59');
      document.getElementById(id).innerText=caseprice * siliconQuantity ;
   

    // var subTotalwithsilicon=parseFloat(document.getElementById(id).innerText='1250');
    // document.getElementById(id).innerText=caseprice + subTotalwithsilicon;
}


     
 function mobileQuntity(id, quantityM){
    var price=parseFloat(document.getElementById(id).innerText='1250');
      document.getElementById(id).innerText=price * quantityM ;

         // var subTotal=parseFloat(document.getElementById(id).innerText='1250');
    // document.getElementById(id).innerText=price + subTotal;
    
   
    // var siliconPrice=parseFloat(document.getElementById(id).innerText='60');
    //     document.getElementById(id).innerText=siliconPrice * quantityM 
 }
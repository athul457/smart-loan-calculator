'use strict' ;

const submitButton = document.querySelector(".calculate-btn") ;


submitButton.addEventListener('click', (e)=>{
    e.preventDefault() ;
    const loanAmout = parseFloat(document.querySelector(".loan__amount").value) ;
    const loanInterest = parseFloat(document.querySelector(".loan__interest").value );
    const loanYear = parseFloat(document.querySelector(".loan__years").value );
    const interest = loanAmout * (loanInterest / 100) ;
    const repay = loanAmout + interest ;
    const monthRepay = repay / (loanYear * 12) 
    const monthlyPay = document.querySelector(".monthly__pay") ;
    const totalPayment = document.querySelector(".total__pay") ;
    const totalInterest = document.querySelector(".total__intrest") ;

    if(isNaN(loanAmout) || isNaN(loanInterest) || isNaN(loanYear)){
      window.alert("All fields required") ;
    }
    monthlyPay.textContent = monthRepay.toFixed(2) ;
    totalPayment.textContent = repay.toFixed(2) ;
    totalInterest.textContent = interest.toFixed(2) ;
});




document.getElementById('form').addEventListener('submit',(e)=>{
    document.querySelector('.loading').style.display='block';
    document.querySelector('.results').style.display='none';
    setTimeout(calculate,2000);
    
    e.preventDefault();
});
function calculate(){
    //console.log(e);
    const loanAmount=parseFloat(document.getElementById('loanAmount').value);
    const interest=parseFloat(document.getElementById('interest').value);
    const years=parseFloat(document.getElementById('years').value);
    //console.log(typeof(loanAmount));
    const monthlyPayment=document.getElementById('monthly');
    const totalPayment=document.getElementById('payment');
    const totalInterest=document.getElementById('inter');
    //console.log(monthlyPayment);
    const  calculateInterest=interest/100/12;
    const calculatePayments=years*12;

    const y=Math.pow(1+calculateInterest,calculatePayments);
    const monthly=(loanAmount*y*calculateInterest)/(y-1);
    //console.log(monthly);
    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatePayments).toFixed(2);
        totalInterest.value=((monthly*calculatePayments)-loanAmount).toFixed(2);
        
        document.querySelector('.results').style.display='block';
        document.querySelector('.loading').style.display='none';

    }else{
        showError('Please check your members');
    }
    //e.preventDefault();
}

function showError(n){
    document.querySelector('.loading').style.display='none';
    document.querySelector('.results').style.display='none';
    const errorDiv=document.createElement('div');
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');

    errorDiv.className='alert alert-danger text-center';
    errorDiv.appendChild(document.createTextNode(n));
    card.insertBefore(errorDiv,heading);
    setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}
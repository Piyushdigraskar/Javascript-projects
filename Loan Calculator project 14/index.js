function CalculateLoan(){
    loanAmountValue = document.getElementById('loan-amount').value;

    interestrateValue = document.getElementById('interest-rate').value;

    monthsToPay = document.getElementById('months-to-pay').value;

    interest = (loanAmountValue * (interestrateValue * 0.01)) / monthsToPay;

    monthlyPayment = (loanAmountValue / monthsToPay + interest).toFixed(2);

    document.getElementById('payment').innerHTML = `Monthly Payment: ${monthlyPayment}`
}
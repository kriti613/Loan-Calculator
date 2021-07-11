// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide Results
  document.getElementById('results').style.display = 'none';
  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1000);
  e.preventDefault();
});

function calculateResults(){
  console.log('calculating...');
  // UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    // SHOW RESULTS
    document.getElementById('results').style.display = 'block';
    // HIDE Loading
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your numbers');
  }
}

// Show Error
function showError(error){

  // Hide Results
  document.getElementById('results').style.display = 'none';

  // HIDE LOADING
  document.getElementById('loading').style.display = 'none';

  // Creating a div
  const errorDiv = document.createElement('div');
  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Adding a class
  errorDiv.className = 'aleart alert-danger';

  // Creating text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  setTimeout(checkError, 3000);
}

function checkError(){

}


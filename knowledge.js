var feedback = $('#feedback');

var sectors = [
  'Retirements', 'Security', 'Insurance', 'Real Estate', 'IT products and services'
];

const investmentOptions = ['Treasury bonds', 'peer to peer lending', 'High Interest Savings Acounts', 'Stocks', 'Certificate of Deposit', 'Annuities', 'Treasury Inflation Protected Securities (TIPS)', 'Municipal Bonds', 'Commodity Futures'];

const lengthInYears = {
  'Six months': 6,
  'One year': 12,
  'Five years': 60,
  'Ten years': 120
};

function guessOption(sector, budget, duration, amountLeft) {
  switch (sector) {
    case sectors[0]:
      feedback.html('You selected ' + sectors[0]);
      break;
    case sectors[1]:
      if (budget > 0 && budget < 1000) {
        if (duration <= lengthInYears["Six months"]) {
          feedback.html('Invest in ' + investmentOptions[1]);
        }
      } else {
        feedback.html('No investment options found. Try again!');
      }
      break;
    case sectors[2]:
      feedback.html('you selected ' + sectors[2]);
      break;
    case sectors[3]:
      feedback.html('you selected ' + sectors[3]);
      break;
    case sectors[4]:
      feedback.html('you selected ' + sectors[4]);
      break;
    default:
      feedback.html('Invalid input');
      break;
  }
}

function amountLeft(monthlyEarnings, monthlySpendings) {
  var amountLeft = monthlyEarnings - monthlySpendings;

  if (amountLeft < 1) {
    return feedback.html(`You don't have enough money`);
  } else return amountLeft;
}

$('#predict').click(function () {
  // getting all values from the web
  var selected = $('#option').val(),
    budget = $('#budget').val(),
    duration = $('#length').val(),
    reason = $('#reason').val(),
    incomeSource = $('#incomeSource').val(),
    monthlyEarnings = $('#montlyEarnings').val(),
    monthlySpendings = $('#monthlySpendings').val(),
    investedStatus = $('#investedStatus').val(),
    goals = $('#goals').val(),
    investmentPlan = $('#investmentPlan').val();

  guessOption(selected, budget, duration, amountLeft(monthlyEarnings, monthlySpendings));

});

$('#reset').click(function () {
  location.reload();
});
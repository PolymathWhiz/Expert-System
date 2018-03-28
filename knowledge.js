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
      if ((amountLeft >= 1000 && isMoneyAvaliable(budget, amountLeft))) {
        feedback.html(`You can invest in ${investmentOptions[3]}`);
      } else if ((amountLeft < 1000 && isMoneyAvaliable(budget, amountLeft))) {
        feedback.html(`You can invest in ${investmentOptions[1]}`);
      } else {
        feedback.html(`Your capital is not enough to invest in this sector`);
      }
      break;
    case sectors[1]:
      if ((amountLeft >= 1000 && isMoneyAvaliable(budget, amountLeft))) {
        console.log('Reached here');
      } else if ((amountLeft < 1000 && isMoneyAvaliable(budget, amountLeft))) {
        feedback.html(`You can invest in ${investmentOptions[1]}`);
      } else {
        feedback.html('Your capital is not enough to invest in this sector');
      }
      break;
    case sectors[2]:
      if ((amountLeft >= 1000 && isMoneyAvaliable(budget, amountLeft))) {
        console.log('Reached here');
      } else if ((amountLeft < 1000 && isMoneyAvaliable(budget, amountLeft))) {
        feedback.html(`You can invest in ${investmentOptions[1]}`);
      } else {
        feedback.html('Your capital is not enough to invest in this sector');
      }
      break;
    case sectors[3]:
      if ((amountLeft >= 1000 && isMoneyAvaliable(budget, amountLeft))) {
        console.log('Reached here');
      } else if ((amountLeft < 1000 && isMoneyAvaliable(budget, amountLeft))) {
        feedback.html(`You can invest in ${investmentOptions[1]}`);
      } else {
        feedback.html('Your capital is not enough to invest in this sector');
      }
      break;
    case sectors[4]:
      if ((amountLeft >= 1000 && isMoneyAvaliable(budget, amountLeft))) {
        console.log('Reached here');
      } else if ((amountLeft < 1000 && isMoneyAvaliable(budget, amountLeft))) {
        feedback.html(`You can invest in ${investmentOptions[1]}`);
      } else {
        feedback.html('Your capital is not enough to invest in this sector');
      }
      break;
    default:
      feedback.html('Invalid request');
      break;
  }
}

function amountLeft(monthlyEarnings, monthlySpendings) {
  var amountLeft = monthlyEarnings - monthlySpendings;

  if (amountLeft < 1) {
    feedback.html(`You don't have enough money`);
    return;
  } else return amountLeft;
}

function isMoneyAvaliable(budget, amountLeft) {
  if (amountLeft > budget || amountLeft == budget) {
    return true;
  } else return false;
}

$('#predict').click(function () {
  // getting all values from the web
  var selected = $('#option').val(),
    budget = $('#budget').val(),
    duration = $('#length').val(),
    reason = $('#reason').val(),
    incomeSource = $('#incomeSource').val(),
    monthlyEarnings = $('#monthlyEarnings').val(),
    monthlySpendings = $('#monthlySpendings').val(),
    investedStatus = $('#investedStatus').val(),
    goals = $('#goals').val(),
    investmentPlan = $('#investmentPlan').val();

  if (selected == '' || budget == '' || duration == '' || monthlyEarnings == '' || monthlySpendings == '') {
    $('.error').html('Fill in all fields');
    return;
  }

  var remainingAmount = amountLeft(monthlyEarnings, monthlySpendings);

  guessOption(selected, budget, duration, remainingAmount);
});

$('#reset').click(function () {
  location.reload();
});
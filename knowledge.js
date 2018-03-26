var feedback = $('#feedback');

var sectors = [
  'Retirements', 'Security', 'Insurance', 'Real Estate', 'IT products and services'
];

const investmentOptions = ['Treasury bonds', 'peer to peer lending', 'High Interest Savings Acounts', 'Credit Card Rewards', 'Certificate of Deposit', 'Annuities', 'Treasury Inflation Protected Securities (TIPS)', 'Municipal Bonds'];

const lengthInYears = {
  'Six months': 6,
  'One year': 12,
  'Five years': 60,
  'Ten years': 120
};

function guessOption(sector, budget, duration) {
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

$('#predict').click(function () {
  var selected = $('#option').val(),
    budget = $('#budget').val(),
    duration = $('#length').val();

  guessOption(selected, budget, duration);
});
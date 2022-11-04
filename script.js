const tips = document.querySelectorAll('.tips');
const tipButtons = document.querySelectorAll('[data-value]');
const tipAmount = document.querySelector('#amount');
const total = document.querySelector('#total');
const btnCustom = document.querySelector('.custom');
const btnReset = document.querySelector('.reset');

tipButtons.forEach(btn => {
  btn.addEventListener('click', function (data, people, billValue) {
    btn.classList.add('active');
    data = +btn.dataset.value;
    people = +document.querySelector('.second').value;
    billValue = +document.querySelector('.first').value;

    const tip = (billValue / people) * (data / 100);
    const totalPerperson = tip + billValue / people;

    tipAmount.textContent = `$${tip.toFixed(2)}`;
    total.textContent = `$${totalPerperson.toFixed(2)}`;
  });
});
btnCustom.addEventListener('keyup', function (billValue, people, customTip) {
  customTip = +btnCustom.value;
  people = +document.querySelector('.second').value;
  billValue = +document.querySelector('.first').value;
  const tip = (billValue / people) * (customTip / 100);
  const totalPerperson = tip + billValue / people;

  tipAmount.textContent = `$${tip.toFixed(2)}`;
  total.textContent = `$${totalPerperson.toFixed(2)}`;
});

const clearActives = function (classlist) {
  classlist.forEach(btn => btn.classList.remove('active'));
};
tips.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
      clearActives(tips);
      btn.classList.add('active');
    }
  });
});

btnReset.addEventListener('click', function (e) {
  location.reload();
});

const counterForm = document.getElementById('counter-form');
const submitBtn = document.getElementById('submit-btn');
const userInputContainer = document.getElementById('user-input-container');
const resultContainer = document.getElementById('result-container');

counterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const counterFormData = new FormData(counterForm);

  const childrenAmount = counterFormData.get('childrenAmount');
  const candyAmount = counterFormData.get('candyAmount');

  const totalCandies = calcTotalCandies(childrenAmount, candyAmount);

  renderTemplate(childrenAmount, candyAmount, totalCandies);
});

const renderTemplate = (childrenAmount, candyAmount, total) => {
  const candySingular = 'candy';
  const candyPlural = 'candies';
  if (total === 0 || total === undefined) {
    resultContainer.innerHTML = `
      <p class="total">Looks like nobody's getting any candy today! 
      <span class="text-bold">${candyAmount}</span>  ${candyPlural} isn't enough for 
      <span class="text-bold">${childrenAmount}</span> kids!</p>
  `;
  } else if ((total === 0 || total === undefined) && candyAmount === 1) {
    resultContainer.innerHTML = `
      <p class="total">Looks like nobody's getting any candy today! 
      <span class="text-bold">${candyAmount}</span> ${candySingular} isn't enough for 
      <span class="text-bold">${childrenAmount}</span> kids!</p>
  `;
  } else if (total === 1) {
    resultContainer.innerHTML = `
      <p class="total">🍬 Each kid gets 
        <span class="text-bold">${total}</span> 
        ${candySingular}! 🍬
      </p>
  `;
  } else {
    resultContainer.innerHTML = `
      <p class="total">🍬 Each kid gets 
        <span class="text-bold">${total}</span> 
        ${candyPlural}! 🍬
      </p>
  `;
  }
  setTimeout(() => {
    resultContainer.innerHTML = '';
    counterForm.reset();
  }, 3000);
};

const calcTotalCandies = (children, candy) => {
  const remaining = candy % children;
  if (remaining === 0) {
    return candy / children;
  } else {
    return (candy - remaining) / children;
  }
};

const clearContent = () => {
  userInputContainer;
};

const userInput = document.getElementById('user-input');
const addBtn = document.getElementById('add-btn');
const generatedResult = document.getElementById('generated-result');

addBtn.addEventListener('click', () => {
  const userWishlist = [];
  if (userInput.value.length > 0) {
    userWishlist.push(userInput.value);
  }
  renderTemplate(userWishlist);
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const userWishlist = [];
    if (userInput.value.length > 0) {
      userWishlist.push(userInput.value);
    }
    renderTemplate(userWishlist);
  }
});

const renderTemplate = (arr) => {
  const list = document.createElement('ul');

  if (arr.length > 0) {
    for (const item of arr) {
      const liEl = document.createElement('li');
      liEl.textContent = `❄️ ${item}`;
      list.append(liEl);
    }
  }

  if (list.childElementCount > 0) {
    userInput.value = '';
    generatedResult.append(list);
  }
};

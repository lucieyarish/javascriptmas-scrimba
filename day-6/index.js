const userInput = document.getElementById('user-input');
const generateBtn = document.getElementById('generate-btn');
const generatedResult = document.getElementById('generated-result');

generateBtn.addEventListener('click', () => {
  const inputArr = userInput.value.split(',');
  const userInputArr = [...inputArr];
  const secretSantas = generateSecretSantaPairs(userInputArr);
  renderTemplate(secretSantas);
});

const renderTemplate = (obj) => {
  const list = document.createElement('ul');

  console.log(Object.keys(obj).length);

  if (Object.keys(obj).length === 1) {
    userInput.value = '';
    generatedResult.innerHTML = '';
    generatedResult.innerHTML += `
        <h2>Please add more people into your list!</h2>
    `;
  } else {
    for (const [key, value] of Object.entries(obj)) {
      const liEl = document.createElement('li');
      liEl.textContent = `🎅🏽 ${key}: ${value}`;
      list.append(liEl);
    }

    console.log(list);

    if (list.childElementCount > 0) {
      userInput.value = '';
      generatedResult.innerHTML = '';

      const html = `
              <h2>Your Secret Santas:</h2>
            `;

      generatedResult.innerHTML += html;
      generatedResult.append(list);
    }
  }
};

const shuffleArr = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const assignValues = (obj, arr) => {
  const shuffledArr = [...arr];
  shuffleArr(shuffledArr);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newVal = shuffledArr.find(
        (val) => val !== key && !Object.values(obj).includes(val)
      );
      if (newVal) {
        obj[key] = newVal;
      }
    }
  }
};

const generateSecretSantaPairs = (arr) => {
  const shuffledInputArr = shuffleArr(arr);
  console.log(shuffledInputArr);

  const secretSantas = shuffledInputArr.reduce((key, val) => {
    return { ...key, [val]: '' };
  }, {});

  assignValues(secretSantas, shuffledInputArr);

  return secretSantas;
};

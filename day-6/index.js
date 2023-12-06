const userInput = document.getElementById('user-input');
const generateBtn = document.getElementById('generate-btn');

// const people = ['Alice', 'Bob', 'Carly', 'Dan', 'Ed', 'Ferdinand', 'Ginny'];
let userInputArr;

generateBtn.addEventListener('click', () => {
  const inputArr = userInput.value.split(',');
  userInputArr = [...inputArr];
});

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

  const secretSantas = shuffledInputArr.reduce((key, val) => {
    return { ...key, [val]: '' };
  }, {});

  assignValues(secretSantas, shuffledInputArr);

  return secretSantas;
};

console.log(generateSecretSantaPairs(userInput));

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */

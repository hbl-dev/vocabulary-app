let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
let randomEnglishWord;

function addVocabulary() {
  dictionary[englishVocabulary.value] = germanVocabulary.value;

  englishVocabulary.value = '';
  germanVocabulary.value = '';

  localStorage.setItem('dictionary', JSON.stringify(dictionary));
  render();
}

function render() {
  vocabularyList.innerHTML = '';
  for (let key in dictionary) {
    vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
  }
}

function nextVocabulary() {
  let objectKeys = Object.keys(dictionary);
  randomEnglishWord = objectKeys[Math.floor(Math.random() * objectKeys.length)];
  word.innerHTML = `${dictionary[randomEnglishWord]}`;
}

function compare() {
  if (englishVocabulary.value === randomEnglishWord) {
    result.innerHTML = `Correct!`;
  } else {
    result.innerHTML = `False!`;
  }
  englishVocabulary.value = '';
  nextVocabulary();
}

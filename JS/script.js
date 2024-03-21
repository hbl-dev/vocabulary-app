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
    vocabularyList.innerHTML += `<li>English: <strong>${key}</strong> – German: <strong>${dictionary[key]}</strong></li>`;
  }
}

function nextVocabulary() {
  let objectKeys = Object.keys(dictionary);
  randomEnglishWord = objectKeys[Math.floor(Math.random() * objectKeys.length)];
  if (dictionary[randomEnglishWord] === undefined) {
    word.innerHTML = `No words yet – go add some.`;
  } else {
    word.innerHTML = `${dictionary[randomEnglishWord]}`;
  }
}

function compare() {
  if (englishVocabulary.value === randomEnglishWord) {
    result.innerHTML = `<strong class="text-success">Correct!</strong><br> Try the next one.`;
  } else {
    result.innerHTML = `<strong class="text-danger">False!</strong><br> Try the next one.`;
  }
  englishVocabulary.value = '';
  nextVocabulary();
}

function deleteList() {
  localStorage.removeItem('dictionary');
  vocabularyList.innerHTML = '';
}

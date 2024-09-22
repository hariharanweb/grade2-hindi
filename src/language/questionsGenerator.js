const hindWords = require("./hindWords");

const shuffle = (inputArr) => {
  let shuffled = inputArr.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const getRandomWords = (arr, n) =>{
  return shuffle(arr).slice(0, n);
}
const generateEnglishToHindiQuestions = (numbers) => {
  const randomWords = getRandomWords(hindWords, numbers + 1);
  const questionAnswers = randomWords.map((randomWord) => {
    const randomWordsForAnswers = getRandomWords(hindWords, numbers);
    const answers = shuffle(randomWordsForAnswers.filter((hindiWord) => {
      return hindiWord.word !== randomWord.word
    }).map((hindiWord) => hindiWord.word).slice(0, 3).concat([randomWord.word]))

    return {
      question: `What is '${randomWord.meanings[0]}' in Hindi?`,
      answers,
      correctAnswer: randomWord.word
    }
  })
  return questionAnswers;
}

const generateHindiToEnglishQuestions = (numbers) => {
  const randomWords = getRandomWords(hindWords, numbers + 1);
  const questionAnswers = randomWords.map((randomWord) => {
    const randomWordsForAnswers = getRandomWords(hindWords, numbers);
    const answers = shuffle(randomWordsForAnswers.filter((hindiWord) => {
      return hindiWord.meanings[0] !== randomWord.meanings[0]
    }).map((hindiWord) => hindiWord.meanings[0]).slice(0, 3).concat([randomWord.meanings[0]]))

    return {
      question: `What does '${randomWord.word}' mean?`,
      answers,
      correctAnswer: randomWord.meanings[0]
    }
  })
  return questionAnswers;
}

const generateQuestionAnswers = (numbers) => {
  const englishToHindi = generateEnglishToHindiQuestions(numbers/2+1);
  const hindiToEnglish = generateHindiToEnglishQuestions(numbers/2+1);
  return shuffle(englishToHindi.concat(hindiToEnglish).slice(0, numbers));
}


// const a = generateHindiToEnglishQuestions(5);
// console.log(a)
module.exports = generateQuestionAnswers

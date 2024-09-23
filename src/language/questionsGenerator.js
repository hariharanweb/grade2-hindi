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
    const randomWordsForAnswers = getRandomWords(hindWords, 5);
    const answers = shuffle(randomWordsForAnswers.filter((hindiWord) => {
      return hindiWord.word !== randomWord.word
    }).map((hindiWord) => hindiWord.word).slice(0, 3).concat([randomWord.word]))

    return {
      question: `What is '${randomWord.meaning}' in Hindi?`,
      answers,
      correctAnswer: randomWord.word
    }
  })
  return questionAnswers;
}

const generateHindiToEnglishQuestions = (numbers) => {
  const randomWords = getRandomWords(hindWords, numbers + 1);
  const questionAnswers = randomWords.map((randomWord) => {
    const randomWordsForAnswers = getRandomWords(hindWords, 5);
    const answers = shuffle(randomWordsForAnswers.filter((hindiWord) => {
      return hindiWord.meaning !== randomWord.meaning
    }).map((hindiWord) => hindiWord.meaning).slice(0, 3).concat([randomWord.meaning]))

    return {
      question: `What does '${randomWord.word}' mean?`,
      answers,
      correctAnswer: randomWord.meaning
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

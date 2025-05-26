const textareaEl = document.querySelector('.textarea');
const charNumberEl = document.querySelector('.stat__number--character');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

textareaEl.addEventListener('input', (e) => {
  // determine the new number of characters
  const numberOfChars = textareaEl.value.length;
  const twitterCharLeft = 280 - numberOfChars;
  const facebookCharLeft = 2200 - numberOfChars;

  const numberOfWords = textareaEl.value;
  const words = numberOfWords.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // add visual inidicator if limit is exceeded
  if (twitterCharLeft < 0) {
    twitterNumberEl.classList.add('stat__number--limit');
  } else {
    twitterNumberEl.classList.remove('stat__number--limit');
  }
  if (facebookCharLeft < 0) {
    facebookNumberEl.classList.add('stat__number--limit');
  } else {
    facebookNumberEl.classList.remove('stat__number--limit');
  }

  // set new number
  charNumberEl.textContent = numberOfChars;
  twitterNumberEl.textContent = twitterCharLeft;
  facebookNumberEl.textContent = facebookCharLeft;
  wordsNumberEl.textContent = wordCount;
});
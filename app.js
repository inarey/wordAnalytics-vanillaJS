const textareaEl = document.querySelector('.textarea');

textareaEl.addEventListener('input', (e) => {
  const text = e.target.value;
  const words = text.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  const charCount = text.length;

  document.querySelector('.stat__number--words').textContent = `Word Count: ${wordCount}`;
  document.querySelector('.stat__number--character').textContent = `Character Count: ${charCount}`;
})
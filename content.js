const style = document.createElement('style');
style.innerHTML = `
  .word-highlight-one {
    font-weight: bold;
  }
  .word-highlight-two {
    font-weight: bold;
  }
`;
document.head.appendChild(style);

const words = document.body.innerText.split(' ');

words.forEach((word) => {
  const firstLetter = word.charAt(0);
  const secondLetter = word.length > 1 ? word.charAt(1) : '';
  const restOfWord = word.slice(2);
  const highlightedWord = `<span class="word-highlight-one">${firstLetter}</span><span class="word-highlight-two">${secondLetter}</span>${restOfWord}`;
  document.body.innerHTML = document.body.innerHTML.replace(word, highlightedWord);
});

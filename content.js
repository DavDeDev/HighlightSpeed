let isHighlighted = false;

chrome.commands.onCommand.addListener(function(command) {
  if (command === 'toggle-highlight') {
    if (isHighlighted) {
      removeHighlighting();
    } else {
      highlightWords();
    }
    isHighlighted = !isHighlighted;
  }
});

function highlightWords() {
  const words = document.body.innerText.split(' ');
  words.forEach((word) => {
    const firstLetter = word.charAt(0);
    const secondLetter = word.length > 1 ? word.charAt(1) : '';
    const restOfWord = word.slice(2);
    const highlightedWord = `<span class="word-highlight-one">${firstLetter}</span><span class="word-highlight-two">${secondLetter}</span>${restOfWord}`;
    document.body.innerHTML = document.body.innerHTML.replace(word, highlightedWord);
  });
}

function removeHighlighting() {
  const highlightedWords = document.querySelectorAll('.word-highlight-one, .word-highlight-two');
  highlightedWords.forEach((word) => {
    const unhighlightedWord = word.textContent;
    word.outerHTML = unhighlightedWord;
  });
}

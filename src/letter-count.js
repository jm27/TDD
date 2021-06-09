export const getLetterCount = (string) => {
  const letters = string.split("");

  let letterCount = {};

  letters.forEach((letter) => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] = letterCount[letter] + 1;
    }
  });
  return letterCount;
};

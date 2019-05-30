function countLetters(string) {
  var output = {};
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {

    } else if (output[string[i]]) {
      output[string[i]].push(i);

    } else {
      output[string[i]] = [i];
    }

  }

  return output
}
console.log(countLetters("lighthouse in the house"));
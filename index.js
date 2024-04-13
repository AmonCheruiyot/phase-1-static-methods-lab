class Formatter {
  // Static method to capitalize the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Static method to remove all non-alphanumeric characters except dashes, single quotes, and spaces
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Static method to capitalize all words in a sentence except specified words and always capitalize the first word
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    return words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    }).join(' ');
  }
}

// Example usage
console.log(Formatter.capitalize('hello')); // Output: Hello
console.log(Formatter.sanitize('hello!@#$')); // Output: hello
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); // Output: The Quick Brown Fox Jumps over the Lazy Dog

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

  //********************************************************


  Solution :

function translatePigLatin(str, charPos = 0) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(str[0])) {
    return str + (charPos === 0 ? 'way' : 'ay');
  } else if (charPos === str.length) {
    return str + 'ay';
  } else {
    return translatePigLatin(str.slice(1) + str[0], charPos + 1);
  }
}

translatePigLatin("consonant");

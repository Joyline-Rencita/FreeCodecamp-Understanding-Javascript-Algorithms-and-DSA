One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
  //*************************************

  Solution :

function rot13(str) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let netIndex;
  let character;
  let characterIndex;
  let output = "";

  for (let i = 0; i < str.length; i++){
    character = str[i];

    if (!/[A-Z]/.test(character)){
      output += character;
      continue;
    }

    characterIndex = alphabets.indexOf(character);

    if (characterIndex < 13){
      netIndex = characterIndex + 13;
    }

    else{
      netIndex = characterIndex - 13;
    }

    output += alphabets[netIndex];
  }

  return output;
}

rot13("SERR PBQR PNZC");

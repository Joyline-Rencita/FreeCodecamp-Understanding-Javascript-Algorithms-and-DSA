function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));


//**********************************************************


Solution :

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));


>> this-is-spinal-tap

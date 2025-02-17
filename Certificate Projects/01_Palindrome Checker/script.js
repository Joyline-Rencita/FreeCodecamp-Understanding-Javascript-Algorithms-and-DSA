function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

document.getElementById('check-btn').addEventListener('click', function() {
    let input = document.getElementById('text-input').value;
    let resultElement = document.getElementById('result');

    if (!input) {
        alert('Please input a value');
        return;
    }

    let isPalin = isPalindrome(input);
    resultElement.textContent = `${input} is ${isPalin ? '' : 'not '}a palindrome.`;
});

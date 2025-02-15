Solution :

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palindrome Checker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        input {
            padding: 10px;
            width: 300px;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        #result {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Palindrome Checker</h1>
    <input type="text" id="text-input" placeholder="Enter text...">
    <button id="check-btn">Check</button>
    <p id="result"></p>

    <script>
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
    </script>
</body>
</html>

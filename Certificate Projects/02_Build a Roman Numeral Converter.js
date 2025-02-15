<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roman Numeral Converter</title>
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
        #output {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Roman Numeral Converter</h1>
    <input type="number" id="number" placeholder="Enter a number...">
    <button id="convert-btn">Convert</button>
    <p id="output"></p>

    <script>
        function convertToRoman(num) {
            if (num < 1) return "Please enter a number greater than or equal to 1";
            if (num >= 4000) return "Please enter a number less than or equal to 3999";

            const romanNumerals = [
                ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
                ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
                ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
            ];
            
            let result = "";
            for (let [letter, value] of romanNumerals) {
                while (num >= value) {
                    result += letter;
                    num -= value;
                }
            }
            return result;
        }

        document.getElementById('convert-btn').addEventListener('click', function() {
            let input = document.getElementById('number').value;
            let outputElement = document.getElementById('output');
            
            if (!input) {
                outputElement.textContent = "Please enter a valid number";
                return;
            }
            
            let num = parseInt(input);
            outputElement.textContent = convertToRoman(num);
        });
    </script>
</body>
</html>

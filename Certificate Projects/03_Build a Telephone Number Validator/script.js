document.getElementById("check-btn").addEventListener("click", validateNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);

function validateNumber() {
    const userInput = document.getElementById("user-input").value.trim();
    const resultDiv = document.getElementById("results-div");

    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    const validPatterns = [
        /^1\s\d{3}-\d{3}-\d{4}$/,         // 1 555-555-5555
        /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,    // 1 (555) 555-5555
        /^1\(\d{3}\)\d{3}-\d{4}$/,        // 1(555)555-5555
        /^1\s\d{3}\s\d{3}\s\d{4}$/,       // 1 555 555 5555
        /^\d{10}$/,                        // 5555555555
        /^\d{3}-\d{3}-\d{4}$/,            // 555-555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/           // (555)555-5555
    ];

    const isValid = validPatterns.some(pattern => pattern.test(userInput));

    if (isValid) {
        resultDiv.textContent = `Valid US number: ${userInput}`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `Invalid US number: ${userInput}`;
        resultDiv.style.color = "red";
    }
}

function clearResults() {
    document.getElementById("results-div").textContent = "";
    document.getElementById("user-input").value = "";
}

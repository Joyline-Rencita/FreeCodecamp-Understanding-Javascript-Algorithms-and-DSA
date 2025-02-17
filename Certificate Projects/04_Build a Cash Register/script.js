let price = 19.5;
let cid = [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
];

const currencyUnits = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
};

document.getElementById("purchase-btn").addEventListener("click", function () {
    let cash = parseFloat(document.getElementById("cash").value);
    let changeDue = cash - price;
    let totalCID = cid.reduce((sum, item) => sum + item[1], 0).toFixed(2);

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (cash === price) {
        document.getElementById("change-due").innerText = "No change due - customer paid with exact cash";
        return;
    }

    if (parseFloat(totalCID) < changeDue) {
        document.getElementById("change-due").innerText = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    // Case where total cash in drawer equals change due
    if (parseFloat(totalCID) === changeDue) {
        let closedMessage = "Status: CLOSED " + cid
            .filter(([_, amount]) => amount > 0) // Remove empty denominations
            .reverse() // Ensure highest to lowest order
            .map(([name, amount]) => `${name}: $${amount.toFixed(2)}`)
            .join(" ");
            
        document.getElementById("change-due").innerText = closedMessage;
        return;
    }

    // Calculate actual change if we have enough in the drawer
    let changeArray = [];
    let remainingChange = changeDue;

    for (let i = cid.length - 1; i >= 0; i--) {
        let coinName = cid[i][0];
        let coinValue = currencyUnits[coinName];
        let coinAmount = cid[i][1];

        let coinsToGive = 0;
        while (remainingChange >= coinValue && coinAmount > 0) {
            remainingChange -= coinValue;
            remainingChange = Math.round(remainingChange * 100) / 100; // Fix floating point issues
            coinAmount -= coinValue;
            coinsToGive += coinValue;
        }

        if (coinsToGive > 0) {
            changeArray.push([coinName, coinsToGive]);
        }
    }

    if (remainingChange > 0) {
        document.getElementById("change-due").innerText = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    document.getElementById("change-due").innerText = `Status: OPEN ${changeArray.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join(" ")}`;
});

//For get input field
function getInputField(expense) {
    const input = document.getElementById(expense + '-input');
    const inputField = parseFloat(input.value);

    return inputField;
}

//For get amount field
function getAmountField(amountId) {
    const amountField = document.getElementById(amountId);

    return amountField;
}

//Event handler for calculate balance
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeAmount = getInputField('income');
    const foodAmount = getInputField('food');
    const rentAmount = getInputField('rent');
    const clothAmount = getInputField('cloth');
    const othersAmount = getInputField('others');

    if (incomeAmount >= 0 && foodAmount >= 0 && rentAmount >= 0 && clothAmount >= 0 && othersAmount >= 0) {
        //Add all expenses   
        const totalExpense = getAmountField('total-expense');
        totalExpense.innerText = foodAmount + rentAmount + clothAmount + othersAmount;

        if (totalExpense.innerText <= incomeAmount) {
            //Get current balance
            const balance = getAmountField('balance');
            balance.innerText = incomeAmount - totalExpense.innerText;
        }
        else {
            const balance = getAmountField('balance');
            balance.innerText = 'You are in loaned!';
            balance.style.color = 'red';
        }
    }
    else {
        alert('Please input positive number!!');
    }
});

//Event handler for saving balance
document.getElementById('save-button').addEventListener('click', function () {
    const balance = getAmountField('balance').innerText;
    const saveInput = getInputField('save');
    const incomeInput = getInputField('income');

    if (saveInput >= 0 && incomeInput >= 0) {
        //Get saving amount
        const saving = getAmountField('saving-amount');
        const savingAmount = incomeInput * (saveInput / 100);

        if (savingAmount <= balance) {
            //set saving amount
            saving.innerText = savingAmount;

            //Get remaining balance
            const remainingBalance = getAmountField('remaining-balance');
            remainingBalance.innerText = parseFloat(balance) - savingAmount;
        }
        else {
            alert('Insufficient Balance!');
        }
    }
});
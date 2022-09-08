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

    //Add all expenses   
    const totalExpense = getAmountField('total-expense');
    totalExpense.innerText = foodAmount + rentAmount + clothAmount + othersAmount;

    //Get current balance
    const balance = getAmountField('balance');
    balance.innerText = incomeAmount - totalExpense.innerText;
});

//Event handler for saving balance
document.getElementById('save-button').addEventListener('click', function () {
    const balance = getAmountField('balance');
    const saveInput = getInputField('save');

    //Get saving amount
    const savingAmount = getAmountField('saving-amount');
    savingAmount.innerText = parseFloat(balance.innerText) * (saveInput / 100);

    //Get remaining balance
    const remainingBalance = getAmountField('remaining-balance');
    remainingBalance.innerText = parseFloat(balance.innerText) - savingAmount.innerText;

});
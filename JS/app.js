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
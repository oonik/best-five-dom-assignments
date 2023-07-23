document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getFieldValueById('player-cost');
    if (isNaN(perPlayerCost)) {
        alert('Please provide valid number input.')
        return;
    }
    if (perPlayerCost < 0) {
        alert('Please provide positive number input.')
        return;
    }
    const totalPlayer = getTextElementValueById('total-added-player');
    const totalCost = perPlayerCost * totalPlayer;
    setTextElementValue('player-expenses', totalCost);
})
/// calculate total expenses and set totat expenses......>>>>//
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = getTextElementValueById('player-expenses')
    const managerCost = getFieldValueById('manager-cost');
    const coachCost = getFieldValueById('coach-cost');
    if (isNaN(managerCost) || isNaN(coachCost)) {
        alert('Please provide valid number input.')
        return;
    }
    if ((managerCost < 0) || (coachCost < 0)) {
        alert('Please provide positive number input.')
        return;
    }
    const totalExpenses = playerExpenses + managerCost + coachCost;
    setTextElementValue('final-total', totalExpenses)
})
const playerArray = [];

function display(playerList) {
    if (playerList.length > 5) {
        alert('you selecet Max five Players')
        return;
    }
    const addedPlayerList = document.getElementById('player-name');
    addedPlayerList.innerHTML = '';
    for (let i = 0; i < playerList.length; i++) {
        const name = playerList[i];
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>`;
        addedPlayerList.appendChild(tr);
    }
}

function addToList(element) {
    const playerName = element.parentNode.parentNode.children[1].innerText;
    playerArray.push(playerName);
    if (playerArray.length > 5) {
        alert('you selecet Max five Players')
        button.disabled = false;
        return;
    }
    document.getElementById('total-added-player').innerText = playerArray.length;
    display(playerArray);
}

//...<<<<common function for get Input Field value Using Id ......>>>//

function getFieldValueById(InputId) {
    const fieldValue = parseInt(document.getElementById(InputId).value);
    return fieldValue;
}

//...<<<<common function for get Text Field  value Using Id ......>>>//

function getTextElementValueById(InputId) {
    const elementTextValue = parseInt(document.getElementById(InputId).innerText);
    return elementTextValue;
}

//...<<<<common function for Set Text Field  value Using Id ......>>>// 

function setTextElementValue(inputid, result) {
    const elementValue = document.getElementById(inputid);
    elementValue.innerText = result;
}
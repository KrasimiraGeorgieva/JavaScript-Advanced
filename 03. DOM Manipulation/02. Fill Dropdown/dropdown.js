function addItem() {
    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;
    let option = document.createElement('option');
    option.textContent = itemText;
    option.value = itemValue;

    let selectItem = document.getElementById('menu');
    selectItem.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}

addItem();
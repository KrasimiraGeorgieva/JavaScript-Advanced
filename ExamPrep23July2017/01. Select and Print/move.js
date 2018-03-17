function move(command) {
    let aTownsList = $('#available-towns');
    let sTownsList = $('#selected-towns');
    let outputDiv = $('#output');

    if(command === 'right'){
        let selectedItem = aTownsList.find(':selected');
        sTownsList.append(selectedItem);
    }else if (command === 'left'){
        aTownsList.append(sTownsList.find(':selected'));
    }else{
        let allTowns = sTownsList.find('option')
            .toArray()
            .map(el => $(el).text())
            .join('; ');
        outputDiv.append(allTowns);
    }
}
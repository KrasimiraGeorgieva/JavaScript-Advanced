function create(sentences) {
    let contentDiv = document.getElementById('content');
    for (let sentence of sentences) {
        let newDivEl = document.createElement('div');
        let newParagrafEl = document.createElement('p');

        newParagrafEl.textContent = sentence;
        newParagrafEl.style.display = 'none';
        newDivEl.appendChild(newParagrafEl);
        newDivEl.addEventListener('click', function(){
            newParagrafEl.style.display = 'inline-block'
        });
        contentDiv.appendChild(newDivEl);
    }
}
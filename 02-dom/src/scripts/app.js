import functions from './functions.js';

// Event Listeners for main page.
// ----------
testDiv.addEventListener('click', (args)=> {
    console.log(args);
});

showButton.addEventListener('click', () => {
    document.querySelectorAll('#orderedList li').forEach((e) => {
        console.log(e);
    })
});

addButton.addEventListener('click', () => {
    let ol = document.getElementById('orderedList');
    let li = document.createElement('li')
    ol.appendChild(li);
})
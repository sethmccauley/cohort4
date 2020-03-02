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
    functions.appendItem("orderedList");
});

addStartButton.addEventListener('click', () => {
    functions.addBefore('orderedList');
});

deleteButton.addEventListener('click', () => {
    functions.deleteLast('orderedList');
});
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
    li.textContent = "Item " + functions.countChildren(ol);
    ol.appendChild(li);
});

addStartButton.addEventListener('click', () => {
    let ol = document.getElementById('orderedList');
    let li = document.createElement('li');
    ol.insertBefore(li, ol.getElementsByTagName('li')[0]);
});

deleteButton.addEventListener('click', () => {
    let ol = document.getElementById('orderedList');
    let lis = ol.getElementsByTagName('li');
    ol.removeChild(lis[lis.length -1]);
});
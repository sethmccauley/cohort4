import CardManager from './page2.js';

// EventListener
window.addEventListener('DOMContentLoaded', (e) => {
    const addElement = document.getElementById('addCard');
    new CardManager(addElement);
});
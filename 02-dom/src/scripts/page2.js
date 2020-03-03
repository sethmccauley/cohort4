export default class CardManager{
    constructor(addElement){
        this.id = 1;
        addElement.addEventListener('click', this.addCard.bind(this));
    }

    addCard(e) {
        const card = this.createCard(this.id++);
        e.target.parentNode.insertAdjacentElement('afterend', card);
    }

    addBefore(e) {
        const card = this.createCard(this.id++);
        e.target.parentNode.insertAdjacentElement('beforebegin', card);
    }

    addAfter(e) {
        const card = this.createCard(this.id++);
        e.target.parentNode.insertAdjacentElement('afterend', card);
    }

    createCard(id) {
        // Create Div
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class','controlCard');

        // Create Title
        const span = document.createElement('span');
        span.innerHTML = `Card ${id}`;
        const br = document.createElement('br');

        newDiv.insertAdjacentElement( 'beforeend', span );
        newDiv.insertAdjacentElement( 'beforeend', br );

        // Generate Buttons
        const addBeforeBtn = document.createElement('button');
        addBeforeBtn.addEventListener('click', this.addBefore.bind(this));
        addBeforeBtn.setAttribute('class', 'w3-button w3-tiny w3-green');
        addBeforeBtn.innerHTML = "Add Before";

        newDiv.insertAdjacentElement('beforeend', addBeforeBtn);

        const addAfterBtn = document.createElement('button');
        addAfterBtn.setAttribute('class', 'w3-button w3-tiny w3-green');
        addAfterBtn.innerHTML = "Add After";
        addAfterBtn.addEventListener('click', this.addAfter.bind(this));

        newDiv.insertAdjacentElement('beforeend', addAfterBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'w3-button w3-tiny w3-green');
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener('click', this.deleteElement.bind(this));

        newDiv.insertAdjacentElement('beforeend', deleteBtn);

        return newDiv
    }

    deleteElement(e){
        e.target.parentNode.remove()
    }

};
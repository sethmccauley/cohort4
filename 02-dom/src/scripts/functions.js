const functions = {

    appendItem: (listId, value) => {
        let ol = document.getElementById(listId);
        let li = document.createElement('li');
        li.textContent = value;
        if (ol == null) return undefined;
        ol.appendChild(li);
        return true;
    },

    addBefore: (listId, value) => {
        let ol = document.getElementById(listId);
        let li = document.createElement('li');
        li.textContent = value;
        if (ol == null) return undefined;
        ol.insertBefore(li, ol.getElementsByTagName('li')[0]);
        return true;
    },

    deleteLast: (listId) => {
        let ol = document.getElementById(listId);
        let lis = ol.getElementsByTagName('li');
        if (ol == null) return undefined;
        ol.removeChild(lis[lis.length -1]);
        return true;
    },

    // createControlCard: () => {
    //     let localDiv = document.getElementById('controlPanel');
    //     let controlId = localDiv.getElementsByTagName('div').length + 1;
    //     // Generate Div
    //     let newDiv = document.createElement('div');
    //     newDiv.setAttribute('class','controlCard');

    //     // Generate Buttons
    //     let addBeforeBtn = document.createElement('button');
    //     addBeforeBtn.setAttribute('class', 'w3-button w3-tiny w3-green');
    //     addBeforeBtn.innerHTML = "Add Before";

    //     let addAfterBtn = document.createElement('button');
    //     addBeforeBtn.setAttribute('class', 'w3-button w3-tiny w3-green');
    //     addAfterBtn.innerHTML = "Add After";

    //     let deleteBtn = document.createElement('button');
    //     deleteBtn.setAttribute('class', 'w3-button w3-tiny w3-green')
    //     deleteBtn.innerHTML = "Delete";
    //     deleteBtn.setAttribute('id', `delete${controlId}`);

    //     // Fill Div

    //     newDiv.innerHTML += `Card <span>${controlId}</span><br>`;
    //     newDiv.innerHTML += deleteBtn.outerHTML;

    //     localDiv.appendChild(newDiv);
    //     return localDiv;
    // },

}

export default functions
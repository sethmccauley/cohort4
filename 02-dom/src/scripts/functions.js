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
}

export default functions
const functions = {

    countChildren: (element) => {
        let target = document.getElementById(element.id);
        return target.children.length + 1;
    };

}

export default functions
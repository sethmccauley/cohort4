
const functions = {
    getFirstName: (data) => {
        return data[0].name;
    },

    getAllFirstNames: (data) => {
        let returnArray = data.map(value => value.name);
        return returnArray;
    }
}

export default functions;
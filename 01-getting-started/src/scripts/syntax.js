// -----
// define attributes / variables
// number
// string
// boolean
// array
// dictionary / objects
// undefined
// -----
const syntaxes = {

    isNumber: (num) => {
        if (typeof(num) === 'number') return true;
        return false
    },

    isString: (string) => {
        if (typeof(string) === 'string') return true;
        return false;
    },

    isBoolean: (bool) => {
        if (typeof(bool) === 'boolean') return true;
        return false;
    },

    isArray: (array) => {
        if (array instanceof Array) return true;
        return false;
    },

    isDictionary: (dict) => {
        if (dict.constructor == Object) return true;
        return false;
    },

    // !!!For Fun!!! Method to detect presence of property
    hasProperty: (key, dict) => {
        let propArray = Object.keys(dict);
        if (propArray.includes(key)) return true;
        return false;
    },

    isUndefined: (value) => {
        if (typeof value == 'undefined') return true;
        return false
    },

// -----
// sample if / else
// -----

    // In Poker, when should I hit or stand?
    hitOrStand: (value) => {
        if(value < 17){
            return "Hit";
        } else if (value < 22 ){
            return "Stand"
        } else {
            return "Play Again?";
        }
    },

// -----
// functions
// parameters
// returns
// -----

    stringTogether: (...strings) => {
        return strings.join("");
    },

    // On a scan-tron, if you don't know the answer, it's always C.
    getDefaultAnswer: (answer = "C") => {
        return answer;
    },

// -----
// arrays
// add to the front
// add to the end
// update values
// -----

    insertAtStart(value, array) {
        let returnArray = [value];
        array.forEach(element => {
            returnArray.push(element);
        });
        return returnArray;
    },

    addToEnd(value, array) {
        let returnArray = array.map(el => el);
        returnArray.push(value);
        return returnArray;
    },

// -----
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// -----

// ----
// Objects / Dictionaries
// declare object
// lookup key to retrieve value
// -----
}
export default syntaxes
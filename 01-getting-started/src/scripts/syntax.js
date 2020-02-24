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

    
    hasProperty: (key, dict) => {
        let propArray = Object.keys(dict);
        if (propArray.includes(key)) return true;
        return false;
    }
}

// -----
// sample if / else
// -----
// functions
// parameters
// returns
// -----
// arrays
// add to the front
// add to the end
// update values
// -----
// loops 
// for
// for/in
// while
// do while
// forEach (with array and function)
// ----
// Objects / Dictionaries
// declare object
// lookup key to retrieve value

export default syntaxes
class Structure{
    constructor(){
        this.collection = []
    }
    push(object){
        this.collection.push(object);
        return this.collection.length
    }
}

// Stack Implementation
export class Stack extends Structure{
    constructor(){
        super();
    }
    pop(){
        const returnedVal = this.collection.pop();
        return returnedVal
    }
}

// Queue Implementation
export class Queue extends Structure{
    constructor(){
        super();
    }
    shift(){
        const returnedVal = this.collection.shift();
        return returnedVal
    }
}
class Node {
    constructor(subject, amount){
        this.forwardNode = null;
        this.subject = subject;
        if(!isNaN(amount)){
            this.amount = amount;
        } else {
            throw new TypeError()
        }
    }

    show(){
        return `Subject: ${this.subject}; Amount: ${this.amount}`
    }
}

export default class LinkedList {
    constructor(){
        this.currentNode = null;
        this.headNode = null;
        this._length = 0
    }

    first(){
        this.currentNode = this.headNode
        return this.currentNode
    }
    last(){
        let localNode = this.currentNode
        while(localNode.forwardNode){
            localNode = localNode.forwardNode
        }
        this.currentNode = localNode
        return this.currentNode
    }
    next(){
        let localNode = this.currentNode
        if(localNode.forwardNode !== null){
            localNode = localNode.forwardNode
        }
        this.currentNode = localNode
        return this.currentNode
    }
    previous(){
        let localNode = this.headNode
        let prevNode = null
        while(localNode !== this.currentNode){
            prevNode = localNode
            localNode = localNode.forwardNode
        }
        this.currentNode = prevNode
        return this.currentNode
    }
    insert(subject, amount){
        let localNode = this.headNode;
        const newNode = new Node(subject, amount)

        if(!localNode){
            this.headNode = newNode
            this.currentNode = newNode
            this._length++
            return newNode
        }

        while(localNode.forwardNode){
            localNode = localNode.forwardNode
        }

        localNode.forwardNode = newNode
        this.currentNode = newNode
        this._length++

        return this.currentNode
    }
    delete(){
        let localNode = this.headNode
        let currentNode = this.currentNode
        let length = this._length
        let prevNode = null
        
        if(length = 0) {
            throw new Error('Unable to remove, list is empty.')
        }

        if(length = 1) {
            localNode = null
            this._length--
            return this.headNode
        }

        if(length > 1) {
            while(localNode !== currentNode){
                prevNode = localNode
                localNode = localNode.forwardNode
            }
            prevNode.forwardNode = localNode.forwardNode
            currentNode = null
            this._length--
            this.currentNode = prevNode
            return this.currentNode
        }
    }
    total(){
        let localNode = this.headNode
        let sum = 0
        while(localNode !== null){
            sum += parseFloat(localNode.amount, 10)
            localNode = localNode.forwardNode
        }
        return sum
    }
}
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
        let prevNode = this.headNode
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
            return this.currentNode
        }

        while(localNode !== this.currentNode){
            localNode = localNode.forwardNode
        }
        let nextNode = localNode.forwardNode
        localNode.forwardNode = newNode
        newNode.forwardNode = nextNode

        this.currentNode = newNode
        this._length++

        return this.currentNode
    }
    delete(){
        let localNode = this.headNode
        let prevNode = this.headNode

        if(this._length === 0) {
            throw new Error()
        }

        if(this.currentNode === this.headNode){
            this.headNode = this.currentNode.forwardNode
            this.currentNode = this.headNode
        } else {
            while(localNode !== this.currentNode){
                prevNode = localNode
                localNode = localNode.forwardNode
            }
            prevNode.forwardNode = localNode.forwardNode
            this.currentNode = prevNode
        }
        this._length--
        return this.currentNode
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
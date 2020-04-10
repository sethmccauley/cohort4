import LinkedList from './linkedlist-v.js';

test('Testing Node contstructor and show method.', () => {
    const newList = new LinkedList();
    newList.insert('Age', 37)
    expect(newList.first().show()).toBe('Subject: Age; Amount: 37')

    expect(() => {newList.insert(1000, 'yes')}).toThrow(TypeError)
})

test('Testing LinkedList constructor and insert.', () => {
    const newList = new LinkedList()
    expect(newList.first()).toBe(null)

    newList.insert('Seth', 37)
    newList.insert('Caitlin', 31)
    newList.insert('Superman', 50)
    newList.insert('Sylvestre', 13)
    newList.insert('Thor', 600)

    expect(newList._length).toBe(5);
    expect(newList.first().forwardNode.show()).toBe('Subject: Caitlin; Amount: 31')
    expect(newList.total()).toBe(731)
    
    newList.last()
    expect(newList.currentNode.show()).toBe('Subject: Thor; Amount: 600')
    newList.previous()
    expect(newList.currentNode.show()).toBe('Subject: Sylvestre; Amount: 13')
})

test('Testing LinkedList deletion.', () => {
    const newList = new LinkedList()
    newList.insert('First', 1)
    newList.insert('Second', 2)
    newList.insert('Third', 3)
    newList.insert('Fourth', 4)
    newList.insert('Fifth', 5)
    newList.insert('Sixth', 6)

    newList.previous()
    newList.previous() // @ Fourth
    expect(newList.currentNode.show()).toBe('Subject: Fourth; Amount: 4')
    expect(newList.total()).toBe(21)
    newList.delete()   // Delete Fourth.
    expect(newList.currentNode.show()).toBe('Subject: Third; Amount: 3')
    expect(newList.total()).toBe(17)

    expect(newList.next().show()).toBe('Subject: Fifth; Amount: 5')
})

test('Testing LinkedList deletion on boundary case.', () => {
    const newList = new LinkedList()
    expect(() => newList.delete()).toThrow(Error)

    newList.insert('First', 1)
    expect(newList.currentNode.show()).toBe('Subject: First; Amount: 1')
    newList.delete()
    expect(newList.currentNode).toBe(null)

    newList.insert('First', 1)
    newList.insert('Second', 2)
    newList.insert('Third', 3)
    newList.insert('Fourth', 4)
    newList.insert('Fifth', 5)
    newList.insert('Sixth', 6)

    expect(newList.first().show()).toBe('Subject: First; Amount: 1')
    newList.delete()
    expect(newList.currentNode.show()).toBe('Subject: Second; Amount: 2')
    newList.next()
    newList.next()
    newList.next()
    newList.next()
    newList.next()
    expect(newList.currentNode.show()).toBe('Subject: Sixth; Amount: 6')

})
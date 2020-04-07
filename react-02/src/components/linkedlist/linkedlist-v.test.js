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
    expect(newList.first().show()).toBe('Subject: Seth; Amount: 37')

    newList.insert('Caitlin', 31)
    expect(newList._length).toBe(2);
    expect(newList.first().forwardNode.show()).toBe('Subject: Caitlin; Amount: 31')

    expect(newList.total()).toBe(68)

    newList.insert('Superman', 50)
    newList.previous()
    expect(newList.currentNode.show()).toBe('Subject: Caitlin; Amount: 31')
    expect(newList.next().show()).toBe('Subject: Superman; Amount: 50')
    expect(newList.currentNode.show()).toBe('Subject: Superman; Amount: 50')
})
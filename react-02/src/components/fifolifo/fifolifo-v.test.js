import { Fifo, Lifo } from './fifolifo-v';

test('Create and add a value to a Fifo or Lifo queue.', () => {
    const newFifo = new Fifo();
    expect(newFifo.push(5)).toBe(1);
    expect(newFifo.push(10)).toBe(2);

    const newLifo = new Lifo();
    expect(newLifo.push(6)).toBe(1);
    expect(newLifo.push({Dictionary: 'Yes'})).toBe(2);
})

test('Test Lifo "pop"ing of values.', () => {
    const newLifo = new Lifo();
    newLifo.push(1)
    newLifo.push(2)
    newLifo.push(3)
    newLifo.push(4)
    newLifo.push(5)

    // Last element is 5, pop returns 5 as the removed element.
    expect(newLifo.collection[newLifo.collection.length -1]).toBe(5)
    expect(newLifo.pop()).toBe(5)
})

test('Test Fifo "shift"ing of value.', () => {
    const newFifo = new Fifo();
    newFifo.push(1)
    newFifo.push(2)
    newFifo.push(3)
    newFifo.push(4)
    newFifo.push(5)

    // First Element is 1, shift returns 1 as the removed element.
    expect(newFifo.collection[0]).toBe(1)
    expect(newFifo.shift()).toBe(1)
})
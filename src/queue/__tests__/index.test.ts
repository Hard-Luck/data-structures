import Queue from '..';

describe('Queue', () => {
    describe('Properties', () => {
        it('should have a size property that defaults to 0', () => {
            const queue = new Queue<number>();
            expect(queue.size).toBe(0);
        });
    });

    describe('enqueue', () => {
        it('should add elements to the queue and update the size accordingly', () => {
            const queue = new Queue<number>();
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            expect(queue.size).toBe(3);
        });
    });

    describe('dequeue', () => {
        it('should remove elements from the queue in the order they were added (FIFO)', () => {
            const queue = new Queue<number>();
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            expect(queue.dequeue()).toBe(1);
            expect(queue.dequeue()).toBe(2);
            expect(queue.dequeue()).toBe(3);
        });

        it('should return null when trying to dequeue from an empty queue', () => {
            const queue = new Queue<number>();
            expect(queue.dequeue()).toBeNull();
        });

        it('should update the size correctly when an element is dequeued', () => {
            const queue = new Queue<number>();
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.dequeue();
            expect(queue.size).toBe(2);
        });
    });

    describe('peek', () => {
        it('should return the front element without removing it', () => {
            const queue = new Queue<number>();
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.peek()).toBe(1);
            expect(queue.size).toBe(2);
        });

        it('should return null when trying to peek at an empty queue', () => {
            const queue = new Queue<number>();
            expect(queue.peek()).toBeNull();
        });
    });

    describe('clear', () => {
        it('should remove all elements from the queue and reset size to 0', () => {
            const queue = new Queue<number>();
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            queue.clear();
            expect(queue.size).toBe(0);
            expect(queue.dequeue()).toBeNull();
        });
    });
    describe('isEmpty', () => {
        it('should return true for an empty queue and false for a non-empty queue', () => {
            const queue = new Queue<number>();
            expect(queue.isEmpty()).toBe(true);
            queue.enqueue(1);
            expect(queue.isEmpty()).toBe(false);
            queue.dequeue();
            expect(queue.isEmpty()).toBe(true);
        });
    });
});

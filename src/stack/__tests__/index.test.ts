import Stack from "..";

describe('Stack', () => {
    describe('push', () => {
        it('should add elements to the top of the stack', () => {
            const stack = new Stack<number>();
            stack.push(1);
            expect(stack.peek()).toBe(1);
            stack.push(2);
            expect(stack.peek()).toBe(2);
            stack.push(3);
            expect(stack.peek()).toBe(3);
            expect(stack).toHaveLength(3);
        });
    });

    describe('pop', () => {
        it('should remove the top element of the stack', () => {
            const stack = new Stack<number>();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(stack.pop()).toBe(3);
            expect(stack.pop()).toBe(2);
            expect(stack.pop()).toBe(1);
            expect(stack).toHaveLength(0);
        });

        it('should throw an error if pop is called on an empty stack', () => {
            const stack = new Stack<number>();
            expect(() => stack.pop()).toThrowError('Stack is empty');
        });
    });

    describe('peek', () => {
        it('should return the top element without removing it', () => {
            const stack = new Stack<number>();
            stack.push(1);
            stack.push(2);
            stack.push(3);
            expect(stack.peek()).toBe(3);
            expect(stack).toHaveLength(3);
        });

        it('should return null for an empty stack', () => {
            const stack = new Stack<number>();
            expect(stack.peek()).toBeNull();
        });
    });

    describe('isEmpty', () => {
        it('should return true for an empty stack and false for a non-empty stack', () => {
            const stack = new Stack<number>();
            expect(stack.isEmpty()).toBe(true);
            stack.push(1);
            expect(stack.isEmpty()).toBe(false);
            stack.pop();
            expect(stack.isEmpty()).toBe(true);
        });
    });

    describe('length', () => {
        it('should correctly report the number of elements in the stack', () => {
            const stack = new Stack<number>();
            expect(stack).toHaveLength(0);
            stack.push(1);
            expect(stack).toHaveLength(1);
            stack.push(2);
            expect(stack).toHaveLength(2);
            stack.pop();
            expect(stack).toHaveLength(1);
            stack.pop();
            expect(stack).toHaveLength(0);
        });
    });
});

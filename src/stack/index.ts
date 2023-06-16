class Stack<T> {
    public length = 0
    private head: StackNode<T> | null = null
    private tail: StackNode<T> | null = null

    public push(value: T): Stack<T> {
        const element = new StackNode(value)
        if (!this.tail || !this.head) {
            this.tail = this.head = element
        } else {
            this.tail.next = element
            element.prev = this.tail
            this.tail = element
        }
        this.length++
        return this
    }
    public pop(): T {
        if (this.length === 0) throw new Error("Stack is empty")
        const current = this.tail as StackNode<T>
        const prev = current.prev
        if (!prev) this.head = this.tail = null
        else {
            prev.next = null
            this.tail = prev
        }
        this.length--
        return current.value
    }
    public peek(): T | null {
        if (!this.tail) return null
        return this.tail.value
    }
    public isEmpty(): boolean {
        return this.length === 0
    }
}


class StackNode<T> {
    value: T;
    next: StackNode<T> | null;
    prev: StackNode<T> | null;
    constructor(value: T) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

export default Stack
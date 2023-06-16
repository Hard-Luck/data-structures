class Queue<T> {
    public size = 0
    private head: QueueNode<T> | null = null
    private tail: QueueNode<T> | null = null

    public enqueue(value: T) {
        const newNode = new QueueNode(value)
        if (this.head === null || this.tail === null) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode

        }
        this.size++
    }
    public dequeue(): T | null {
        if (this.size <= 0 || !this.head) return null
        const current = this.head.value
        this.head = this.head.next as QueueNode<T>
        this.size--
        return current

    }
    public peek(): T | null {
        if (!this.head) return null
        return this.head.value
    }
    public clear(): void {
        this.head = this.tail = null
        this.size = 0
    }
    public isEmpty(): boolean {
        return this.size === 0
    }

}

class QueueNode<T>{
    value: T;
    next: QueueNode<T> | null;
    constructor(value: T) {
        this.value = value
        this.next = null
    }

}

export default Queue
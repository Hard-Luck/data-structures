class DoublyLinkedList<T>{
    public length = 0;
    private _head: DoubleLLNode<T> | null = null;
    private _tail: DoubleLLNode<T> | null = null;

    private set head(value: DoubleLLNode<T> | null) {
        this._head = value
    }
    private set tail(value: DoubleLLNode<T> | null) {
        this._tail = value
    }

    private indexInBounds(index: number) {
        return index >= 0 && index < this.length;
    }

    public get head() {
        return this._head
    }
    public get tail() {
        return this._tail
    }
    public insert(value: T) {
        const node = new DoubleLLNode(value);
        if (this.head === null) this.head = node;
        if (this.tail === null) this.tail = node;
        else {
            node.prev = this.tail
            this.tail.next = node;
            this.tail = node;

        }
        this.length++;
    }
    public remove(index: number) {
        if (!this.indexInBounds(index) || this.head === null)
            throw new Error('Index out of bounds');
        let currentNode = this.head;
        let previous: DoubleLLNode<T> | null = null;
        for (let i = 1; i <= index && currentNode; i++) {
            if (currentNode.next) {
                previous = currentNode;
                currentNode = currentNode.next;
            }
        }
        if (previous && currentNode.next) {
            previous.next = currentNode.next;
            currentNode.next.prev = previous
        }
        if (currentNode === this.head) {
            this.head = this.head.next;
        }
        if (currentNode === this.tail) {
            this.tail = previous;
        }
        currentNode.next = null;
        this.length--;
        return currentNode.value;
    }
    public traverse(cb: (value: T) => T): T[];

    public traverse(): void;
    public traverse(cb?: (value: T) => T): T[] | void {
        if (!this.head) return;
        const result: T[] = [];
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (!cb) {
                console.log(current.value);
            } else {
                result.push(cb(current.value));
            }
            current = current.next as DoubleLLNode<T>;
        }
        if (cb) {
            return result;
        }
    }

    public search(value: T): number {
        let currentIndex = 0;
        let current = this.head;
        do {
            if (current === null) return -1;
            if (current.value === value) return currentIndex;
            currentIndex++;
            current = current.next;
        } while (currentIndex < this.length);
        return -1;
    }
    public update(index: number, value: T): void {
        if (!this.indexInBounds(index)) throw new Error('Index out of bounds');
        let current = this.head
        if (current === null) throw new Error('Index out of bounds');
        for (let i = 0; i < index; i++) {
            current = current.next as DoubleLLNode<T>
        }
        current.value = value

    }
    public clear() {
        this.head = null
        this.tail = null
        this.length = 0
    }


}

class DoubleLLNode<T> {
    value: T;
    next: DoubleLLNode<T> | null;
    prev: DoubleLLNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

export default DoublyLinkedList
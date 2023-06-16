import DoublyLinkedList from "..";

describe('Doubly Linked List', () => {
    describe('properties', () => {
        it('should have a length property that defaults to 0', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            expect(doublyLinkedList.length).toBe(0)
        });
        it('should have a head and tail property that default to null', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            expect(doublyLinkedList.head).toBeNull()
            expect(doublyLinkedList.tail).toBeNull()
        });
    });

    describe('Insertion', () => {
        it('should have a method called insert that inserts a new node at the end of the list', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            expect(doublyLinkedList.head!.value).toBe(2)
            expect(doublyLinkedList.tail!.value).toBe(2)
            expect(doublyLinkedList).toHaveLength(1)
            doublyLinkedList.insert(3)
            expect(doublyLinkedList.head!.value).toBe(2)
            expect(doublyLinkedList.tail!.value).toBe(3)
            expect(doublyLinkedList.tail!.prev!.value).toBe(2)

        });
        it('should handle insertion of multiple values correctly', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            for (let i = 1; i <= 10; i++) {
                doublyLinkedList.insert(i)
                expect(doublyLinkedList.tail!.value).toBe(i)
                expect(doublyLinkedList).toHaveLength(i)
            }
        });
        it('should correctly update the prev property of each node on insert', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(4)
            expect(doublyLinkedList.tail!.prev!.value).toBe(3)
            expect(doublyLinkedList.tail!.prev!.prev!.value).toBe(2)
            expect(doublyLinkedList.tail!.prev!.prev!.prev).toBeNull()
        });
    });

    describe('Remove', () => {
        it('should have a delete method that deletes a node from the list at the given index', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(4)
            doublyLinkedList.insert(5)
            doublyLinkedList.remove(0)
            expect(doublyLinkedList.head!.value).toBe(3)
            expect(doublyLinkedList).toHaveLength(3)
            doublyLinkedList.remove(1)
            expect(doublyLinkedList.head!.next!.value).toBe(5)
        });
        it('should return the value of the node that was deleted', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(4)
            doublyLinkedList.insert(5)
            expect(doublyLinkedList.remove(3)).toBe(5)
            expect(doublyLinkedList.remove(0)).toBe(2)

        });
        it('should throw an error if the index is out of bounds', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(4)
            doublyLinkedList.insert(5)
            expect(() => doublyLinkedList.remove(5)).toThrowError('Index out of bounds')
            expect(() => doublyLinkedList.remove(-1)).toThrowError('Index out of bounds')
        });
        it('should correctly update the prev property of each node on remove', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(4)
            doublyLinkedList.remove(1)
            expect(doublyLinkedList.tail!.prev!.value).toBe(2)
            expect(doublyLinkedList.tail!.prev!.prev).toBeNull()
        });
        it('should handle removal correctly when the list has only one node', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            expect(doublyLinkedList.remove(0)).toBe(2)
            expect(doublyLinkedList.head).toBeNull()
            expect(doublyLinkedList.tail).toBeNull()
            expect(doublyLinkedList).toHaveLength(0)
        });

        it('should correctly update head.prev to null and tail.next to null after a node is removed', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(4)
            doublyLinkedList.remove(1)
            expect(doublyLinkedList.head!.next!.value).toBe(4)
            expect(doublyLinkedList.head!.prev).toBeNull()
            expect(doublyLinkedList.tail!.value).toBe(4)
            expect(doublyLinkedList.tail!.next).toBeNull()
        });
    });

    describe('Traversal', () => {
        it('should log all the values when traverse is called without a function', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            const consoleSpy = jest.spyOn(console, 'log')
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(50)
            doublyLinkedList.traverse()
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenCalledWith(2)
            expect(consoleSpy).toHaveBeenCalledWith(3)
            expect(consoleSpy).toHaveBeenCalledWith(50)

        });
        it('should have a traverse method that takes a function as an argument and calls that function on each node in the list', () => {
            const doublyLinkedList = new DoublyLinkedList<number>();
            const mockFunction = jest.fn();
            doublyLinkedList.insert(2);
            doublyLinkedList.insert(3);
            doublyLinkedList.insert(50);
            doublyLinkedList.traverse(mockFunction);
            expect(mockFunction).toHaveBeenCalledTimes(3);
            expect(mockFunction).toHaveBeenCalledWith(2);
            expect(mockFunction).toHaveBeenCalledWith(3);
            expect(mockFunction).toHaveBeenCalledWith(50);
        });
    });

    describe('Search', () => {
        it('should have a method called search that takes a value and returns the index of the node with that value', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(50)
            doublyLinkedList.insert(100)
            expect(doublyLinkedList.search(2)).toBe(0)
            expect(doublyLinkedList.search(3)).toBe(1)
            expect(doublyLinkedList.search(100)).toBe(3)
        })
        it("should return -1 if the value is not in the list", () => {
            expect(new DoublyLinkedList<number>().search(2)).toBe(-1)
        })
    });

    describe('Update', () => {
        it('should have a method called update that takes an index of the node to update and the value and updates the value of that node', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(50)
            doublyLinkedList.update(2, 5)
            expect(doublyLinkedList.search(5)).toBe(2)
        })
        it('should throw an error if the index is not in the list', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            expect(() => doublyLinkedList.update(2, 5)).toThrowError('Index out of bounds')
        })
        it('should not change the prev property when updating a value', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(4)
            doublyLinkedList.update(1, 5)
            expect(doublyLinkedList.head!.next!.prev!.value).toBe(2)
            expect(doublyLinkedList.tail!.prev!.value).toBe(5)
            expect(doublyLinkedList.tail!.prev!.prev!.value).toBe(2)
        });
    });

    describe('clear', () => {
        it('should have a method called clear that clears the list', () => {
            const doublyLinkedList = new DoublyLinkedList<number>()
            doublyLinkedList.insert(2)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(3)
            doublyLinkedList.insert(50)
            doublyLinkedList.clear()
            expect(doublyLinkedList.head).toBeNull()
            expect(doublyLinkedList.tail).toBeNull()
            expect(doublyLinkedList).toHaveLength(0)
        });
    });
});

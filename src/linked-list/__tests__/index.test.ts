import LinkedList from "..";

describe('Linked List', () => {
    describe('properties', () => {

        it('should have a length property that defaults to 0', () => {
            const linkedList = new LinkedList<number>()
            expect(linkedList.length).toBe(0)
        });
        it('should have a head and tail property that default to null', () => {
            const linkedList = new LinkedList<number>()
            expect(linkedList.head).toBeNull()
            expect(linkedList.tail).toBeNull()
        });
    });
    describe('Insertion', () => {
        it('should have a method called insert that inserts a new node at the end of the list', () => {
            const linkedList = new LinkedList<number>()
            linkedList.insert(2)
            expect(linkedList.head!.value).toBe(2)
            expect(linkedList.tail!.value).toBe(2)
            expect(linkedList).toHaveLength(1)
            linkedList.insert(3)
            expect(linkedList.head!.value).toBe(2)
            expect(linkedList.tail!.value).toBe(3)

        });
    })
    describe('Remove', () => {
        it('should have a delete method that deletes a node from the list at the given index', () => {
            const linkedList = new LinkedList<number>()
            linkedList.insert(2)
            linkedList.insert(3)
            linkedList.insert(4)
            linkedList.insert(5)
            linkedList.remove(0)
            expect(linkedList.head!.value).toBe(3)
            expect(linkedList).toHaveLength(3)
            linkedList.remove(1)
            expect(linkedList.head!.next!.value).toBe(5)
        });
        it('should return the value of the node that was deleted', () => {
            const linkedList = new LinkedList<number>()
            linkedList.insert(2)
            linkedList.insert(3)
            linkedList.insert(4)
            linkedList.insert(5)
            expect(linkedList.remove(3)).toBe(5)
            expect(linkedList.remove(0)).toBe(2)

        });
        it('should throw an error if the index is out of bounds', () => {
            const linkedList = new LinkedList<number>()
            linkedList.insert(2)
            linkedList.insert(3)
            linkedList.insert(4)
            linkedList.insert(5)
            expect(() => linkedList.remove(5)).toThrowError('Index out of bounds')
            expect(() => linkedList.remove(-1)).toThrowError('Index out of bounds')
        })
    });
    describe('Traversal', () => {
        it('should log all the values when traverse is called without a function', () => {
            const linkedList = new LinkedList<number>()
            const consoleSpy = jest.spyOn(console, 'log')
            linkedList.insert(2)
            linkedList.insert(3)
            linkedList.insert(50)
            linkedList.traverse()
            expect(consoleSpy).toHaveBeenCalledTimes(3)
            expect(consoleSpy).toHaveBeenCalledWith(2)
            expect(consoleSpy).toHaveBeenCalledWith(3)
            expect(consoleSpy).toHaveBeenCalledWith(50)

        });
        it('should have a traverse method that takes a function as an argument and calls that function on each node in the list', () => {
            const linkedList = new LinkedList<number>();
            const mockFunction = jest.fn();
            linkedList.insert(2);
            linkedList.insert(3);
            linkedList.insert(50);
            linkedList.traverse(mockFunction);
            expect(mockFunction).toHaveBeenCalledTimes(3);
            expect(mockFunction).toHaveBeenCalledWith(2);
            expect(mockFunction).toHaveBeenCalledWith(3);
            expect(mockFunction).toHaveBeenCalledWith(50);
        });

    });
    describe('Search', () => {
        it('should have a method called search that takes a value and returns the index of the node with that value', () => {
            const linkedList = new LinkedList<number>()
            linkedList.insert(2)
            linkedList.insert(3)
            linkedList.insert(50)
            linkedList.insert(100)
            expect(linkedList.search(2)).toBe(0)
            expect(linkedList.search(3)).toBe(1)
            expect(linkedList.search(100)).toBe(3)
        })
        it("should return -1 if the value is not in the list", () => {
            expect(new LinkedList<number>().search(2)).toBe(-1)
        })
    })
    describe('Update', () => {
        it('should have a method called update that takes an index of the node to update and the value and updates the value of that node', () => {
            const linkedList = new LinkedList<number>()
            linkedList.insert(2)
            linkedList.insert(3)
            linkedList.insert(50)
            linkedList.update(2, 5)
            expect(linkedList.search(5)).toBe(2)
        })
        it('should throw an error if the index is not in the list', () => {
            const linkedList = new LinkedList<number>()
            expect(() => linkedList.update(2, 5)).toThrowError('Index out of bounds')
        })
    });
    describe('clear', () => {
        it('should have a method called clear that clears the list', () => {
            const linkedList = new LinkedList<number>()
            linkedList.insert(2)
            linkedList.insert(3)
            linkedList.insert(3)
            linkedList.insert(50)
            linkedList.clear()
            expect(linkedList.head).toBeNull()
            expect(linkedList.tail).toBeNull()
            expect(linkedList).toHaveLength(0)
        });
    });
});


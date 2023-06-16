import LinkedList from "./linked-list";

const ll = new LinkedList<number>()

ll.insert(1)
ll.insert(50)
ll.insert(3)

ll.traverse()

ll.remove(2)

ll.traverse()

console.log(ll.traverse(addLength)
)
function addLength(x: number): number {
    return x + 5
}

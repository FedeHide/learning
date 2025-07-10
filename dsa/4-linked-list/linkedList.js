//?/ Linked list: is a linear data structure where elements are stored in nodes, each pointing to the next node.
// It allows for efficient insertion and deletion of elements.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Pointer to the first node
        this.size = 0; // Size of the linked list
    }

    // Add a new node at the end of the linked list
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If the list is empty, set head to the new node
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the last node
            }
            current.next = newNode; // Link the new node at the end
        }
        this.size++;
    }

    // Print the linked list
    print() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.print(); // Output: 10 -> 20 -> 30 -> null
linkedList.add(40);
linkedList.print(); // Output: 10 -> 20 -> 30 -> 40 -> null

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        let newNode = new Node(data);
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next; // Move to the next node
        }
    }

    getById(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                return current.data; // Return the data at the specified index
            }
            count++;
            current = current.next;
        }
        return null; // Return null if the index is out of bounds
    }

    deleteByIndex(index) {
        if (index < 0) return; // Prevent negative index

        let current = this.head;
        let count = 0;

        // If index is 0, remove the head
        if (index === 0) {
            this.head = current.next;
            if (this.head === null) {
                this.tail = null; // If the list becomes empty, set tail to null
            }
            return;
        }

        // Traverse the list to find the node before the one to delete
        while (current) {
            if (count === index - 1) {
                if (current.next) {
                    current.next = current.next.next;  // Skip the node at index
                    if (current.next === null) {
                        this.tail = current;  // Update tail if deleted node was the last
                    }
                }
                return;
            }
            current = current.next;
            count++;
        }
    }
}

// Example usage:
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log("Display List:");
list.display(); // Output should be: 1 2 3 4

console.log("\nGet element at index 2:");
console.log(list.getById(2)); // Should return 3

console.log("\nDelete element at index 2:");
list.deleteByIndex(2); // Deletes node with value 3

console.log("\nDisplay List after deletion:");
list.display(); // Output should be: 1 2 4

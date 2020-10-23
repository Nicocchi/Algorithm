/**
 * This code can be used under the MIT License.
 * Code by Nicocchi
 */

/**
 * A linked list node
 *
 * @class Node
 */
class Node {
    // Constructor to create a new node
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

/**
 * Class to create a  Doubly Linked List
 *
 * @class DoublyLinkedList
 */
class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Given a reference to the head of a list and an
     * integer, inserts a new node on the front of the list
     *
     * @memberof DoublyLinkedList
     */
    push = new_data => {
        // 1. Allocates node
        // 2. Put the data in it
        let new_node = new Node(new_data);

        // 3. Make next of the new node as head and
        // previous as null (already null)
        new_node.next = this.head;

        // 4. Change prev of head node to new_node
        if (this.head !== null) {
            this.head.prev = new_node;
        }

        // 5. Move the head to point to the new node
        this.head = new_node
    }

    /**
     * Given a node as prev_node, insert a new node after
     * the given node
     *
     * @memberof DoublyLinkedList
     */
    insertAfter = (prev_node, new_data) => {
        // 1. Check if the given prev_node is null
        if (prev_node === null) {
            console.log("The given previous node cannot be null");
            return;
        }

        // 2. Allocate new node
        // 3. Put in the data
        let new_node = new Node(new_data);

        // 4. Make net of new node as next of prev node
        new_node.next = prev_node.next;

        // 5. Make prev_node as previous of new_node
        prev_node.next = new_node;

        // 6. Make prev_node as previous of new_node
        new_node.prev = prev_node;

        // 7. Change previous of new_node's next node
        if (new_node.next !== null) {
            new_node.next.prev = new_node;
        }
    }

    /**
     * Given a reference to the head of DLL and integer,
     * appends a new node at the end
     *
     * @memberof DoublyLinkedList
     */
    append = new_data => {
        // 1. Allocates node
        // 2. Put in the data
        let new_node = new Node(new_data);

        // 3. This new node is going to be the last node,
        // so make next of it as null
        new_node.next = null;

        // 4. if the Linked List is empty, then make the
        // new node as head
        if (this.head === null) {
            new_node.prev = null;
            this.head = new_node;
            return;
        }

        // 5. Else traverse till the last node
        let last = this.head;
        while (last.next !== null) {
            last = last.next;
        }

        // 6. Change the next of last node
        last.next = new_node;

        // 7. Make last node as previous of new_node
        new_node.prev = last;

        return;
    }

    /**
     * This function prints contents of Linked List
     * starting from given node
     *
     * @memberof DoublyLinkedList
     */
    printList = node => {
        console.log("\nTraversal in forward direction");
        let last = node;
        while (node !== null) {
            console.log(node.data);
            last = node;
            node = node.next;
        }

        console.log("\nTraversal in reverse direction");
        while (last !== null) {
            console.log(last.data);
            last = last.prev;
        }
    }
}

// Test functions

// Start with an empty list
let llist = new DoublyLinkedList();

// nsert 6. So the list becomes 6->None
llist.append(6);

// Insert 7 at the beginning.
// So linked list becomes 7->6->None
llist.push(7);

// Insert 1 at the beginning
// So linked list becomes 1->7->6->None
llist.push(1);

// Insert 4 at end
// So linked list becomes 1->7->6->4->None
llist.append(4);

// Insert 8, after 7
// So linked list becomes 1->7->8->6->4->None
llist.insertAfter(llist.head.next, 8);

console.log("Created DLL is: ");
llist.printList(llist.head);
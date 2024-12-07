// Create LL from Array
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
};

function createLinkedListFromArray(array) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let value of array) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next;
};

// function printLinkedList(head) {
//     const result = [];
//     let current = head;
//     while (current !== null) {
//         result.push(current.value);
//         current = current.next;
//     }
//     console.log(result.join(" -> "));
// };

// let list = createLinkedListFromArray([]);
// printLinkedList(list); // Output: (empty string)

// list = createLinkedListFromArray([5]);
// printLinkedList(list); // Output: 5

// list = createLinkedListFromArray([1, 2, 3, 4, 5]);
// printLinkedList(list); // Output: 1 -> 2 -> 3 -> 4 -> 5

function insertZeroAfterEachNode(head) {
    let current = head;

    while (current !== null) { //1 2 3 
        const newNode = new ListNode(0); // 0
        newNode.next = current.next; // 0 2
        current.next = newNode; // 1 0 2
        current = newNode.next; // 2
    }

    return head;
};

function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
};

// const list1 = createLinkedListFromArray([1, 2, 3, 4, 5]); // Create linked list from array
// const updatedList = insertZeroAfterEachNode(list1); // Modify the list
// printLinkedList(updatedList); // Output: 1 -> 0 -> 2 -> 0 -> 3 -> 0 -> 4 -> 0 -> 5 -> 0



function createLinkedListWithTarget(target, count) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let i=0; i<count; i++) {
        current.next = new ListNode(target);
        current = current.next;
    }
    return dummy.next;
};

function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
};

// let list = createLinkedListWithTarget(5, 0);
// printLinkedList(list); // Output: (empty string)

// list = createLinkedListWithTarget(7, 1);
// printLinkedList(list); // Output: 7

// list = createLinkedListWithTarget(3, 4);
// printLinkedList(list); // Output: 3 -> 3 -> 3 -> 3

// list = createLinkedListWithTarget(1, 10);
// printLinkedList(list); // Output: 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1 -> 1

//First K Occurence
function findFirstKOccurrence(head, k) {
    const frequencyMap = new Map();
    let current = head;

    while (current !== null) {
        const value = current.value;
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);

        if (frequencyMap.get(value) === k) {
            return value;
        }

        current = current.next;
    }

    return -1;
}

//Limit Repititions
function limitRepetitions(head, k) {
    const frequencyMap = new Map();
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;
    while (current) {
        const value = current.value
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
        if (frequencyMap.get(value) > k) prev.next = current.next;
        else prev = current;
        current = current.next;
    };;
    return dummy.next;
};

function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// let list = createLinkedListFromArray([]);
// let limitedList = limitRepetitions(list, 2);
// printLinkedList(limitedList); // Output: (empty string)

// list = createLinkedListFromArray([1, 2, 3, 4, 5]);
// limitedList = limitRepetitions(list, 2);
// printLinkedList(limitedList); // Output: 1 -> 2 -> 3 -> 4 -> 5

// list = createLinkedListFromArray([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
// limitedList = limitRepetitions(list, 2);
// printLinkedList(limitedList); // Output: 1 -> 2 -> 2 -> 3 -> 3 -> 4 -> 4

// list = createLinkedListFromArray([1, 1, 2, 2, 3, 3, 3, 4]);
// limitedList = limitRepetitions(list, 1);
// printLinkedList(limitedList); // Output: 1 -> 2 -> 3 -> 4

//Remove Odd Nodes
function removeOddNodes(head) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let prev = dummyHead;
    let current = head;
    while (current !== null) {
        if (current.value % 2 !== 0) {
            prev.next = current.next; 
        } else {
            prev = current;
        }

        current = current.next;
    }
    return dummyHead.next;
};

function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

let list = createLinkedListFromArray([]);
let result = removeOddNodes(list);
printLinkedList(result); // Output: (empty string)

list = createLinkedListFromArray([2, 4, 6, 8]);
result = removeOddNodes(list);
printLinkedList(result); // Output: 2 -> 4 -> 6 -> 8

list = createLinkedListFromArray([1, 3, 5, 7]);
result = removeOddNodes(list);
printLinkedList(result); // Output: (empty string)

list = createLinkedListFromArray([1, 2, 3, 4, 5, 6]);
result = removeOddNodes(list);
printLinkedList(result); // Output: 2 -> 4 -> 6

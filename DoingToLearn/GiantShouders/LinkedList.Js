/*
* Understanding and Writen Codes of Other (GiantShouders)
* Go to the link to see the original code
*https://github.com/trekhleb/javascript-algorithms/blob/477f30b0bdac6024874d2976de1eca7afe0176dd/src/data-structures/linked-list/LinkedList.js#L4
*/

import LinkedListNode from './LinkedListNode';
import Comparator from './Comparator';

export default class LinkedList {
    /**
     * @param {Function} [comparatorFunction]
     */
    constructor(comparatorFunction) {
        /**@var LinkedListNode */
        this.head = null;

        /**@var LinkedListNode */
        this.tail = null;

        this.compare = new Comparator(comparatorFunction);
    }

    /**
     * @param {*} value
     * @return {LinkedList}
     */
    prepend(value) {
        // Make new node to be a head
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;        

        // If there is no tail yet  let's make new nofr a tail.
        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }
}
// linha 33
    

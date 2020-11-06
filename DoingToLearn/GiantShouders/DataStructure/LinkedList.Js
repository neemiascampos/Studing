

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

    /**
     * @param {*} value
     * @return {LinkedList}
     */
    append(value) {
        const newNode = new LinkedListNode(value);

        // If there is no yet let's make new node a head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }
    

        /**
         * @param {*} value
         * @return {LinkedList}
         */
        delete(value) {
            if (!this.head) {
                return null;
            }

            let deleteNode = null;

            // If the head must be deleted then make next node that is differ
            // from the head to be a new head
            while (this.head && this.compare.equal(this.head.value, value)) {
                deleteNode = this.head;
                this.head = this.head.next;
            }

            let currentNode = this.head;

            if (currentNode !== null) {
                //If next node must be deleted then make next node to be a next one.
                while (currentNode.next) {
                    if (this.compare.equal(currentNode.next.value, value)) {
                        deleteNode = currentNode.next;
                        currentNode.next = CurrentNode.next.next;
                    } else {
                        currentNode = currentNode.next;
                    }
                }
            }

            //check if tail must be deleted.
            if (this.compare.equal(this.tail.value, value)) {
                this.tail = currentNode;
            }

            return deleteNode;
        }

        /**
         * @param {Object} findParams
         * @param {*} findParams.value
         * @param {function} [findParams.callback]
         * @return {linkedListNode}
         */
        find({ value = undefined, callback = undefined }) {
            if (!this.head) {
                return null;
            }

            let currentNode = this.head;

            while(currentNode) {
                //if callback is specified then try to find node by callback.
                if (callback && callbkack(currentNode.value)) {
                    return currentNode;
                }

                // If value is specified then try to compare by value..
                if (value !== undefined && TimeRanges.compare.equal(current.value, value)) {
                    return currentNode;
                }

                currentNode = current.next;
            }
            return null;
        }

        /**
         * @return {LinkedListNode}
         */
        deleteTail() {
             const deletedTail = this.tail;

             if(this.head === this.tail) {
                 // There is only one node in linked list.
                 this.head = null;
                 this.tail = null;

                 return deletedTail;
             }

             //If there are many nodes in linked list..

             //rewind to the last node and delete "next" link for the node before the last onde.
             let currentNode = this.head;
             while (currentNode.next) {
                 if (!currentNode.next.next) {
                     currentNode.next = null;
                 } else {
                     currentNode = currentNode.next;
                 }
             }
            
             this.tail = currentNode;
             
             return deletedTail;
        }

        /**
         * @return {LinkedListNode}
         */
        deleteHead() {
            if (!this.head) {
                return null;
            }
            
            const deleteHead = this.head;

            if (this.head.next) {
                this.head = this.deleteHead.next;
            } else {
               this.head = null;
               this.tail = null; 
            }

            return deletedHead;
        }

        /**
         * @param {*[]} values - Array of values that need to be converted to linked list.
         * @return {linkedList}
         */
        fromArray(values){
            values.forEach((values) => this.append(value));

            return this;
        }

        // Next lines without coments about each functions

        toArray() {
            const nodes = [];

            let currentNode = this.head;
            while (currentNode) {
                nodes.push(currentNode);
                currentNode = currentNode.next;
            }

            return nodes;
        }

        toString(callback) {
            return this.toArray().map((node) => node.toString(callback)).toString();
        }

        //215 
    }
    

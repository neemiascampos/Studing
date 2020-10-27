
export default class Comparator {

    /**
     * @param {funciotino(a: *, b: *)} [compareFunction]
     * It may be custom compare function that, let's
     * say may compare custom objects together.         
     */
    contructor(compareFunction){
        this.compare = compareFunction || Comparator.defaultCompareFuction;
    }
    
    /**
     * default comparasion function. It just assumes that "a" and "b"
     * are strings or numbers.
     * @param{(string|number)} a
     * @param{(string|number)} b
     * @returns {number}
     */
     static defaultCompareFunction(a, b){
         if(a===b){
             return 0;
         }

         return a < b ? -1 : 1;
    }

    /**
     * checks if two variables are equal
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */

     equal(a, b){
         return this.campare(a, b) === 0;
     }

     /**
      * checks if variable "a" is less than "b".
      * @param {*} a
      * @param {*} b
      * @return {boolean}
      */
     lessThan(a,b){
         return this.compare(a, b) < 0;
     }

     /**
      * checks if variablr "a" is greather than "b".
      * @param {*} a 
      * @param {*} b 
      */
     greatherThan(a, b) {
         return this.compare(a, b) > 0;
     }
     /**
      * checks if variable "a" is less than or equal "b".
      * @param {*} a
      * @param {*} b
      * @return {boolean}
      */
     lessThanOrEqual(a, b) {
         return this.lessThan(a, b) || this.equal(a, b);
     }

     /**
      * checks if variable "a" is less than or equal "b".
      * @param {*} a
      * @param {*} b
      * @return {boolean}
      */
     greatherThanOrEqual(a, b){
         return this.greatherThan(a, b) || this.equal(a,b);
     }

     /**
      * Reverse the comparasion order.
      */
     reverse() {
         const compareOriginal = this.compare;
         this.compare = (a, b) => compareOriginal(b, a);
    
     }




}


import { ISortable } from "./ISortable";

export class SortUtil {
    collection: ISortable;
  
    constructor(collection: ISortable) {
      this.collection = collection;
    }
  
    sort(): void {
      const { length } = this.collection;
      let isSorted = false;
      let lastUnsorted = length - 1;
      while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < lastUnsorted; i++) {
          // HANDLE LINKED LIST LOGIC HERE 
          // HANDLE LIST OF NUMBERS LOGIC HERE
          // I GOT IT TO WORK WITH ARRAY OF NUMBERS
            if (this.collection.compare(i, i+1)){
                this.collection.swap(i, i+1)
                isSorted = false;
            }
          }
        }
        lastUnsorted--;
      }
  }
  
//   const sortUtil = new SorterUtil([10, 3, -5, 0]);
//   sortUtil.sort();
//   console.log(sorter.collection);
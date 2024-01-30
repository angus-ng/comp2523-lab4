import { NumberGroup } from "./NumberGroup";
import { SortUtil } from "./sortUtil";


const my = new NumberGroup([30, 3, -15, 0])
const sorter = new SortUtil(my);
sorter.sort()
console.log(my.data);
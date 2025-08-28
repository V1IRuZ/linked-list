import LinkedList from "./linked-list.js";

const list = new LinkedList()
list.append("dog");
list.append("cat");
list.append("parrot");
let test = list.pop();
console.log(test);
import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("Two");
list.append("Four");
list.append("Five");
list.prepend("One");
list.prepend("Zero");

console.log(list.toString()); //( Zero ) -> ( One ) -> ( Two ) -> ( Four ) -> ( Five ) -> null

list.insertAt("Three", 3);
console.log(list.toString()); // ( Zero ) -> ( One ) -> ( Two ) -> ( Three ) -> ( Four ) -> ( Five ) -> null

console.log(list.at(2).value); // "Two"

console.log(list.contains("Two")); //true
console.log(list.contains("Negative Two")); //false

console.log(list.find("Four")); //4
console.log(list.find("Six")); //null

list.pop();
list.pop();
list.pop();

console.log(list.toString()); // ( Zero ) -> ( One ) -> ( Two ) -> null
console.log(list.head().value); // "Zero"
console.log(list.tail().value); // "Two"

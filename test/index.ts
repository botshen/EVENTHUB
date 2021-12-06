import EventHub from "../src/index";

const eventHub = new EventHub();

console.assert(eventHub instanceof Object === true, "eventHub 是一个对象");
console.assert(1 === 2, "相等");
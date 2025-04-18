const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
function callback (a: number)  { return `100 + ${a}` };

console.log(age, username, toggle, empty, callback(5));
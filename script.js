function greet(name, lastName) {
console.log('Hello'+ name + '' + lastName);
  
}
greet ('John', 'Smith'); 
greet ('Mary', 'Smith');



const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100,0)); 
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(50,0));
console.log(isEqualTo100(0,85));

console.log(isEqualTo100(80,20));
console.log(isEqualTo100(50,50));


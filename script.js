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

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

 console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));




const formatDate = (date = new Date()) => {
const days = date.getDay() + 1;
const months = date.getMonth() + 1;
const years = date.getFullYear();
return ("days"/"months"/"years");
  
}
console.log(formatDate());

//* again getting the dollar signs and {} *//


const addNew = (str) => 
  str.indexOf('New!') === 0 ? str : 'New! $(str)';

console.log(addNew('Offers'));

//* alot of these videos - i keep getting the same mistake while trying them such as the $ signs. *//

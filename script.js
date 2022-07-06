function greet(name, lastName) {
  return 'Hello'+ ' '+ name + ' ' + lastName;
  
}
const y=greet ('Mary', 'Smith');
console.log(greet('John', 'Smith'))
console.log(y);

const sum = () => { 
  return 2;
};
console.log(sum()+1);



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
const days = date.getDate();
const months = date.getMonth() + 1;
const years = date.getFullYear();
return (days + "/" + months + "/" + years);
  
}
console.log(formatDate());

//* again getting the dollar signs and {} *//


const addNew = (str) => 
  str.indexOf('New!') === 0 ? str : 'New! $(str)';
console.log(addNew('New!Offers'));

//* alot of these videos - i keep getting the same mistake while trying them such as the $ signs. *//



let a = 2;
console.log(a);

let str = "LoveisLove";
console.log(str);

let str = "SundayFunday";
console.log(str);

let ch = '5';
console.log(ch);

function func() { return (10 * 10);}
console.log (func());

let a = 5;
console.log ("the value of a is " + a);

let str = "LoveisLove";
console.log ("the value of str is " + str);

let ch = '2';
console.log ("the value of ch is " + ch);

let str = "testing123"
console.log(str);

function fun() { return (500+100);}
    console.log (fun());
                
    
  


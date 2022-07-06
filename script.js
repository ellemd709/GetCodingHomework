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



let x = 2;
console.log(x);

let love = "LoveisLove";
console.log(love);

let sun = "SundayFunday";
console.log(sun);

let ch = '5';
console.log(ch);

function func() { return (10 * 10);}
console.log (func());

let a = 5;
console.log ("the value of a is " + a);

let str = "LoveisLove";
console.log ("the value of str is " + str);

let b = '2';
console.log ("the value of b is " + b);

let test = "testing123"
console.log(test);

function fun() { return (500+100);}
    console.log (fun());



let key = 50;

function getPasscode(value) {

  let keyGenerator = function() {
    let key = 5; 
    console.log(` in keyGenerator: `, key);
    return key
    
  }

  let code = value * keyGenerator();
  console.log(` in getPasscode: `, key);
  return code;
  }


    
  
  



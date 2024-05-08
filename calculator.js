const readline = require('readline');

// creating readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function to ask for the operation
function getOperation(callback){
  rl.question('Choose an operation: +,-,*,/ : ',(operation)=>{
    callback(operation);
  });
}

// function to ask for numbers
function getNumbers(callback){
  rl.question('Enter first no.: ',(n1)=>{
    rl.question('Enter second no. :',(n2)=>{
      callback(parseFloat(n1) , parseFloat(n2));
    });
  });
}

//perform the calculation based on the operation
function calculate(operation,n1,n2){
  switch(operation){
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      if (n2==0){
        return "Cannot divide by zero";
      }
      return n1 / n2;
    default:
      return "invalid operation"
  }
}

// main function to run the calculator
function runCalculator(){
  getOperation((operation)=>{
    getNumbers((n1,n2)=>{
      const result = calculate(operation,n1,n2);
      console.log(`Result : ${result}`);
      rl.close(); //closing  the readline interface
    });
  });
}

// run the calculator
runCalculator();
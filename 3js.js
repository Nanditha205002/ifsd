const readline =  require('node:readline');
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
}); 
rl.question('Enter the first number:', (num1) =>{
  rl.question('Enter the second number:', (num2) =>{
    rl.question('Enter the third number:', (num3) =>{
    // convert the input strings to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const number3 = parseFloat(num3);

    // check if the input is valid numbers
    if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
     console.log('Please enter valid number.');
    } else{
      const sum = number1 + number2 + number3;
      console.log(`The sum of ${number1} , ${number2} and ${number3} is : ${sum}`);
    }
    rl.close();
  })
  })
})
const readline =  require('node:readline');
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
}); 
rl.question(`what is your name?`, name =>{
  console.log(`Hi ${name}!`);
  rl.close();
})
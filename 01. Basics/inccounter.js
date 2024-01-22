const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let value = 0;

function increaseValue(amount) {
  value += amount;
  console.log(`Value increased by ${amount}. Current value: ${value}`);
}

function handleUserInput(input) {
  const command = input.trim().toLowerCase();

  switch (command) {
    case 'increase':
      increaseValue(1); // Increase by 1 (you can change the amount)
      break;
    case 'exit':
      console.log('Goodbye!');
      rl.close();
      break;
    default:
      console.log('Invalid input. Please enter "increase" to increase the value or "exit" to quit.');
  }
}

console.log('Welcome to the Value Increaser!');
console.log('Type "increase" to increase the value or "exit" to quit.');

rl.on('line', handleUserInput);

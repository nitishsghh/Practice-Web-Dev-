const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let counter = 0;

function incrementCounter() {
  counter++;
  console.log(`Counter incremented. Current value: ${counter}`);
}

function decrementCounter() {
  counter--;
  console.log(`Counter decremented. Current value: ${counter}`);
}

function handleUserInput(input) {
  switch (input.trim().toLowerCase()) {
    case 'increment':
      incrementCounter();
      break;
    case 'decrement':
      decrementCounter();
      break;
    case 'exit':
      console.log('Goodbye!');
      rl.close();
      break;
    default:
      console.log('Invalid input. Please enter "increment", "decrement", or "exit".');
  }
}

console.log('Welcome to the Increment/Decrement Counter!');
console.log('Type "increment" to increase the counter, "decrement" to decrease it, or "exit" to quit.');

rl.on('line', handleUserInput);

let name = "Nitish Singh";

function reverseAndChangeName() {
  // Reverse the name
  const reversedName = name.split('').reverse().join('');

  // Change the name (you can implement your own logic here)
  name = "New Name";

  console.log(`Reversed Name: ${reversedName}`);
  console.log(`Changed Name: ${name}`);
}

console.log(`Original Name: ${name}`);

// Call the function every 3 seconds
setInterval(reverseAndChangeName, 3000); // 3000 milliseconds = 3 seconds

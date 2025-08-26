// JavaScript program to read integers, calculate mean and median

let numbers = [];

while (true) {

  let input = prompt("Enter an integer (or 'q' to quit):");

  if (input.toLowerCase() === 'q') {
    break;
  }

  let num = Number(input);


  if (!Number.isInteger(num)) {
    console.log(`Invalid input: "${input}" is not an integer. Please try again.`);
    continue;
  }

  numbers.push(num);
}

if (numbers.length === 0) {
  console.log("No numbers entered. Cannot compute mean or median.");
} else {

  let sum = numbers.reduce((acc, val) => acc + val, 0);
  let mean = sum / numbers.length;


  numbers.sort((a, b) => a - b);
  let median;
  let mid = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    
    median = (numbers[mid - 1] + numbers[mid]) / 2;
  } else {

    median = numbers[mid];
  }

  console.log(`Numbers entered: ${numbers.join(", ")}`);
  console.log(`Mean: ${mean}`);
  console.log(`Median: ${median}`);
}

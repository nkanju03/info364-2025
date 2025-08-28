// Node.js program: check if product of two numbers equals another
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

function askInput() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {
    // Handle quit condition (q or Q)
    if (input.toLowerCase() === "q") {
      console.log("\nYou entered:", numbers.length > 0 ? numbers.join(", ") : "no integers");

      // Check condition only if we have at least 3 numbers
      if (numbers.length >= 3) {
        let conditionMet = false;

        // Loop through all triplets to check: a * b == c
        for (let i = 0; i < numbers.length; i++) {
          for (let j = 0; j < numbers.length; j++) {
            for (let k = 0; k < numbers.length; k++) {
              if (i !== j && j !== k && i !== k) {
                if (numbers[i] * numbers[j] === numbers[k]) {
                  console.log(
                    `Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`
                  );
                  conditionMet = true;
                  break;
                }
              }
            }
            if (conditionMet) break;
          }
          if (conditionMet) break;
        }

        if (!conditionMet) {
          console.log("Condition was not met.");
        }
      } else {
        console.log("Condition was not met (not enough numbers).");
      }

      rl.close();
      return;
    }

    // Validate integer input
    let num = Number(input);
    if (Number.isInteger(num)) {
      numbers.push(num);
    } else {
      console.log("❌ Error: Please enter a valid integer or 'q' to quit.");
    }

    // Keep asking
    askInput();
  });
}

// Start input loop
askInput();

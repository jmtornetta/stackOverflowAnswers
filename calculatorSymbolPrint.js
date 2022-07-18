// Question: https://stackoverflow.com/questions/72921377/printing-out-pi-as-a-symbol-instead-of-the-numerical-value-but-calculating-with/72922110?noredirect=1#comment128800851_72922110
/* Calculator operation keys */

const sum = (input) => {
  // ... Sum operation
}
const product = () => {
  // ... Product operation
}

// ... Insert other operations ...

/* Calculator variable keys */

const pi = 3.1415926
const fun = 8008

/* Main logic to calculate values */

const calculate = (memory = []) => {
  // When equals is pressed, calculate the result by executing functions/values from memory array. Returns it in the result div.
  
  let result
  memory.forEach(
    // ...Perform calculations here by looping through memory array... 
  )

  // Return the result into the DOM; Best to abstract this into another function to keep DOM manipulation separate, but leaving it here for simplicity
  outputDisplay(result,'resultArea')
  return result
}

/* Memory */
const memory = [] // Holds numbers, operations, etc.
let number // Holds most recent number

/* Display input and output via DOM manipulation */

const inputPressed = (value, num = 0) => {
  // Call whenever a button is pressed other than equals (calculate) to update the input display.
  const regex = /[\d.]*/ // Just a sample regex for matching numbers. You will need to update for negative numbers, fractions, etc.
  let figure
  // Define "if" statements (or an object mapping) to connect functions/numbers to their corresponding display figures
  if (value === pi) {
    figure = 'π'  // Displays the figure (e.g. 'π')
    memory.push(num)
    memory.push(value)
  } else if (value === sum) {
    figure = '+'
    memory.push(num)
    memory.push(value)
  } else if (regex.test(value)) { 
    figure = value
    // If input is a number, update the number string (Note: there are FAR better ways of doing this, but leaving for simplicity.)
    num = `${num}` + `${value}`
  }
  // ...Insert more statements here...

  inputDisplay(figure, 'resultArea')
  return figure
}

const inputDisplay = (character, sel) => {
  // Put the figure in to the DOM (html)
  document.getElementById(sel).innerHTML += character
}

const outputDisplay = (value, sel) => {
  document.getElementById(sel).innerHTML = value
}

// Returns 'π' and also updates the DOM result area with this symbol. Still retains the number in memory for later operations.  
console.log(inputPressed(pi)) 

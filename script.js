//your code here
// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the input field and the button
  var inputField = document.getElementById("input1");
  var button = document.getElementById("calculateButton");

  // Add an event listener to the button
  button.addEventListener("click", function() {
    // Get the value of the input field
    var inputValue = inputField.value;

    try {
      // Evaluate the input value as a mathematical expression
      var result = eval(inputValue);

      // Update the result element with the calculated result
      var resultElement = document.getElementById("result");
      resultElement.innerHTML = "Result: " + result;
    } catch (error) {
      // Update the error element with the error message
      var errorElement = document.getElementById("error");
      errorElement.innerHTML = "Error: " + error.message;
    }
  });
});

   
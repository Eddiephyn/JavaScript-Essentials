let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  } else if (count === 30) {
    alert("Your instagram post gained 30 followers! Getting there!");
  }
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function resetCount() {
  count = 0; // Reset the count
  displayCount(); // Update the displayed count
  alert("Back to zero"); // Show alert message
}


// Essential ta add comments


// initializing a func, will contains the entered matrix size data and create a matrix

function getMatrix() {
    const size = parseInt(document.getElementById("matrixSize").value);
    if (isNaN(size) || size < 1) {
      alert("Please enter a valid matrix size.");
      return;
    }
    // document.write('Enter JavaScript Codes ')
    // Redirect to another HTML page after successful validation
    window.location.href = "index.html"; // Replace with the actual name of your HTML page
  }
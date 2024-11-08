// Essential ta add comments


// initializing a func, will contains the entered matrix size data and create a matrix

function getMatrix() {
    const size = parseInt(document.getElementById("matrixSize").value);
    if (isNaN(size) || size < 1) {
      alert("Please enter a valid matrix size.");
      return;
    }
  
    const matrixInputDiv = document.getElementById("matrixInput");
    matrixInputDiv.innerHTML = "";
  
    for (let i = 0; i < size; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.className = "matrix-row";
      for (let j = 0; j < size; j++) {
        const input = document.createElement("input");
        input.type = "number";
        input.id = `matrix-${i}-${j}`;
        rowDiv.appendChild(input);
      }
      matrixInputDiv.appendChild(rowDiv);
    }
  
    document.getElementById("calculateButton").style.display = "inline-block";
  }
// Add same name , it will be esier to get it 
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
  
  function calculateLDU() {
    const size = parseInt(document.getElementById("matrixSize").value);
    const matrix = [];
  
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        const value = parseFloat(document.getElementById(`matrix-${i}-${j}`).value);
        row.push(value);
      }
      matrix.push(row);
    }
  
    const steps = [];
    const [L, D, U] = lduFactorize(matrix, steps);
  
    displaySteps(steps);
  }
  
  function lduFactorize(matrix, steps) {
    const size = matrix.length;
    const L = Array.from({ length: size }, () => Array(size).fill(0));
    const D = Array.from({ length: size }, () => Array(size).fill(0));
    const U = Array.from({ length: size }, () => Array(size).fill(0));
  
    for (let i = 0; i < size; i++) {
      for (let j = i; j < size; j++) {
        let sum = 0;
        for (let k = 0; k < i; k++) sum += L[i][k] * D[k][k] * U[k][j];
        U[i][j] = matrix[i][j] - sum;
        if (i === j) D[i][i] = U[i][i];
        U[i][j] /= D[i][i];
      }
  
      for (let j = i + 1; j < size; j++) {
        let sum = 0;
        for (let k = 0; k < i; k++) sum += L[j][k] * D[k][k] * U[k][i];
        L[j][i] = (matrix[j][i] - sum) / D[i][i];
      }

      steps.push(`Step ${i + 1}: \nL:\n${printMatrix(L)}\nD:\n${printMatrix(D)}\nU:\n${printMatrix(U)}`);
    }

    return [L, D, U];
  }

  function printMatrix(matrix) {
    return matrix.map(row => row.map(val => val.toFixed(2)).join(" ")).join("\n");
  }

  function displaySteps(steps) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = steps.map(step => `<pre>${step}</pre>`).join("<hr>");
  }
  
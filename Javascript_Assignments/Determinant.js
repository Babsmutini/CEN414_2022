function determinant(matrix) {
	// Initialize the size of the matrix
	let m = matrix.length;
	let n = matrix[0].length;
  
	// Check if the matrix is square
	if (m !== n) {
	  return "Matrix is not square";
	}
  
	// If the matrix is 1x1, return the value of the single element in the matrix
	if (m === 1) {
	  return matrix[0][0];
	}
  
	// If the matrix is 2x2, return the value of (a*d) - (b*c)
	if (m === 2) {
	  return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);
	}
  
	// Initialize a variable 'determinant' as 0
	let determinant = 0;
  
	// Loop over the elements in the first row
	for (let i = 0; i < n; i++) {
	  // Create a copy of the matrix called 'temp'
	  let temp = [];
	  for (let j = 0; j < m - 1; j++) {
		temp.push([]);
		for (let k = 0; k < n - 1; k++) {
		  if (k < i) {
			temp[j].push(matrix[j + 1][k]);
		  } else {
			temp[j].push(matrix[j + 1][k + 1]);
		  }
		}
	  }
  
	  // Multiply the element by (-1)^(1+i)
	  let sign = (i % 2 === 0) ? 1 : -1;
  
	  // Find the determinant of the submatrix using the same method recursively
	  let subDeterminant = determinant(temp);
  
	  // Multiply the element from step c by the determinant from step d
	  let product = sign * matrix[0][i] * subDeterminant;
  
	  // Add the product from step e to the 'determinant' variable
	  determinant += product;
	}
  
	// Return the final value of the 'determinant' variable
	return determinant;
  }
  
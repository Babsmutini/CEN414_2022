// Implementing the function for finding the determinant of a 2 by 2 matrix
let mat_a = [
  [2, 3],
  [6, 5],
];

function det_a() {
  determinant = mat_a[0][0] * mat_a[1][1] - mat_a[0][1] * mat_a[1][0];
  console.log(determinant);
}

det_a();

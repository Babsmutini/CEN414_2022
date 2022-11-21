//array created
// let numbers = [0]
// number = 1;

// function fibonacci(numbers,number){
//     let sequence = 0;
//     for(let i = 0; i<numbers.length; i++){
//         if(number[0] < 2){
//             return
//         }else{
//           number[] = number[0] + number[1]
//         }
//     }
// }

// let number = 2;
// let n1 = 0;
// let n2 = 1;
// let nextTerm = 0;
// function fibonacci(number) {
//   for (i = 0; i < number; i++) {
//     console.log(n1);
//     n1 = n1 + n2;
//     n2 = n1;
//     n2 = nextTerm;
//   }
// }

function fibonacci(number) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  console.log("fibonnaci");

  for (let i = 1; i <= number; i++) {
    console.log(nextTerm);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

fibonacci(8);

//if n = 1
// for (i=0; i<)
// f = fn - 1 + fn - 2

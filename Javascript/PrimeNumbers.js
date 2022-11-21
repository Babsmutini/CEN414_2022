function primeNumber(number) {
  for (let i = 2; i < number; i++) {
    prime = 1;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        prime = 0;
        break;
      }
    }
    if (prime == 1) {
      console.log(i);
    }
  }
}

primeNumber(40);

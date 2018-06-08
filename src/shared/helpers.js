const calculateFactors = num => {
  const half = Math.floor(num / 2); // Ensures a whole number <= num.
  const factors = [1]; // 1 will be a part of every solution.
  let i, j;

  // Determine increment value for the loop and starting point.
  num % 2 === 0 ? ((i = 2), (j = 1)) : ((i = 3), (j = 2));

  for (i; i <= half; i += j) {
    num % i === 0 ? factors.push(i) : false;
  }

  factors.push(num);

  return factors;
};

export const getFactors = num => {
  const factors = calculateFactors(num);
  const half = Math.floor(factors.length / 2);
  let firstFactor, secondFactor;

  if (factors[half] >= num / factors[half]) {
    firstFactor = factors[half];
    secondFactor = num / firstFactor;
  } else {
    firstFactor = num / firstFactor;
    secondFactor = factors[half];
  }

  return {
    firstFactor,
    secondFactor,
  };
};

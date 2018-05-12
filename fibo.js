function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// console.log(slowFib(150));





function nthIterative(n) {
  const cache = Array(n);

  cache[0] = 0;
  cache[1] = 1;

  for (let i = 2; i < n; i++) {
    cache[i] = cache[i-1] + cache[i-2];
  }
  return cache[n];
}


const input = 100;
function timedRun(name, func, n) {
  const startTime = Date.now();
  const result = func(n);
  const endTime = Date.now();
  const diffTime = endTime - startTime;

  console.log(name);
  console.log(`Time: ${(diffTime/1000).toFixed(4)}`);
  console.log(`Answer: &{result}`);
  console.log();
}

timedRun('Nai', nthIterative, input);
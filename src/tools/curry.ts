type MyFunction = (...args: any[]) => any;

const curry = <F extends MyFunction, P = Parameters<F>>(
  fn: F,
  ...args: P[]
) => {
  if (args.length >= fn.length) {
    return fn(...args);
  }

  return (...more: P[]) => curry(fn, ...args, ...more);
};

export { curry };

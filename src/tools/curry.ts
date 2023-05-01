const curry = (fn, ...args) => {
  if (args.length >= fn.length) {
    return fn(...args);
  }

  return (...more) => curry(fn, ...args, ...more);
};

export { curry };

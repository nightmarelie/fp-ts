const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (arg: T) =>
    fns.reduce((prev, fn) => fn(prev), arg);

export { pipe };

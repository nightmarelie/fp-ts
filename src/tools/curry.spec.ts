import { curry } from "./curry";

describe("curry", () => {
  it("should curry a function", () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    const result = curriedAdd(1)(2)(3);

    expect(result).toEqual(6);
  });

  it("should curry a function with multiple arguments", () => {
    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    const result = curriedAdd(1, 2)(3);

    expect(result).toEqual(6);
  });

  it(`executes function if we passed all arguments `, () => {
    const add = (a, b, c) => a + b + c;
    const result = curry(add, 1, 2, 3);

    expect(result).toEqual(6);
  });
});

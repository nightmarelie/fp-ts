import { pipe } from "./pipe";

describe("pipe", () => {
  it("should pipe a list of functions", () => {
    const increment = (a: number) => a + 1;
    const double = (a: number) => a * 2;
    const square = (a: number) => a * a;
    const decrement = (a: number) => a - 1;

    const calculator = pipe(increment, increment, double, decrement);

    const result = calculator(2);

    expect(result).toEqual(7);
  });
});

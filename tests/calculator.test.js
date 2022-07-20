import { calculator } from "../code/calculator.js";

test("add", () => {
  expect(calculator.add(7, 9)).toBe(16);
});

test("subtract", () => {
  expect(calculator.subtract(45, -9)).toBe(54);
});

test("divide", () => {
  expect(calculator.divide(64, 8)).toBe(8);
});

test("multiply", () => {
  expect(calculator.multiply(-5, -6)).toBe(30);
});

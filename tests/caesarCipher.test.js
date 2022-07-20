import caesarCipher from "../code/caesarCipher.js";

test("wrapping from z to a", () => {
  expect(caesarCipher("zebra", 1)).toBe("afcsb");
});
test("keeping the same case", () => {
  expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
});
test("punctuation", () => {
  expect(caesarCipher("hello!", 1)).toBe("ifmmp!");
});

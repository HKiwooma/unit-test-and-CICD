const mark = require("../index");

test("testing the mark is a number", () => {
  expect(mark.isValidate()).toBe(true);
});
test("testing the grade mark", () => {
  expect(mark.computeGrade()).toBe("C");
});

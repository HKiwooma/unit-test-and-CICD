const mark = require("../index");

test("testing the mark is a number", () => {
  expect(mark.isValidate()).toBe(true);
});
test("testing the grade mark", () => {
  expect(mark.computeGrade()).toBe("C");
});
/* test("testing first switch case", () => {
  expect(mark.computeGrade()).toBe("A");
}); */
class Marks {
  constructor(subject, student, marks) {
    this.subject = subject;
    this.student = student;
    this.marks = marks;
  }
  computeGrade() {
    let score = null;
    switch (true) {
      case this.marks > 79 && this.marks <= 100:
        // console.log(`${this.student} grade in ${this.subject} is A, Exellent`);
        score = "A";
        break;
      case this.marks > 69 && this.marks < 80:
        // console.log(`${this.student} grade in ${this.subject} is B, V.Good`);
        score = "B";
        break;
      case this.marks > 59 && this.marks < 70:
        //console.log(`${this.student} grade in ${this.subject} is C, Good`);
        score = "C";
        break;
      case this.marks > 49 && this.marks < 50:
        /* console.log(
          `${this.student} grade in ${this.subject} is D, Fairly passed`
        ); */
        score = "D";
        break;
      case this.marks >= 0 && this.marks < 50:
        /* console.log(
          `${this.student} grade in ${this.subject} is F, Failed \n\t\t Read Harder`
        ); */
        score = "E";
        break;

      default:
        // console.log("OUT OF RANGE");
        score = console.log(
          `${this.student} grade in ${this.subject} is F, Failed \n\t\t Read Harder`
        );null;
        break;
    }
    return score;
  }
  isValidate() {
    let valid = true;
    if (this.student === null) {
      valid = false;
      // console.log("student doesnt exist");
    }
    if (typeof this.marks !== "number") {
      valid = false;
      // console.log("please put in a number");
    }
    if (this.marks < 0) {
      valid = false;
      // console.log("Mark should be greater than zero");
    }
    if (this.marks > 100) {
      valid = false;
      // console.log("Mark should be less than 100");
    }
    return valid;
  }
}

module.exports = Marks;

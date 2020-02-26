const marks = require("./models/marks");
//const student = require("./models/student");
//class
const sandraGrade = new marks("SST", "Sandra", 120 );
sandraGrade.computeGrade();

//const hajiGrade = new marks("Islam", "Haruna", 90);
// hajiGrade.computeGrade();

module.exports = sandraGrade;

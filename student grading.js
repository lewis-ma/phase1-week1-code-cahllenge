function studentGradeGenerator() {
    let grade = "";
    const marks = prompt("Enter student marks (between 0 and 100): ");
    if (marks > 100 || marks < 0) {
      return "Invalid marks entered!";
    } else if (marks >= 80) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }
    return `Grade: ${grade}`;
  }
  
  console.log(studentGradeGenerator());
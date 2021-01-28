// --------function returning function---------------------
function interviewQuestion(job) {
  if (job === "Teacher") {
    return function (name) {
      console.log(name + ", What is 2nd law of motion.");
    };
  } else if (job === "Web Developer") {
    return function (name) {
      console.log(name + ", What is objects in javaScript");
    };
  } else {
    return function (name) {
      console.log(name + ", What do you do");
    };
  }
}
// let teacherQuestion = interviewQuestion("Teacher");
// teacherQuestion("Saransh"); // Calling method 1
// or
interviewQuestion("Teacher")("Saransh"); // Calling method 2
interviewQuestion()("Saransh");

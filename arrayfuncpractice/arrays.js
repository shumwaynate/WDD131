//  arrays.js
// Activity 1: map to HTML list
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// Activity 2: Convert letter grades to GPA points
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3: Reduce to calculate GPA
const gpa = gpaPoints.reduce((total, item) => total + item, 0) / gpaPoints.length;
document.querySelector("#gpaOutput").textContent = `GPA: ${gpa.toFixed(2)}`;

// Activity 4: Filter short words
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(word => word.length < 6);
const shortWordsHtml = shortWords.map(word => `<li>${word}</li>`).join("");
document.querySelector("#shortWordsList").innerHTML = shortWordsHtml;

// Activity 5: indexOf check
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
const luckyMessage = luckyIndex !== -1
  ? `Lucky number ${luckyNumber} found at index ${luckyIndex}.`
  : `Lucky number ${luckyNumber} not found.`;
document.querySelector("#luckyOutput").textContent = luckyMessage;

const items = document.querySelectorAll('[data-purpose="item-full-title"]');

let aulaCount = 0;
let quizCount = 0;
let exerciseCount = 0;
let totalClasses = 0;

const logs = Array.from(items)
  .map((item) => item.textContent)
  .filter((text) => {
    if (text.includes("Section")) return false;

    if (text.includes("Lecture")) {
      lectureCount++;
      totalContent++;
    }
    if (text.includes("Quiz")) {
      quizCount++;
      totalContent++;
    }
    if (text.includes("Coding Exercise")) {
      exerciseCount++;
      totalContent++;
    }

    return true;
  })
  .join("\n");

const report = `
Counters:
- Total Lectures: ${lectureCount}
- Total Quizzes: ${quizCount}
- Total Coding Exercises: ${exerciseCount}
- Total Overall Content: ${totalContent}


Logs:
${logs}
`;

const blob = new Blob([report], { type: "text/plain" });
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "udemycontagem.txt";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

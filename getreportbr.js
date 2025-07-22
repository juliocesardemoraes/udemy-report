const items = document.querySelectorAll('[data-purpose="item-full-title"]');

let aulaCount = 0;
let quizCount = 0;
let exerciseCount = 0;
let totalClasses = 0;
let totalProjects = 0;
const projectsNames = [];

const logs = Array.from(items)
  .map((item) => item.textContent)
  .filter((text) => {
    if (text.includes("Seção")) return false;

    if (text.includes("Aula")) {
      aulaCount++;
      totalClasses++;
    }
    if (text.includes("Teste")) {
      quizCount++;
      totalClasses++;
    }
    if (text.includes("Exercício de programação")) {
      exerciseCount++;
      totalClasses++;
    }

    if (text.includes("Projeto")) {
      projectsNames.push(text);
      exerciseCount++;
      totalProjects++;
    }

    return true;
  })
  .join("\n");

const report = `
Contadores:
- Total de Aulas: ${aulaCount}
- Total de Quizzes: ${quizCount}
- Total de Projetos: ${totalProjects}
- Total de Exercícios de Programação: ${exerciseCount}
- Total Geral de Aulas+Exercs: ${totalClasses}


Projects names:

${projectsNames.map((item) => {
  return `${item}\n`;
})}

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

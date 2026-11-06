const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mobileMenu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

const log = document.getElementById("terminalLog");
const screen = document.getElementById("terminalScreen");
const input = document.getElementById("terminalInput");
const form = document.getElementById("terminalForm");
const history = [];
let historyIndex = 0;

function addLine(text, className = "term-output") {
  const line = document.createElement("div");
  line.className = `term-line ${className}`;
  line.textContent = text;
  log.appendChild(line);
  screen.scrollTop = screen.scrollHeight;
}
function runCommand(raw) {
  const command = raw.trim();
  if (!command) return;
  history.push(command);
  historyIndex = history.length;
  addLine(`abid:~$ ${command}`, "term-green");
  const [cmd, ...args] = command.split(/\s+/);
  const output = {
    help: "Available commands: help, whoami, pwd, ls, date, skills, projects, roadmap, about, df -h, free -h, ps aux, uname -a, clear",
    whoami: "Abid Khan | Aspiring Cloud & DevOps Engineer | India",
    pwd: "/home/abid/portfolio",
    ls: "about.txt  skills.txt  projects/  learning-roadmap.md  contact.txt",
    date: new Date().toString(),
    skills: "Foundation: Linux, Python, Git/GitHub\nLearning: Networking, AWS fundamentals\nNext: Docker, CI/CD, Terraform, monitoring",
    projects: "CaloriCurve | Delivery Management System (frontend MVP)\nLinux Health Reporter | Cryptocurrency Tracker",
    roadmap: "01 Linux → 02 Networking + Python → 03 AWS → 04 Docker + CI/CD → 05 Terraform + monitoring",
    about: "I am transitioning from frontend development into Cloud and DevOps engineering. I am building practical foundations and documenting my work."
  };
  if (cmd === "clear") { log.replaceChildren(); return; }
  if (cmd === "echo") { addLine(args.join(" ")); return; }
  if (cmd === "cat") {
    const files = {
      "about.txt": output.about,
      "skills.txt": output.skills,
      "contact.txt": "khanabid.dev@gmail.com | github.com/00Abid | LinkedIn: abid-khan-coder"
    };
    addLine(files[args[0]] || `cat: ${args[0] || "missing filename"}: file not found`, files[args[0]] ? "term-output" : "term-error");
    return;
  }
  if (command === "df -h") { addLine("Filesystem      Size  Used Avail Use% Mounted on\n/dev/simulated   40G   16G   24G  40% /"); return; }
  if (command === "free -h") { addLine("              total   used   free\nMem:          8.0Gi  3.1Gi  4.9Gi\nSwap:         2.0Gi     0B  2.0Gi"); return; }
  if (command === "ps aux") { addLine("USER   PID  %CPU  COMMAND\nroot     1   0.0  init (sample)\nabid  2048   0.2  terminal-demo (sample)"); return; }
  if (command === "uname -a") { addLine("Linux browser-sandbox 6.x simulated x86_64 GNU/Linux"); return; }
  if (output[cmd]) { addLine(output[cmd]); return; }
  addLine(`${cmd}: command not found. Type "help" to see supported demo commands.`, "term-error");
}
form.addEventListener("submit", event => {
  event.preventDefault();
  runCommand(input.value);
  input.value = "";
});
input.addEventListener("keydown", event => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (historyIndex > 0) input.value = history[--historyIndex];
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    if (historyIndex < history.length - 1) input.value = history[++historyIndex];
    else { historyIndex = history.length; input.value = ""; }
  }
});
document.querySelectorAll("[data-command]").forEach(button => button.addEventListener("click", () => {
  runCommand(button.dataset.command);
  document.getElementById("terminal").scrollIntoView({behavior:"smooth", block:"center"});
  input.focus();
}));
screen.addEventListener("click", () => input.focus());

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

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const log = document.getElementById("terminalLog");
const screen = document.getElementById("terminalScreen");
const input = document.getElementById("terminalInput");
const form = document.getElementById("terminalForm");
const history = [];
let historyIndex = 0;

function addLine(text, className = "term-output") {
  if (!log) return;
  const line = document.createElement("div");
  line.className = `term-line ${className}`;
  line.textContent = text;
  log.appendChild(line);
  if (screen) screen.scrollTop = screen.scrollHeight;
}

function runCommand(raw) {
  const command = raw.trim();
  if (!command) return;
  history.push(command);
  historyIndex = history.length;
  addLine(`abid:~$ ${command}`, "term-green");
  const [cmd, ...args] = command.split(/\s+/);

  const output = {
    help: "Available commands:\n  help, whoami, pwd, ls, date, skills, projects, roadmap, about, experience, clear\n  df -h, free -h, ps aux, uname -a, curl, chmod, ssh",
    whoami: "Abid Khan | Cloud & DevOps Engineer | India\nBuilding reliable systems, automating repeatable workflows, learning in public.",
    pwd: "/home/abid/cloud-devops-portfolio",
    ls: "about.md  skills/  projects/  experience/  roadmap.txt  contact.txt",
    date: new Date().toString(),
    skills: "• Linux & OS: Commands, permissions, processes, bash\n• Automation: Python, Bash, REST APIs, JSON/CSV\n• Cloud & DevOps (Learning): AWS, Git, Docker, CI/CD\n• Web Dev: Next.js, React, TypeScript, Tailwind\n• SEO: Technical SEO, Programmatic SEO, Core Web Vitals",
    projects: "1. Linux Health Reporter (Python, Bash, Telegram API)\n2. Delivery Management System (Next.js, TypeScript, Leaflet)\n3. CaloriCurve (React Native, Expo, Firebase)\n4. Python SEO Automation (Titan SEO Auditor, AI Visibility Checker)",
    roadmap: "Practising: Linux, Networking, Python/Bash, Git\nLearning: AWS Fundamentals, Docker, CI/CD\nNot Started: Terraform (IaC), Kubernetes, Monitoring (Prometheus/Grafana)",
    about: "I am Abid Khan, a technology professional with experience in technical SEO, web development and Python automation, now pursuing Cloud & DevOps engineering.",
    experience: "• SEO Specialist | Waynix Studio (Jan 2026 - Present)\n• Technical SEO Specialist | Industrial Automation India (Dec 2025 - May 2026)\n• SDE Intern | Sentari AI (Sep 2025 - Nov 2025)"
  };

  if (cmd === "clear") { if (log) log.replaceChildren(); return; }
  if (cmd === "echo") { addLine(args.join(" ")); return; }
  if (cmd === "cat") {
    const files = {
      "about.md": output.about,
      "roadmap.txt": output.roadmap,
      "contact.txt": "Email: khanabid.dev@gmail.com | LinkedIn: abid-khan-coder | GitHub: 00Abid"
    };
    addLine(files[args[0]] || `cat: ${args[0] || "missing filename"}: file not found`, files[args[0]] ? "term-output" : "term-error");
    return;
  }
  if (command === "df -h") { addLine("Filesystem      Size  Used Avail Use% Mounted on\n/dev/nvme0n1p1   50G   14G   36G  28% /\ntmpfs           4.0G     0  4.0G   0% /dev/shm"); return; }
  if (command === "free -h") { addLine("              total        used        free      shared  buff/cache   available\nMem:          15Gi       3.2Gi       8.4Gi       120Mi       3.4Gi        11Gi\nSwap:        4.0Gi          0B       4.0Gi"); return; }
  if (command === "ps aux") { addLine("USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.1  22556  4120 ?        Ss   09:00   0:01 /sbin/init\nabid      1337  0.4  0.8 128440 24100 pts/0    S+   09:15   0:03 python3 health_reporter.py"); return; }
  if (command === "uname -a") { addLine("Linux cloud-node-01 6.8.0-ubuntu-x86_64 #1 SMP GNU/Linux"); return; }
  if (cmd === "chmod") { addLine("chmod: permissions updated to 755 (rwxr-xr-x) for script.sh", "term-yellow"); return; }
  if (cmd === "curl") { addLine("HTTP/2 200 OK\nserver: cloudfront\ncontent-type: application/json\nx-cache: Hit from cloudfront"); return; }
  if (cmd === "ssh") { addLine("Authenticated to remote cloud host (ed25519-key verified). Safe simulated sandbox.", "term-yellow"); return; }
  if (cmd === "apt") { addLine("Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nAll packages are up to date.", "term-yellow"); return; }

  if (output[cmd]) { addLine(output[cmd]); return; }
  addLine(`${cmd}: command not found. Type "help" to see supported demo commands.`, "term-error");
}

form?.addEventListener("submit", event => {
  event.preventDefault();
  if (input) {
    runCommand(input.value);
    input.value = "";
  }
});

input?.addEventListener("keydown", event => {
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
  document.getElementById("terminal")?.scrollIntoView({ behavior: "smooth", block: "center" });
  input?.focus();
}));

screen?.addEventListener("click", () => input?.focus());

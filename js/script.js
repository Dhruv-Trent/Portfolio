// Loading Screen
window.addEventListener("load", () => {
  setTimeout(function () {
    document.querySelector(".con").style.display = "none";
    document.querySelector(".afterLoading").style.display = "block";
  }, 60);
});

// For Mode Changing Night and Light
const toggleBtn = document.getElementById("modeToggle");
const icon = toggleBtn.querySelector(".ModeToggleCircle i");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

// For SmallText after Name
const texts = [
  "Software Engineer",
  "Web Developer",
  "Programmer",
  "Tech Enthusiast",
  "Creative Coder",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("SmallText").textContent = "I am " + letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
})();

// For BgParticles
const canvas = document.getElementById("BgParticles");
const ctx = canvas.getContext("2d");

let particlesArray;
const colors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#A66DD4",
  "#00CFC1",
  "#FFA987",
  "#FF5DA2",
  "#8CFF98",
  "#FFFC9B",
  "#6E6EFF",
  "#5CE1E6",
];

function BGParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 1,
      dx: (Math.random() - 0.5) * 1,
      dy: (Math.random() - 0.5) * 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
}

function MoveParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(MoveParticles);
}

window.addEventListener("resize", () => {
  BGParticles();
});

BGParticles();
MoveParticles();

// For Fake-Code Scroller inn the BG
const codeLines = [
  "# Portfolio Project by Dhruv Patel",
  "# Python Version - Background Scroll",
  "",
  "import time",
  "import requests",
  "import threading",
  "",
  "class Project:",
  "    def __init__(self, name, tech_stack, status='In Progress'):",
  "        self.name = name",
  "        self.tech_stack = tech_stack",
  "        self.status = status",
  "",
  "    def show_details(self):",
  "        print(f'Project: {self.name}')",
  "        print(f'Tech Stack: {', '.join(self.tech_stack)}')",
  "        print(f'Status: {self.status}')",
  "",
  "    def deploy(self):",
  "        print(f'Deploying {self.name}...')",
  "        time.sleep(2)",
  "        print(f'{self.name} deployed successfully! ')",
  "",
  "",
  "class Developer:",
  "    def __init__(self, name, skills):",
  "        self.name = name",
  "        self.skills = skills",
  "",
  "    def introduce(self):",
  "        print(f'Hello, I am {self.name}')",
  "        print('Skills:')",
  "        for skill in self.skills:",
  "            print(f'- {skill}')",
  "",
  "    def work_on_project(self, project):",
  "        print(f'Starting work on {project.name}...')",
  "        project.status = 'Completed'",
  "        time.sleep(1)",
  "        print(f'Completed project: {project.name}')",
  "",
  "",
  "# Define skills",
  "skills = [",
  "    'Python',",
  "    'JavaScript',",
  "    'React',",
  "    'Node.js',",
  "    'Django',",
  "    'Flask',",
  "    'Git',",
  "    'REST APIs'",
  "]",
  "",
  "# Instantiate developer",
  "dhruv = Developer('Dhruv Patel', skills)",
  "",
  "# Introduce developer",
  "dhruv.introduce()",
  "",
  "# Define projects",
  "portfolio_site = Project('Portfolio Website', ['HTML', 'CSS', 'JavaScript', 'Python'])",
  "blog_platform = Project('Blog Platform', ['Django', 'REST APIs', 'PostgreSQL'])",
  "",
  "# Work on projects",
  "dhruv.work_on_project(portfolio_site)",
  "dhruv.work_on_project(blog_platform)",
  "",
  "# Show project details",
  "portfolio_site.show_details()",
  "blog_platform.show_details()",
  "",
  "# Simulate API call",
  "def fetch_project_data():",
  "    print('Fetching project data from API...')",
  "    try:",
  "        response = requests.get('https://api.portfolio.com/projects')",
  "        if response.status_code == 200:",
  "            print('Projects loaded successfully.')",
  "        else:",
  "            print('Error loading projects.')",
  "    except Exception as e:",
  "        print(f'An error occurred: {e}')",
  "",
  "# Run API call in separate thread",
  "api_thread = threading.Thread(target=fetch_project_data)",
  "api_thread.start()",
  "",
  "# TODO: Add dark mode toggle",
  "# TODO: Implement unit tests",
  "# TODO: Write documentation",
  "# TODO: Improve SEO",
  "# TODO: Optimize image loading",
  "",
  "# Keep learning, keep building ",
  "",
  "# End of Script",
  "# -------------------------------",
];

const codeBackgroundDiv = document.querySelector(".codeBackground");
let repeatedCode = "";

for (let i = 0; i < 50; i++) {
  repeatedCode += codeLines.join("\n") + "\n\n";
}

codeBackgroundDiv.textContent = repeatedCode;

// For Projects
function openProject(index) {
  document.getElementById(`Project${index}`).style.display = "flex";
}

function closeProject(index) {
  document.getElementById(`Project${index}`).style.display = "none";
}

window.addEventListener("click", (e) => {
  document.querySelectorAll(".projMoreBox").forEach((box) => {
    if (e.target === box) {
      box.style.display = "none";
    }
  });
});

// For Skills
const skills = document.querySelectorAll(".SkillBox ul li");
let i = 0;

setInterval(() => {
  skills.forEach((skill) => skill.classList.remove("active"));
  skills[i].classList.add("active");
  i = (i + 1) % skills.length;
}, 1000);



(function () {
  emailjs.init("Erjwco5V3gW_JxgXi");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_ilg5pce", "template_4cquh5s", this)
    .then(() => {
      showToast("✅ Message sent successfully!", "success");
      this.reset();
    }, (error) => {
      console.error("Failed to send message:", error);
      showToast("❌ Failed to send message. Please try again later.", "error");
    });
});

function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  document.getElementById("toast-container").appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 6000); // total visible time = 3s + fadeOut time
}


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".rightNav ul li a");

// Handle scroll event
window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

// Handle click event to update active class immediately
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});


// For Welcome Effects like fade in amd all
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.1 // trigger when 10% visible
});

document.querySelectorAll('.animate-on-scroll').forEach(elem => {
  observer.observe(elem);
});
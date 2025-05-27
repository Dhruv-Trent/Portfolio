document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".rightSideNav ul li a");
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("id");
                    navLinks.forEach(link => {
                        link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
                    });
                }
            });
        },
        {
            threshold: 0.5
        }
    );

    sections.forEach(section => observer.observe(section));
    
    
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    const animatedSections = document.querySelectorAll(".animate");
    animatedSections.forEach((section) => {
        observer.observe(section);
    });
});

document.querySelector(".contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent!");
  });
  

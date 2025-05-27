document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll(".rightSideNav ul li a");
  
    
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
  });
  
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

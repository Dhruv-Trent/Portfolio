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


    const sectionObserver = new IntersectionObserver(
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
        { threshold: 0.5 }
    );

    sections.forEach(section => sectionObserver.observe(section));


    const animatedSections = document.querySelectorAll(".animate");
    const animationObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    animatedSections.forEach(section => animationObserver.observe(section));


    const contactForm = document.querySelector(".contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Message sent!");
        });
    }





    let LaunguageDiv = document.getElementById("LaunguageDivId");

    const DivForLine = document.createElement("div");
    DivForLine.classList.add("LineDiv");
    LaunguageDiv.appendChild(DivForLine);
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "connectionLines");
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.pointerEvents = "none"; 
    LaunguageDiv.appendChild(svg);
    
    const ContainerDiv = document.createElement("div");
    ContainerDiv.classList.add("lanItemContainer");
    
    let launguageList = ["Python", "C#", "Html", "C", "C++", "Javascript", "Java"];
    
    for (let i = 0; i < launguageList.length; i++) {
        const lan = launguageList[i];
        let div = document.createElement("div");
        div.classList.add("lanItem");
        div.innerHTML = `<h1>${lan}</h1>`;
        ContainerDiv.appendChild(div);
    }
    
    DivForLine.after(ContainerDiv);
    

    setTimeout(() => {
        const lineDivRect = DivForLine.getBoundingClientRect();
        const items = ContainerDiv.querySelectorAll(".lanItem");
        const svgRect = svg.getBoundingClientRect();
    
        items.forEach(item => {
            const itemRect = item.getBoundingClientRect();
        
            const x1 = lineDivRect.left + lineDivRect.width / 2 - svgRect.left;
            const y1 = lineDivRect.bottom - svgRect.top;
        
            const x2 = itemRect.left + itemRect.width / 2 - svgRect.left;
            const y2 = itemRect.top - svgRect.top;
        
            const controlY = y1 + (y2 - y1) / 2; // control point halfway for curve
        
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const d = `M${x1},${y1} Q${x2},${controlY} ${x2},${y2}`;
            path.setAttribute("d", d);
            path.setAttribute("stroke", "purple");
            path.setAttribute("fill", "none");
            path.setAttribute("stroke-width", "2");
        
            svg.appendChild(path);
        });
    }, 100);


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'dropSwing 1s ease-out forwards';
            }
        });
    }, {
        threshold: 0.1
    });
    
    items.forEach(item => {
        item.style.opacity = 0; // hidden until triggered
        observer.observe(item);
    });
});

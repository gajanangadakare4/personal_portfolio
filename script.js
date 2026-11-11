// MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuBtn.innerHTML = navLinks.classList.contains("show")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// TYPING EFFECT
const roles = [
    "Software Developer",
    "Full Stack Developer",
    "Cybersecurity Professional",
    "Ethical Hacking Enthusiast",
    "Security-Focused Engineer"
];

let role = 0, letter = 0, deleting = false;
const typing = document.getElementById("typing");

function type() {
    const current = roles[role];
    typing.textContent = deleting
        ? current.substring(0, letter--)
        : current.substring(0, letter++);

    let delay = deleting ? 45 : 90;

    if (!deleting && letter > current.length) {
        deleting = true; delay = 1300;
    } else if (deleting && letter < 0) {
        deleting = false; letter = 0; role = (role + 1) % roles.length;
    }
    setTimeout(type, delay);
}
type();

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// ANIMATED PARTICLE / CONNECTION BACKGROUND
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let points = [], w, h;

function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width; h = rect.height;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    points = Array.from({ length: Math.min(75, Math.floor(w / 12)) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35
    }));
}

function animate() {
    ctx.clearRect(0, 0, w, h);
    points.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
        ctx.fillStyle = "#4e8cff";
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
            let q = points[j];
            let dx = p.x - q.x, dy = p.y - q.y;
            let d = Math.sqrt(dx * dx + dy * dy);
            if (d < 130) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.strokeStyle = `rgba(110,130,255,${(1 - d / 130) * .45})`;
                ctx.lineWidth = .7;
                ctx.stroke();
            }
        }
    });
    requestAnimationFrame(animate);
}

resize();
animate();
window.addEventListener("resize", resize);

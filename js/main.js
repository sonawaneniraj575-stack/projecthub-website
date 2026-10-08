(function () {
  const cfg = window.PROJECTHUB_CONFIG;
  const page = document.body.dataset.page || "";
  const navItems = [["projects.html","Projects","projects"],["services.html","Services","services"],["how-it-works.html","How It Works","how"],["about.html","About","about"],["faq.html","FAQ","faq"],["contact.html","Contact","contact"]];
  const waUrl = (message) => `https://wa.me/${cfg.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  const genericMessage = "Hi ProjectHub 👋\nI'd like to know more about your projects.";
  const projectMessage = (p) => `Hi ProjectHub 👋\n\nI'm interested in this project:\n\nProject: ${p.name}\nCategory: ${p.category}\nPrice: ${p.price ? formatPrice(p.price) : "Custom quote"}\n\nI'd like to know more about the project, what is included, and the next steps.`;
  const formatPrice = (price) => price ? new Intl.NumberFormat("en-IN", { style: "currency", currency: cfg.currency, maximumFractionDigits: 0 }).format(price) : "Custom quote";
  const header = `<header class="site-header"><div class="container nav"><a class="logo" href="index.html">Project<span>Hub</span></a><button class="menu-button" aria-label="Open menu" aria-expanded="false">☰</button><nav class="nav-links">${navItems.map(([href,label,key]) => `<a href="${href}" class="${page===key?"active":""}">${label}</a>`).join("")}<a class="button button-primary" href="projects.html">Explore Projects</a></nav></div></header>`;
  const footer = `<footer class="site-footer"><div class="container"><div class="footer-grid"><div><a class="logo" href="index.html">Project<span>Hub</span></a><p class="footer-note">Build something worth showing. Practical software for students and growing ideas.</p></div><div><h3>Explore</h3><a href="projects.html">Projects</a><a href="services.html">Services</a><a href="how-it-works.html">How It Works</a><a href="about.html">About</a><a href="faq.html">FAQ</a></div><div><h3>Company</h3><a href="contact.html">Contact</a><a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms & Conditions</a><a href="refund-policy.html">Refund Policy</a><a href="disclaimer.html">Disclaimer</a></div><div><h3>Connect</h3><a class="config-whatsapp" href="#">WhatsApp</a><a class="config-email" href="#">Email</a><a class="config-instagram" href="#" target="_blank" rel="noreferrer">Instagram</a></div></div><div class="copyright"><span>© ${new Date().getFullYear()} ProjectHub. All rights reserved.</span><span>Static site · No account required</span></div></div></footer><a class="floating-wa" href="#" aria-label="Chat on WhatsApp">✆</a>`;
  document.querySelector("#site-header").innerHTML = header;
  document.querySelector("#site-footer").innerHTML = footer;
  document.querySelectorAll(".config-whatsapp,.floating-wa").forEach((el) => { el.href = waUrl(genericMessage); el.target = "_blank"; el.rel = "noreferrer"; });
  document.querySelectorAll(".config-email").forEach((el) => { el.href = `mailto:${cfg.email}`; el.textContent = cfg.email; });
  document.querySelectorAll(".config-instagram").forEach((el) => { el.href = cfg.instagram; });
  const menu = document.querySelector(".menu-button"), links = document.querySelector(".nav-links");
  menu.addEventListener("click", () => { const open = links.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
  window.ProjectHub = { waUrl, projectMessage, formatPrice };
})();

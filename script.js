const cfg = SITE_CONFIG;
const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
setText("top-location", cfg.address);
setText("top-phone", cfg.phoneDisplay); document.getElementById("top-phone").href = "tel:" + cfg.phoneLink;
setText("top-email", cfg.email); document.getElementById("top-email").href = "mailto:" + cfg.email;
setText("contact-phone", cfg.phoneDisplay); document.getElementById("contact-phone").href = "tel:" + cfg.phoneLink;
setText("contact-email", cfg.email); document.getElementById("contact-email").href = "mailto:" + cfg.email;
setText("contact-address", cfg.address);
document.getElementById("contact-whatsapp").href = "https://wa.me/" + cfg.whatsapp;
setText("year", new Date().getFullYear());

const grid = document.getElementById("service-grid");
const select = document.getElementById("service-select");
cfg.services.forEach((service) => {
  const card = document.createElement("article");
  card.className = "service-card";
  card.innerHTML = `<div class="service-image" style="background-image:url('${service.image}')"><span>${service.icon}</span></div><div class="service-info"><h3>${service.name}</h3><p>${service.description}</p></div>`;
  grid.appendChild(card);
  const option = document.createElement("option"); option.value = service.name; option.textContent = service.name; select.appendChild(option);
});

document.getElementById("quote-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Website enquiry — " + data.get("service"));
  const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nService: ${data.get("service")}\nMessage: ${data.get("message")}`);
  const message = `Website enquiry\\nName: ${data.get("name")}\\nPhone: ${data.get("phone")}\\nService: ${data.get("service")}\\nMessage: ${data.get("message")}`;
  window.open(`https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
document.getElementById("menu-toggle").addEventListener("click", () => document.getElementById("nav-links").classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => document.getElementById("nav-links").classList.remove("open")));
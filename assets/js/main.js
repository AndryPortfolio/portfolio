// Shared behaviour: nav toggle, project card rendering, filters, lightbox.

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFooterYear();
  initLightbox();

  const featuredMount = document.getElementById("featured-projects");
  if (featuredMount && typeof PROJECTS !== "undefined") {
    renderProjectGrid(featuredMount, PROJECTS.filter((p) => p.featured));
  }

  const portfolioMount = document.getElementById("portfolio-grid");
  if (portfolioMount && typeof PROJECTS !== "undefined") {
    initPortfolio(portfolioMount);
  }
});

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

function initFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Project card rendering ---------- */

function linkIcon(kind) {
  const icons = {
    itch: "🎮",
    youtube: "▶",
    github: "💻",
    web: "🔗"
  };
  return icons[kind] || "🔗";
}

function linkLabel(kind) {
  const labels = { itch: "Play on itch.io", youtube: "Watch video", github: "Source", web: "Play" };
  return labels[kind] || "Link";
}

function projectCardHTML(project, index) {
  const cover = `assets/img/projects/${project.slug}/${project.images[0]}`;
  const tags = project.tags.map((t) => `<span class="tag">${t}</span>`).join("");
  const linkEntries = Object.entries(project.links || {}).filter(([, v]) => v);
  const links = linkEntries
    .map(
      ([kind, url]) =>
        `<a class="btn btn-sm" href="${url}" target="_blank" rel="noopener">${linkIcon(kind)} ${linkLabel(kind)}</a>`
    )
    .join("");
  const linksBlock = linkEntries.length
    ? `<div class="project-links">${links}</div>`
    : `<div class="no-links-note">Link coming soon</div>`;

  return `
    <article class="project-card" data-tags="${project.tags.join(",").toLowerCase()}" data-year="${project.year}">
      <div class="project-thumb" data-gallery="${project.slug}" data-index="0">
        <img src="${cover}" alt="${project.title} screenshot" loading="lazy" />
      </div>
      <div class="project-body">
        <div class="project-meta-row">
          <span class="project-year">${project.year}</span>
          <span class="project-role">${project.role} · ${project.platform}</span>
        </div>
        <h3>${project.title}</h3>
        <div class="tag-row">${tags}</div>
        <p class="project-desc">${project.description}</p>
        ${linksBlock}
      </div>
    </article>
  `;
}

function renderProjectGrid(mount, projects) {
  mount.innerHTML = projects.map((p) => projectCardHTML(p)).join("");
  bindGalleryClicks(mount, projects);
}

function initPortfolio(mount) {
  const filterBar = document.getElementById("filter-bar");
  const allProjects = [...PROJECTS].sort((a, b) => b.year - a.year);

  const years = [...new Set(allProjects.map((p) => p.year))].sort((a, b) => b - a);
  if (filterBar) {
    filterBar.innerHTML =
      `<button class="filter-chip active" data-year="all">All Years</button>` +
      years.map((y) => `<button class="filter-chip" data-year="${y}">${y}</button>`).join("");

    filterBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;
      filterBar.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const year = chip.dataset.year;
      mount.querySelectorAll(".project-card").forEach((card) => {
        card.style.display = year === "all" || card.dataset.year === year ? "" : "none";
      });
    });
  }

  renderProjectGrid(mount, allProjects);
}

/* ---------- Lightbox ---------- */

let lightboxState = { images: [], index: 0 };

function bindGalleryClicks(mount, projects) {
  mount.querySelectorAll(".project-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const slug = thumb.dataset.gallery;
      const project = projects.find((p) => p.slug === slug);
      if (!project) return;
      lightboxState.images = project.images.map((img) => `assets/img/projects/${slug}/${img}`);
      lightboxState.index = 0;
      openLightbox();
    });
  });
}

function initLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  lb.querySelector(".lightbox-prev").addEventListener("click", () => stepLightbox(-1));
  lb.querySelector(".lightbox-next").addEventListener("click", () => stepLightbox(1));
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

function openLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  updateLightboxImage();
  lb.classList.add("open");
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (lb) lb.classList.remove("open");
}

function stepLightbox(dir) {
  const total = lightboxState.images.length;
  lightboxState.index = (lightboxState.index + dir + total) % total;
  updateLightboxImage();
}

function updateLightboxImage() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  const img = lb.querySelector("img");
  const count = lb.querySelector(".lightbox-count");
  img.src = lightboxState.images[lightboxState.index];
  if (count) count.textContent = `${lightboxState.index + 1} / ${lightboxState.images.length}`;
  const multi = lightboxState.images.length > 1;
  lb.querySelector(".lightbox-prev").style.display = multi ? "flex" : "none";
  lb.querySelector(".lightbox-next").style.display = multi ? "flex" : "none";
}

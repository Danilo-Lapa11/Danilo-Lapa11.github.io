// Textos fixos da interface; o conteúdo pessoal fica em content.js
const UI = {
  pt: {
    "ui.skip": "Pular para o conteúdo",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.research": "Pesquisa",
    "nav.certs": "Certificações",
    "car.prev": "Anterior",
    "car.next": "Próximo",
    "nav.contact": "Contato",
    "hero.github": "Ver GitHub",
    "hero.projects": "Explorar projetos",
    "projects.eyebrow": "Projetos em destaque",
    "projects.title": "Estudos de caso e modelos de machine learning.",
    "projects.lead": "Uma seleção do meu GitHub, do case de negócio à classificação com metodologia CRISP-DM.",
    "research.title": "Ciência de dados aplicada à saúde pública.",
    "research.lead": "Pesquisa publicada em periódico peer-reviewed, unindo machine learning e dados epidemiológicos.",
    "certs.title": "Credenciais que comprovam a base.",
    "certs.lead": "Certificações e treinamentos em IA, machine learning e dados, de Microsoft, AWS e Databricks.",
    "exp.eyebrow": "Trajetória",
    "exp.title": "Onde venho aplicando dados.",
    "exp.lead": "Da monitoria e pesquisa na UFPE à ciência de dados em produção.",
    "skills.eyebrow": "Stack & ferramentas",
    "skills.title": "As ferramentas que uso para entregar do dado ao produto.",
    "contact.title": "Vamos construir algo com dados?",
    "contact.lead": "Aberto a colaborações, freelances e conversas sobre ciência de dados, IA aplicada e dados públicos.",
    viewRepo: "Ver repositório",
    readPaper: "Ler o artigo · DOI",
    viewPost: "Ver publicação",
    linkedinPost: "Post no LinkedIn",
    certified: "Certificado",
    issued: "Emitido em",
    verify: "Verificar credencial",
    aboutCert: "Sobre a certificação",
    lab: "Laboratório",
    langBtn: "EN",
    langAria: "Switch to English",
    themeAria: "Alternar tema claro/escuro",
    footer: "Data Scientist · Recife, Brasil",
    docTitle: "Portfólio",
  },
  en: {
    "ui.skip": "Skip to content",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.research": "Research",
    "nav.certs": "Certifications",
    "car.prev": "Previous",
    "car.next": "Next",
    "nav.contact": "Contact",
    "hero.github": "View GitHub",
    "hero.projects": "Explore projects",
    "projects.eyebrow": "Featured projects",
    "projects.title": "Case studies and machine learning models.",
    "projects.lead": "A selection from my GitHub, from business cases to classification with the CRISP-DM methodology.",
    "research.title": "Data science applied to public health.",
    "research.lead": "Peer-reviewed research combining machine learning and epidemiological data.",
    "certs.title": "Credentials behind the groundwork.",
    "certs.lead": "Certifications and training in AI, machine learning and data from Microsoft, AWS and Databricks.",
    "exp.eyebrow": "Path",
    "exp.title": "Where I've been putting data to work.",
    "exp.lead": "From teaching and research at UFPE to data science in production.",
    "skills.eyebrow": "Stack & tools",
    "skills.title": "The tools I use to go from data to product.",
    "contact.title": "Shall we build something with data?",
    "contact.lead": "Open to collaborations, freelance work and conversations about data science, applied AI and public data.",
    viewRepo: "View repository",
    readPaper: "Read the paper · DOI",
    viewPost: "View post",
    linkedinPost: "LinkedIn post",
    certified: "Certified",
    issued: "Issued",
    verify: "Verify credential",
    aboutCert: "About this certification",
    lab: "Lab",
    langBtn: "PT",
    langAria: "Mudar para português",
    themeAria: "Toggle light/dark theme",
    footer: "Data Scientist · Recife, Brazil",
    docTitle: "Portfolio",
  },
};

const GH = CONTENT.contact.github;

const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowUpRight: '<svg class="farrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
};

// Capas ilustradas dos cards (SVG gerado, sem imagens externas)
const COVERS = {
  bars: (id) => `
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b2b4a"/><stop offset="1" stop-color="#0c5b51"/></linearGradient></defs>
    <rect width="400" height="225" fill="url(#${id})"/>
    <g stroke="rgba(255,255,255,.08)"><line x1="0" y1="64" x2="400" y2="64"/><line x1="0" y1="120" x2="400" y2="120"/><line x1="0" y1="176" x2="400" y2="176"/></g>
    <g><rect x="52" y="150" width="30" height="45" rx="3" fill="rgba(255,255,255,.22)"/><rect x="102" y="128" width="30" height="67" rx="3" fill="rgba(255,255,255,.3)"/><rect x="152" y="140" width="30" height="55" rx="3" fill="rgba(255,255,255,.26)"/><rect x="202" y="104" width="30" height="91" rx="3" fill="rgba(255,255,255,.34)"/><rect x="252" y="86" width="30" height="109" rx="3" fill="#d98a3d"/><rect x="302" y="62" width="30" height="133" rx="3" fill="#e6a35d"/></g>
    <polyline points="67,150 117,128 167,140 217,104 267,86 317,62" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".92"/>
    <g fill="#fff"><circle cx="67" cy="150" r="3.5"/><circle cx="117" cy="128" r="3.5"/><circle cx="167" cy="140" r="3.5"/><circle cx="217" cy="104" r="3.5"/><circle cx="267" cy="86" r="3.5"/><circle cx="317" cy="62" r="3.5"/></g>`,
  scatter: (id) => `
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0e6f62"/><stop offset="1" stop-color="#0a4a43"/></linearGradient></defs>
    <rect width="400" height="225" fill="url(#${id})"/>
    <path d="M70 18 C165 95 150 150 345 210" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2" stroke-dasharray="7 6"/>
    <g fill="rgba(255,255,255,.82)"><circle cx="92" cy="58" r="6"/><circle cx="126" cy="44" r="6"/><circle cx="74" cy="92" r="6"/><circle cx="118" cy="96" r="6"/><circle cx="150" cy="66" r="6"/><circle cx="96" cy="128" r="6"/><circle cx="158" cy="110" r="6"/></g>
    <g fill="#e6a35d"><circle cx="248" cy="150" r="6"/><circle cx="288" cy="120" r="6"/><circle cx="268" cy="182" r="6"/><circle cx="312" cy="158" r="6"/><circle cx="240" cy="112" r="6"/><circle cx="300" cy="196" r="6"/><circle cx="330" cy="140" r="6"/></g>`,
  benchmark: (id) => `
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#17294a"/><stop offset="1" stop-color="#20406e"/></linearGradient></defs>
    <rect width="400" height="225" fill="url(#${id})"/>
    <line x1="40" y1="186" x2="360" y2="186" stroke="rgba(255,255,255,.18)" stroke-width="1.5"/>
    <g><rect x="66" y="92" width="48" height="94" rx="4" fill="#15b39a"/><rect x="140" y="70" width="48" height="116" rx="4" fill="#e6a35d"/><rect x="214" y="110" width="48" height="76" rx="4" fill="rgba(255,255,255,.55)"/><rect x="288" y="56" width="48" height="130" rx="4" fill="#5bbfae"/></g>
    <g fill="rgba(255,255,255,.9)" font-family="monospace" font-size="12"><text x="78" y="205">M1</text><text x="152" y="205">M2</text><text x="226" y="205">M3</text><text x="300" y="205">M4</text></g>`,
  series: (id) => `
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0c5b51"/><stop offset="1" stop-color="#1b2b4a"/></linearGradient></defs>
    <rect width="400" height="225" fill="url(#${id})"/>
    <g stroke="rgba(255,255,255,.08)"><line x1="0" y1="60" x2="400" y2="60"/><line x1="0" y1="112" x2="400" y2="112"/><line x1="0" y1="164" x2="400" y2="164"/></g>
    <line x1="262" y1="24" x2="262" y2="200" stroke="rgba(255,255,255,.3)" stroke-dasharray="4 5"/>
    <path d="M262 98 L300 82 L340 70 L372 54 L372 96 L340 104 L300 112 L262 98 Z" fill="rgba(230,163,93,.22)"/>
    <polyline points="28,150 52,138 74,146 98,120 120,128 146,104 168,114 192,96 214,108 238,90 262,98" fill="none" stroke="#fff" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    <polyline points="262,98 300,96 340,86 372,76" fill="none" stroke="#e6a35d" stroke-width="2.5" stroke-dasharray="6 5" stroke-linecap="round"/>
    <circle cx="262" cy="98" r="4.5" fill="#e6a35d" stroke="#fff" stroke-width="1.5"/>`,
  paper: (id) => `
    <defs>
      <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0e6f62"/><stop offset="1" stop-color="#0a4038"/></linearGradient>
      <linearGradient id="${id}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(255,255,255,.26)"/><stop offset="1" stop-color="rgba(255,255,255,0)"/></linearGradient>
    </defs>
    <rect width="400" height="225" fill="url(#${id})"/>
    <g fill="rgba(255,255,255,.08)"><rect x="40" y="140" width="14" height="60"/><rect x="78" y="120" width="14" height="80"/><rect x="116" y="150" width="14" height="50"/><rect x="154" y="100" width="14" height="100"/><rect x="192" y="130" width="14" height="70"/><rect x="230" y="90" width="14" height="110"/><rect x="268" y="124" width="14" height="76"/><rect x="306" y="150" width="14" height="50"/><rect x="344" y="134" width="14" height="66"/></g>
    <path d="M30 185 C80 180 95 120 135 112 C175 104 180 150 210 148 C245 146 250 70 300 66 C335 63 350 110 380 120 L380 210 L30 210 Z" fill="url(#${id}a)"/>
    <path d="M30 185 C80 180 95 120 135 112 C175 104 180 150 210 148 C245 146 250 70 300 66 C335 63 350 110 380 120" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".92"/>
    <g fill="#e6a35d" stroke="#fff" stroke-width="1.5"><circle cx="135" cy="112" r="5"/><circle cx="300" cy="66" r="5"/></g>`,
  linkedin: (id, flip) => `
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a66c2"/><stop offset="1" stop-color="#073f7a"/></linearGradient></defs>
    <rect width="400" height="225" fill="url(#${id})"/>
    <g stroke="rgba(255,255,255,.22)" stroke-width="1.5">${flip
      ? '<line x1="296" y1="150" x2="340" y2="104"/><line x1="340" y1="104" x2="320" y2="56"/><line x1="296" y1="150" x2="356" y2="78"/>'
      : '<line x1="300" y1="54" x2="340" y2="96"/><line x1="340" y1="96" x2="312" y2="150"/><line x1="300" y1="54" x2="356" y2="150"/>'}</g>
    <g fill="rgba(255,255,255,.5)">${flip
      ? '<circle cx="296" cy="150" r="5"/><circle cx="356" cy="78" r="5"/><circle cx="340" cy="104" r="5" fill="#e6a35d"/><circle cx="320" cy="56" r="5" fill="#e6a35d"/>'
      : '<circle cx="300" cy="54" r="5"/><circle cx="340" cy="96" r="5"/><circle cx="312" cy="150" r="5"/><circle cx="356" cy="150" r="5"/>'}</g>
    <rect x="40" y="70" width="86" height="86" rx="18" fill="#fff"/>
    <text x="83" y="132" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="56" fill="#0a66c2">in</text>`,
};

// ---------------------------------------------------------------------
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// **negrito** e *destaque*
const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, '<span class="accent">$1</span>');
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* sem armazenamento */ } },
};
const repoUrl = (name) => `${GH}/${name}`;
const chipClass = (i) => (i === 0 ? "chip amber" : i === 2 ? "chip gray" : "chip");
const chips = (list) => `<div class="chips">${list.map((c, i) => `<span class="${chipClass(i)}">${esc(c)}</span>`).join("")}</div>`;
const cover = (type, id, tag, extra) =>
  `<div class="cover"><span class="cover-tag">${esc(tag)}</span><svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${COVERS[type](id, extra)}</svg></div>`;

const photoCover = (item, tag, L) =>
  `<div class="cover"><span class="cover-tag">${esc(tag)}</span><img src="${esc(item.image)}" alt="${esc(L(item.alt) || "")}" loading="lazy" style="object-position:${esc(item.imagePosition || "center")}" /></div>`;

let lang = store.get("lang") || ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en");

// ---------------------------------------------------------------------
function render() {
  const t = UI[lang];
  const L = (o) => (o && typeof o === "object" && !Array.isArray(o) ? o[lang] : o);
  const { profile, about, featured, research, certifications, experience, skills, contact } = CONTENT;

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.title = `${profile.name} | ${t.docTitle}`;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t[el.dataset.i18nAria]); });
  document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = ICONS[el.dataset.icon]; });
  $("#langToggle").textContent = t.langBtn;
  $("#langToggle").setAttribute("aria-label", t.langAria);
  $("#themeToggle").setAttribute("aria-label", t.themeAria);

  // Hero
  $("#brandMark").textContent = profile.initials;
  $("#brandName").textContent = profile.name;
  $("#heroTitle").innerHTML = fmt(L(profile.headline));
  $("#heroRoles").innerHTML = profile.roles.map((r) => `<span>${esc(r)}</span>`).join("");
  $("#heroLead").textContent = L(profile.lead);
  $("#heroGithub").href = GH;

  // Sobre
  $("#aboutTitle").textContent = L(about.title);
  $("#aboutBody").innerHTML = L(about.paragraphs).map((p) => `<p>${fmt(p)}</p>`).join("");
  const photo = $("#aboutPhoto");
  photo.classList.toggle("is-empty", !profile.photo);
  photo.innerHTML = profile.photo
    ? `<img src="${esc(profile.photo)}" alt="${esc(L(about.photoAlt) || profile.name)}" width="900" height="767" loading="lazy" style="object-position:${esc(profile.photoPosition || "center")}" />`
    : "";
  photo.setAttribute("aria-hidden", profile.photo ? "false" : "true");

  // Projetos em destaque
  $("#featured").innerHTML = featured
    .map((p, i) => `
      <a class="pcard" href="${esc(repoUrl(p.repo))}" target="_blank" rel="noopener">
        ${cover(p.cover, `cv${i}`, L(p.tag))}
        <div class="pbody">
          <p class="repo-name">/ ${esc(p.repo)}</p>
          <h3>${esc(L(p.title))}</h3>
          ${chips(p.chips)}
          <p class="pdesc">${fmt(L(p.description))}</p>
          <div class="pfoot"><span class="fmeta">${esc(t.viewRepo)}</span>${ICONS.arrowUpRight}</div>
        </div>
      </a>`)
    .join("");


  // Pesquisa
  const paper = research.paper;
  $("#research").innerHTML = `
    <a class="pcard wide reveal" href="${esc(paper.url)}" target="_blank" rel="noopener">
      ${cover("paper", "cvp", L(paper.tag))}
      <div class="pbody">
        <p class="repo-name">${esc(paper.venue)}</p>
        <h3>${esc(L(paper.title))}</h3>
        ${chips(paper.chips)}
        <p class="pdesc">${fmt(L(paper.description))}</p>
        <div class="pfoot"><span class="fmeta">${esc(t.readPaper)}</span>${ICONS.arrowUpRight}</div>
      </div>
    </a>
    <div class="card-grid">${research.posts
      .map((post, i) => `
        <a class="pcard reveal" href="${esc(post.url)}" target="_blank" rel="noopener">
          ${post.image ? photoCover(post, "LinkedIn", L) : cover("linkedin", `cvl${i}`, "LinkedIn", i % 2 === 1)}
          <div class="pbody">
            <p class="repo-name">${esc(contact.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</p>
            <h3>${esc(L(post.title))}</h3>
            <div class="chips"><span class="chip gray">${esc(t.linkedinPost)}</span></div>
            <p class="pdesc">${fmt(L(post.description))}</p>
            <div class="pfoot"><span class="fmeta">${esc(t.viewPost)}</span>${ICONS.arrowUpRight}</div>
          </div>
        </a>`)
      .join("")}</div>`;

  // Certificações
  $("#certs").innerHTML = certifications
    .map((c) => `
      <article class="cert">
        <div class="cert-stub">
          ${c.badge ? `<img class="cert-badge" src="${esc(c.badge)}" alt="${esc(`${c.issuer}: ${L(c.name)}`)}" width="112" height="112" loading="lazy" />` : ""}
          <div>
            <div class="cert-code">${esc(c.code)}</div>
            <div class="cert-level">${esc(c.issuer)} · ${esc(L(c.level))}</div>
          </div>
        </div>
        <div class="cert-body">
          <span class="cert-perf" aria-hidden="true"></span>
          <h3 class="cert-name">${esc(L(c.name))}</h3>
          <p class="cert-meta">
            <span class="ok">${ICONS.check}${esc(L(c.status) || t.certified)}</span>
            ${c.date ? `<span>${esc(t.issued)} ${esc(L(c.date))}</span>` : ""}
            ${c.credentialId ? `<span>ID ${esc(c.credentialId)}</span>` : ""}
          </p>
          <p class="cert-summary">${fmt(L(c.summary))}</p>
          ${c.topics ? `<div class="chips">${L(c.topics).map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>` : ""}
          ${c.scores ? `<ul class="cert-scores">${c.scores
            .map((x) => `<li><span class="sk">${esc(L(x.skill))}</span><span class="bar" aria-hidden="true"><i style="width:${Number(x.score)}%"></i></span><span class="sc">${Number(x.score)} <b>${esc(x.level)}</b></span></li>`)
            .join("")}</ul>` : ""}
          ${certLinks(c, t, L)}
        </div>
      </article>`)
    .join("");

  // Experiência
  $("#timeline").innerHTML = experience
    .map((e) => `
      <li class="reveal${e.current ? " is-current" : ""}">
        <div class="tl-when">
          <span class="tl-period">${esc(L(e.period))}</span>
          ${e.meta ? `<span class="tl-meta">${esc(L(e.meta))}</span>` : ""}
        </div>
        <div class="tl-main">
          <h3 class="tl-role">${esc(L(e.role))}</h3>
          <div class="tl-org">${esc(e.org)}</div>
          <ul class="tl-bullets">${L(e.bullets).map((b) => `<li>${fmt(b)}</li>`).join("")}</ul>
        </div>
      </li>`)
    .join("");

  // Skills
  $("#skillGrid").innerHTML = skills
    .map((s) => `<div class="skill-block reveal"><p class="sh">${esc(L(s.group))}</p><div class="tags">${s.items.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div></div>`)
    .join("");

  // Contato
  $("#contactLinks").innerHTML = [
    contact.email && `<a class="clink primary" href="mailto:${esc(contact.email)}">${ICONS.mail}E-mail</a>`,
    contact.linkedin && `<a class="clink" href="${esc(contact.linkedin)}" target="_blank" rel="noopener">${ICONS.linkedin}LinkedIn</a>`,
    contact.github && `<a class="clink" href="${esc(contact.github)}" target="_blank" rel="noopener">${ICONS.github}GitHub</a>`,
  ].filter(Boolean).join("");

  $("#footName").textContent = profile.name;
  $("#footMeta").textContent = `${t.footer} · © ${new Date().getFullYear()}`;

  observeReveal();
  updateCarousels();
}

function certLinks(c, t, L) {
  const links = [
    c.verifyUrl && `<a class="cert-link" href="${esc(c.verifyUrl)}" target="_blank" rel="noopener">${esc(t.verify)}${ICONS.arrowUpRight}</a>`,
    c.infoUrl && `<a class="cert-link${c.verifyUrl ? " subtle" : ""}" href="${esc(c.infoUrl)}" target="_blank" rel="noopener">${esc(t.aboutCert)}${ICONS.arrowUpRight}</a>`,
    c.related && `<a class="cert-link subtle" href="${esc(repoUrl(c.related.repo))}" target="_blank" rel="noopener" title="${esc(L(c.related.label))}">${esc(t.lab)}: <span class="mono">${esc(c.related.repo)}</span>${ICONS.arrowUpRight}</a>`,
  ].filter(Boolean);
  return links.length ? `<div class="cert-foot">${links.join("")}</div>` : "";
}

// Carrosséis de uma linha (projetos e certificações)
const carousels = [...document.querySelectorAll("[data-carousel]")].map((root) => {
  const track = root.querySelector(".car-track");
  const [prev, next] = root.querySelectorAll(".car-btn");
  const thumb = root.querySelector(".car-thumb");
  const step = () => {
    const item = track.firstElementChild;
    return item ? item.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : track.clientWidth;
  };
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    const ratio = track.scrollWidth ? track.clientWidth / track.scrollWidth : 1;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
    root.classList.toggle("is-static", max <= 2);
    thumb.style.width = `${Math.max(ratio * 100, 12)}%`;
    thumb.style.transform = `translateX(${max > 0 ? (track.scrollLeft / max) * ((1 / Math.max(ratio, 0.12)) - 1) * 100 : 0}%)`;
  };
  root.querySelectorAll(".car-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollBy({ left: Number(btn.dataset.dir) * step(), behavior: smooth ? "smooth" : "auto" });
    })
  );
  track.addEventListener("scroll", update, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(update).observe(track);
  return update;
});
// Largura útil da janela, sem a barra de rolagem; sem valor válido, o CSS usa 100vw
function syncViewportWidth() {
  const w = document.documentElement.clientWidth;
  if (w > 0) document.documentElement.style.setProperty("--vw", `${w}px`);
  else document.documentElement.style.removeProperty("--vw");
}
function updateCarousels() {
  syncViewportWidth();
  carousels.forEach((update) => update());
}
if ("ResizeObserver" in window) new ResizeObserver(updateCarousels).observe(document.documentElement);
addEventListener("resize", updateCarousels);
addEventListener("load", updateCarousels);


// Revelar ao rolar
let io;
function observeReveal() {
  const els = document.querySelectorAll(".reveal:not(.in)");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  io?.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => io.observe(el));
}

// Nav com borda ao rolar
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", scrollY > 12);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Tema
const savedTheme = store.get("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
$("#themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme === "dark";
  root.dataset.theme = dark ? "light" : "dark";
  store.set("theme", root.dataset.theme);
  drawContour();
});

$("#langToggle").addEventListener("click", () => {
  lang = lang === "pt" ? "en" : "pt";
  store.set("lang", lang);
  render();
});

// Fundo topográfico animado do hero
const canvas = $("#contour");
const ctx = canvas.getContext("2d");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let W = 0, H = 0, tick = 0, raf = null, palette = null;

function readPalette() {
  const cs = getComputedStyle(document.documentElement);
  palette = { a: cs.getPropertyValue("--contour-a").trim(), b: cs.getPropertyValue("--contour-b").trim() };
}
function sizeCanvas() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  W = canvas.parentElement.clientWidth;
  H = canvas.parentElement.clientHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
function drawContour() {
  readPalette();
  ctx.clearRect(0, 0, W, H);
  const lines = 26;
  for (let i = 0; i < lines; i++) {
    const p = i / lines;
    const baseY = H * 0.14 + p * H * 1.02;
    const amp = 26 + i * 3;
    const alpha = 0.05 + 0.05 * (1 - p);
    ctx.strokeStyle = i < lines * 0.55 ? `rgba(${palette.a},${alpha.toFixed(3)})` : `rgba(${palette.b},${(alpha * 0.7).toFixed(3)})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = -20; x <= W + 20; x += 10) {
      const y = baseY + Math.sin(x * 0.006 + i * 0.55 + tick) * amp + Math.sin(x * 0.013 - i * 0.3 + tick * 0.7) * amp * 0.35;
      x === -20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}
function loop() { tick += 0.0016; drawContour(); raf = requestAnimationFrame(loop); }
function stop() { if (raf) cancelAnimationFrame(raf); raf = null; }

sizeCanvas();
addEventListener("resize", () => { sizeCanvas(); drawContour(); });
if (reduceMotion) {
  drawContour();
} else if ("IntersectionObserver" in window) {
  new IntersectionObserver(([en]) => (en.isIntersecting ? !raf && loop() : stop())).observe(canvas);
} else {
  loop();
}

render();

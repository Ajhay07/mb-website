/* Adds the "Engineering & QHSE" dropdown to the main nav on every page.
   The header/nav markup is static HTML (not React-controlled on the
   hand-built pages, and left alone by hydration on the Next.js-routed
   pages since we only ever add a sibling node, never touch existing
   nodes), so a single DOM insertion here is reliable sitewide. */
(function () {
  var ITEMS = [
    { label: "Design and Engineering", href: "/engineering/design-and-engineering" },
    { label: "Manufacturing, Welding and Testing", href: "/engineering/manufacturing-welding-and-testing" },
    { label: "Quality assurance – Quality control", href: "/engineering/quality-assurance" },
    { label: "Certificates", href: "/engineering/certificates" },
    { label: "Made with care", href: "/engineering/made-with-care" }
  ];

  function build(nav) {
    if (nav.querySelector(".mbr-nav-dropdown")) return;
    var wrap = document.createElement("div");
    wrap.className = "mbr-nav-dropdown";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "mbr-nav-dropdown-btn underline-offset-[0.3em]";
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = "Engineering &amp; QHSE" +
      '<svg class="mbr-nav-caret" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    // The panel is appended to <body>, not inside <nav>/<header>, because the
    // header has mix-blend-mode:exclusion - a descendant panel would be
    // composited as part of that blend against whatever is behind the header
    // (the hero image, carousel text, etc.), which is what made it look
    // "stuck"/garbled. Fixed-position + a manual reposition keeps it visually
    // anchored under the button regardless of where it lives in the DOM.
    var panel = document.createElement("div");
    panel.className = "mbr-nav-panel";
    ITEMS.forEach(function (item) {
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      panel.appendChild(a);
    });
    document.body.appendChild(panel);

    function position() {
      var r = button.getBoundingClientRect();
      var panelWidth = panel.offsetWidth || 300;
      var left = Math.min(r.right - panelWidth, window.innerWidth - panelWidth - 12);
      left = Math.max(left, 12);
      panel.style.top = r.bottom + 10 + "px";
      panel.style.left = left + "px";
    }
    function open() {
      wrap.classList.add("mbr-nav-open");
      panel.classList.add("mbr-nav-open");
      button.setAttribute("aria-expanded", "true");
      position();
    }
    function close() {
      wrap.classList.remove("mbr-nav-open");
      panel.classList.remove("mbr-nav-open");
      button.setAttribute("aria-expanded", "false");
    }
    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (wrap.classList.contains("mbr-nav-open")) close(); else open();
    });
    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target) && !panel.contains(e.target)) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
    window.addEventListener("resize", function () {
      if (wrap.classList.contains("mbr-nav-open")) position();
    });
    window.addEventListener("scroll", function () {
      if (wrap.classList.contains("mbr-nav-open")) position();
    }, { passive: true });

    wrap.appendChild(button);

    // Insert before the last link (Contact) so order reads naturally.
    var links = nav.querySelectorAll("a");
    var last = links[links.length - 1];
    if (last) nav.insertBefore(wrap, last); else nav.appendChild(wrap);
  }

  function ensure() {
    var navs = document.querySelectorAll('nav[aria-label="Main"]');
    navs.forEach(build);
  }

  function start() {
    ensure();
    var n = 0,
      iv = setInterval(function () {
        ensure();
        if (++n > 20) clearInterval(iv);
      }, 500);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();

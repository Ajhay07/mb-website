/* Injects the "Business with MB Metallic Bellows" section onto the contact page
   after React hydration (static markup added to the hydrated tree would be
   stripped). Mirrors the technique used by extra-sections.js / product-content.js. */
(function () {
  if (!/^\/contact\/?$/.test(location.pathname)) return;

  var LINKS = [
    { label: "Buy from MB Metallic Bellows", href: "https://mbmetallicbellows.com/request.html", ext: true },
    { label: "Sell to MB Metallic Bellows", href: "https://mbmetallicbellows.com/vendor.html", ext: true },
    { label: "Careers / Job Openings", href: "mailto:info@mbmetallicbellows.com", ext: false }
  ];

  var ARROW =
    '<span aria-hidden="true" class="relative size-4 shrink-0 translate-x-0 transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1.5">' +
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" class="size-4"><path d="M2 8h12M9 3l5 5-5 5"></path></svg></span>';

  function build() {
    var rows = LINKS.map(function (l) {
      var attrs = l.ext ? ' target="_blank" rel="noopener"' : "";
      return (
        '<a href="' + l.href + '"' + attrs +
        ' class="group flex items-center justify-between gap-6 border-b border-rule py-6 text-left">' +
        '<span class="font-display text-h4 transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1.5">' +
        l.label + "</span>" + ARROW + "</a>"
      );
    }).join("");

    var sec = document.createElement("section");
    sec.id = "business-section";
    sec.setAttribute("aria-labelledby", "business-title");
    sec.className = "mx-auto grid w-full max-w-[1440px] gap-10 px-4 pt-28 m:grid-cols-12 m:px-8 m:pt-40";
    sec.innerHTML =
      '<div class="m:col-span-4"><h2 id="business-title" class="font-display text-h3">Business with MB Metallic Bellows</h2>' +
      '<p class="mt-4 max-w-[30ch] text-graphite">Work with us as a customer or a supplier, or join the team.</p></div>' +
      '<div class="m:col-span-7 m:col-start-6"><div class="border-t border-rule">' + rows + "</div></div>";
    return sec;
  }

  function ensure() {
    if (document.getElementById("business-section")) return true;
    var faq = document.querySelector('section[aria-labelledby="faq-title"]');
    if (!faq || !faq.parentNode) return false;
    faq.parentNode.insertBefore(build(), faq.nextSibling);
    return true;
  }

  function start() {
    var n = 0,
      iv = setInterval(function () {
        if (ensure() || ++n > 40) clearInterval(iv);
      }, 500);
    var root = document.querySelector("main") || document.body;
    var pending = false;
    var mo = new MutationObserver(function () {
      if (pending) return;
      pending = true;
      setTimeout(function () { pending = false; ensure(); }, 300);
    });
    mo.observe(root.parentNode || root, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 30000);
  }

  if (document.readyState === "complete") setTimeout(start, 1200);
  else window.addEventListener("load", function () { setTimeout(start, 1200); });
})();

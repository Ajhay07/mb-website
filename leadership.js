/* Scroll-reveal animations for the static Leadership page.
   The hero heading uses the site's native animate-hero-name CSS animation;
   everything marked data-reveal / data-reveal-line is revealed on scroll via
   IntersectionObserver. The .mbr-reveal-on class (set synchronously in <head>
   when reduced motion is not requested) gates the hidden initial state, so the
   page stays fully visible with JS disabled or reduced motion on. */
(function () {
  if (!document.documentElement.classList.contains("mbr-reveal-on")) return;

  function reveal(el) {
    var d = el.getAttribute("data-delay");
    if (d) el.style.transitionDelay = d + "ms";
    el.classList.add("mbr-in");
  }

  function run() {
    var els = document.querySelectorAll("[data-reveal],[data-reveal-line]");
    if (!("IntersectionObserver" in window)) {
      [].forEach.call(els, function (e) { e.classList.add("mbr-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          reveal(en.target);
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    [].forEach.call(els, function (e) { io.observe(e); });

    // Safety: if anything is still hidden after 4s (observer never fired), show it.
    setTimeout(function () {
      [].forEach.call(document.querySelectorAll("[data-reveal]:not(.mbr-in),[data-reveal-line]:not(.mbr-in)"), reveal);
    }, 4000);
  }

  if (document.readyState !== "loading") run();
  else document.addEventListener("DOMContentLoaded", run);
})();

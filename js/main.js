/* MB Metallic Bellows — interactions */
(function () {
  "use strict";

  /* Header shadow on scroll */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Mobile nav */
  var burger = document.querySelector(".burger");
  var mnav = document.querySelector(".mobile-nav");
  var scrim = document.querySelector(".scrim");
  var mnClose = document.querySelector(".mn-close");
  function setNav(open) {
    if (!mnav) return;
    mnav.classList.toggle("open", open);
    if (scrim) scrim.classList.toggle("open", open);
    if (burger) burger.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (burger) burger.addEventListener("click", function () { setNav(!mnav.classList.contains("open")); });
  if (mnClose) mnClose.addEventListener("click", function () { setNav(false); });
  if (scrim) scrim.addEventListener("click", function () { setNav(false); });
  if (mnav) mnav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setNav(false); }); });

  /* Reveal on scroll */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* Count-up stats */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = (target % 1 !== 0) ? 1 : 0;
    var start = null, dur = 1600;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (eased * target).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* Footer year */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();

  /* Contact form (front-end only) */
  var form = document.querySelector("form[data-contact]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      var original = btn ? btn.innerHTML : "";
      if (btn) { btn.disabled = true; btn.innerHTML = "Sending…"; }
      setTimeout(function () {
        form.reset();
        if (btn) { btn.disabled = false; btn.innerHTML = original; }
        var note = form.querySelector(".form-note");
        if (note) { note.textContent = "Thank you — your enquiry has been noted. Our team will respond within one business day."; note.style.color = "#1a7d4b"; }
      }, 900);
    });
  }
})();

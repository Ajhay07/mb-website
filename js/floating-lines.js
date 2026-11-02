/* Flowing glow ribbons for the CTA band: soft blurred bands of light with a
   bright core line riding along each one, drifting slowly — the aurora/
   light-trail look of the reference banner, redrawn in the site's blue
   palette. Canvas2D (no WebGL dependency), decorative only (aria-hidden
   canvas behind the CTA band's text), and respects prefers-reduced-motion. */
(function () {
  "use strict";

  var RIBBONS = [
    { y: 0.28, amp: 0.17, freq: 1.3, phase: 0.3, speed: 0.012, width: 46, core: "rgba(255,255,255,.9)", glow: "rgba(120,190,255,.65)", blur: 16 },
    { y: 0.52, amp: 0.24, freq: 0.85, phase: 2.1, speed: 0.009, width: 64, core: "rgba(200,230,255,.85)", glow: "rgba(70,150,255,.7)", blur: 22 },
    { y: 0.74, amp: 0.14, freq: 1.7, phase: 4.0, speed: 0.016, width: 34, core: "rgba(255,255,255,.7)", glow: "rgba(150,210,255,.55)", blur: 13 }
  ];
  var SAMPLES = 70;

  function spineY(ribbon, t, time, height) {
    return ribbon.y * height
      + Math.sin(t * Math.PI * 2 * ribbon.freq + ribbon.phase + time * ribbon.speed) * ribbon.amp * height
      + Math.sin(t * Math.PI * 2 * ribbon.freq * 0.45 + time * ribbon.speed * 0.6) * ribbon.amp * height * 0.3;
  }

  function mount(container) {
    var canvas = container.querySelector("canvas");
    var ctx = canvas && canvas.getContext("2d");
    if (!container || !canvas || !ctx) return;
    var supportsBlur = "filter" in ctx;

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var time = reduce ? 4000 : 0;
    var raf = 0, visible = true;

    function resize() {
      width = Math.max(1, container.clientWidth);
      height = Math.max(1, container.clientHeight);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function ribbonPath(ribbon) {
      var upper = [], lower = [];
      for (var i = 0; i <= SAMPLES; i++) {
        var t = i / SAMPLES;
        var x = t * width;
        var y = spineY(ribbon, t, time, height);
        var w = ribbon.width * (0.45 + 0.55 * Math.sin(t * Math.PI * 2 * ribbon.freq * 0.6 + ribbon.phase + time * ribbon.speed * 0.8 + 1.4));
        upper.push([x, y - w / 2]);
        lower.push([x, y + w / 2]);
      }
      ctx.beginPath();
      ctx.moveTo(upper[0][0], upper[0][1]);
      for (i = 1; i < upper.length; i++) ctx.lineTo(upper[i][0], upper[i][1]);
      for (i = lower.length - 1; i >= 0; i--) ctx.lineTo(lower[i][0], lower[i][1]);
      ctx.closePath();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      RIBBONS.forEach(function (ribbon) {
        // Soft blurred glow fill — a flat translucent colour so it stays
        // visible regardless of how far the wave swings from its average
        // position (a position-anchored gradient would fall out of range).
        ribbonPath(ribbon);
        ctx.fillStyle = ribbon.glow;
        if (supportsBlur) ctx.filter = "blur(" + ribbon.blur + "px)";
        ctx.fill();
        if (supportsBlur) ctx.filter = "none";

        // Crisp bright core line riding the ribbon's spine.
        ctx.beginPath();
        for (var i = 0; i <= SAMPLES; i++) {
          var t = i / SAMPLES;
          var x = t * width;
          var y = spineY(ribbon, t, time, height);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = ribbon.core;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        if (supportsBlur) ctx.filter = "blur(.6px)";
        ctx.stroke();
        if (supportsBlur) ctx.filter = "none";
      });
    }

    function frame() {
      raf = 0;
      if (!visible || document.hidden) return;
      if (!reduce) { time += 1; draw(); }
      raf = requestAnimationFrame(frame);
    }

    function wake() { if (!raf && visible && !document.hidden && !reduce) raf = requestAnimationFrame(frame); }

    var ro = new ResizeObserver(resize);
    ro.observe(container);
    var io = new IntersectionObserver(function (entries) {
      visible = entries.some(function (e) { return e.isIntersecting; });
      if (visible) wake();
    });
    io.observe(container);
    document.addEventListener("visibilitychange", function () { if (!document.hidden) wake(); });

    resize();
    wake();
  }

  document.querySelectorAll(".cta-glow").forEach(mount);
})();

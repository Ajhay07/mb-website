/* Flowing glow lines for the CTA band — animated, Canvas2D (no WebGL
   dependency, so it degrades to nothing rather than breaking if a browser
   can't give it a context). Inspired by the React Bits "FloatingLines"
   effect, redrawn as a lightweight stroked-path version that stays legible
   on a very wide, short banner. Decorative only: aria-hidden canvas behind
   the CTA band's text. */
(function () {
  "use strict";

  var LINES = [
    { amp: 0.16, freq: 1.6, phase: 0.0, speed: 0.07, y: 0.32, width: 2.2, color: "rgba(255,255,255,.9)", blur: 14 },
    { amp: 0.22, freq: 1.1, phase: 1.7, speed: 0.05, y: 0.55, width: 1.6, color: "rgba(180,220,255,.75)", blur: 18 },
    { amp: 0.13, freq: 2.1, phase: 3.4, speed: 0.09, y: 0.72, width: 1.2, color: "rgba(255,255,255,.55)", blur: 10 }
  ];
  var SAMPLES = 90;

  function mount(container) {
    var canvas = container.querySelector("canvas");
    var ctx = canvas && canvas.getContext("2d");
    if (!container || !canvas || !ctx) return;

    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var time = reduce ? 1200 : 0;
    var raf = 0, visible = true;

    function resize() {
      width = Math.max(1, container.clientWidth);
      height = Math.max(1, container.clientHeight);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      LINES.forEach(function (line) {
        var baseY = line.y * height;
        var ampPx = line.amp * height;
        ctx.beginPath();
        for (var i = 0; i <= SAMPLES; i++) {
          var t = i / SAMPLES;
          var x = t * width;
          var y = baseY + Math.sin(t * Math.PI * 2 * line.freq + line.phase + time * line.speed) * ampPx
                 + Math.sin(t * Math.PI * 2 * line.freq * 0.5 + time * line.speed * 0.6) * ampPx * 0.25;
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = line.color;
        ctx.shadowBlur = line.blur;
        ctx.stroke();
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

/* Home "critical piping services" section: arrange the photos into a full, even
   picture-frame border around the centred text, adding a few more images so there
   are no large empty gaps. Runs after hydration and re-applies via a guarded
   MutationObserver, like extra-sections.js / product-content.js. */
(function () {
  if (!/^\/?$/.test(location.pathname)) return;

  var BASE = "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto:best,c_limit,w_1600/mb-website/";
  // Extra images appended if the section has fewer than the layout needs.
  var EXTRA = [
    { src: "hq/hq-tig-welding", alt: "TIG welding a bellows flange" },
    { src: "hq/hq-finished-bellows", alt: "Finished metallic bellows units" },
    { src: "hq/hq-pipe-installation", alt: "Expansion joint installed on process piping" },
    { src: "products/universal-expansion-joint", alt: "Universal expansion joint" },
    { src: "products/gimbal-expansion-joint", alt: "Gimbal expansion joint" }
  ];

  // Even frame: 4 down the left edge, 4 down the right edge, 1 top-centre.
  // Columns pulled in towards the text and images enlarged so the bands beside
  // and above the heading read as full rather than empty.
  var L = 3, R = 77, C = 40, W = 20;
  var SLOTS = [
    { x: L, y: 2 }, { x: C, y: 2 }, { x: R, y: 2 },
    { x: L, y: 27 }, { x: R, y: 27 },
    { x: L, y: 52 }, { x: R, y: 52 },
    { x: L, y: 77 }, { x: R, y: 77 }
  ];

  function frameEl() {
    var sec = document.querySelector('section[aria-labelledby="life-title"]');
    return sec ? sec.querySelector(".relative.hidden") : null;
  }

  function makeImg(spec) {
    var div = document.createElement("div");
    div.className = "absolute";
    div.setAttribute("data-mbr-frame-extra", "");
    var img = document.createElement("img");
    img.loading = "eager";
    img.decoding = "async";
    img.alt = spec.alt;
    img.src = BASE + spec.src;
    div.appendChild(img);
    return div;
  }

  function apply() {
    var frame = frameEl();
    if (!frame) return false;
    var kids = [].slice.call(frame.children).filter(function (c) { return c.querySelector && c.querySelector("img"); });

    // Append extra images until we have enough for the layout.
    var need = SLOTS.length - kids.length;
    for (var i = 0; i < need && i < EXTRA.length; i++) {
      var d = makeImg(EXTRA[i]);
      frame.appendChild(d);
      kids.push(d);
    }

    // Position every slot; crop uniformly.
    for (var s = 0; s < SLOTS.length && s < kids.length; s++) {
      var el = kids[s], p = SLOTS[s];
      el.style.position = "absolute";
      el.style.left = p.x + "%";
      el.style.right = "auto";
      el.style.top = p.y + "%";
      el.style.bottom = "auto";
      el.style.width = W + "%";
      var im = el.querySelector("img");
      if (im) {
        im.loading = "eager";
        im.style.width = "100%";
        im.style.height = "auto";
        im.style.aspectRatio = "4 / 3";
        im.style.objectFit = "cover";
        im.style.display = "block";
      }
    }
    // Hide any leftover images beyond the layout so nothing floats loose.
    for (var k = SLOTS.length; k < kids.length; k++) kids[k].style.display = "none";
    return true;
  }

  function start() {
    var n = 0,
      iv = setInterval(function () { if (apply() || ++n > 40) clearInterval(iv); }, 500);
    var sec = document.querySelector('section[aria-labelledby="life-title"]') || document.body;
    var pending = false;
    var mo = new MutationObserver(function () {
      if (pending) return;
      pending = true;
      setTimeout(function () { pending = false; apply(); }, 300);
    });
    mo.observe(sec, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 30000);
  }

  if (document.readyState === "complete") setTimeout(start, 1000);
  else window.addEventListener("load", function () { setTimeout(start, 1000); });
})();

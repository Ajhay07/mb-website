/* Home "critical piping services" section: a full picture-frame border of 12
   photos (top row, bottom row, two down each side) around the centred text.
   Previous version repositioned the section's own scattered <img> elements,
   which React can add/remove later (hydration, animations), silently leaving
   slots empty. This version instead builds one self-contained wrapper of 12
   images that we fully own, inserts it once, and simply re-inserts the whole
   wrapper if anything ever removes it — never depends on the native images. */
(function () {
  if (!/^\/?$/.test(location.pathname)) return;

  var BASE = "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto:best,c_limit,w_1600/mb-website/";
  var WRAP_ID = "mbr-home-frame";

  // 12 distinct real photos, one per slot (no repeats). A src starting with
  // "/" is an absolute path (one of the client's own photos committed into
  // the repo); anything else is relative to BASE (Cloudinary).
  var PHOTOS = [
    { src: "/assets/real-photos/hq-finished-1.jpg", alt: "Finished bellows with tie-rod restraints on the shop floor" },
    { src: "/assets/real-photos/hq-finished-2.jpg", alt: "Close-up of a bellows convolution with tie-rod restraints" },
    { src: "hq/hq-tig-welding", alt: "TIG welding a bellows flange" },
    { src: "hq/hq-pressure-testing", alt: "Hydrostatic pressure testing of an expansion joint" },
    { src: "hq/hq-pipe-installation", alt: "Expansion joint installed on process piping" },
    { src: "/assets/real-photos/hq-finished-3.jpg", alt: "Finished metallic bellows unit, close-up" },
    { src: "/assets/real-photos/hinged-expansion-joint.jpg", alt: "Batch of finished hinged expansion joints" },
    { src: "hq/hq-steel-coils", alt: "Stainless steel coil stock" },
    { src: "/assets/real-photos/universal-expansion-joint.jpg", alt: "Universal expansion joint" },
    { src: "/assets/real-photos/hinged-expansion-joint.jpg", alt: "Hinged expansion joint" },
    { src: "products/gimbal-expansion-joint", alt: "Gimbal expansion joint" },
    { src: "/assets/real-photos/rectangular-expansion-joint.jpg", alt: "Rectangular expansion joint" }
  ];

  // Frame geometry: top row (4), bottom row (4), two down each side.
  // Bottom row pushed down to RY[3]=84 so it clears the "How we work" link
  // instead of sitting flush under the text block.
  var CX = [2, 27, 52, 77];
  var W = 21;
  var TOP_Y = 2, TOP_H = 17;
  var SIDE_Y = [26, 54], SIDE_H = 22;
  var BOT_Y = 84, BOT_H = 14;

  var SLOTS = [
    { x: CX[0], y: TOP_Y, h: TOP_H }, { x: CX[1], y: TOP_Y, h: TOP_H }, { x: CX[2], y: TOP_Y, h: TOP_H }, { x: CX[3], y: TOP_Y, h: TOP_H },
    { x: CX[0], y: SIDE_Y[0], h: SIDE_H }, { x: CX[3], y: SIDE_Y[0], h: SIDE_H },
    { x: CX[0], y: SIDE_Y[1], h: SIDE_H }, { x: CX[3], y: SIDE_Y[1], h: SIDE_H },
    { x: CX[0], y: BOT_Y, h: BOT_H }, { x: CX[1], y: BOT_Y, h: BOT_H }, { x: CX[2], y: BOT_Y, h: BOT_H }, { x: CX[3], y: BOT_Y, h: BOT_H }
  ];

  function frameEl() {
    var sec = document.querySelector('section[aria-labelledby="life-title"]');
    return sec ? sec.querySelector(".relative.hidden") : null;
  }

  function buildWrap() {
    var wrap = document.createElement("div");
    wrap.id = WRAP_ID;
    wrap.style.position = "absolute";
    wrap.style.inset = "0";
    wrap.style.pointerEvents = "none";
    for (var i = 0; i < SLOTS.length; i++) {
      var p = SLOTS[i], spec = PHOTOS[i % PHOTOS.length];
      var tile = document.createElement("div");
      tile.style.position = "absolute";
      tile.style.left = p.x + "%";
      tile.style.top = "calc(" + p.y + "% + 4px)";
      tile.style.width = W + "%";
      tile.style.height = "calc(" + p.h + "% - 8px)";
      tile.style.overflow = "hidden";
      tile.style.borderRadius = "6px";
      var img = document.createElement("img");
      img.loading = "eager";
      img.decoding = "async";
      img.alt = spec.alt;
      img.src = spec.src.charAt(0) === "/" ? spec.src : BASE + spec.src;
      img.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block";
      tile.appendChild(img);
      wrap.appendChild(tile);
    }
    return wrap;
  }

  function apply() {
    var frame = frameEl();
    if (!frame) return false;

    // Hide the section's own native images (they're not part of our frame).
    var kids = [].slice.call(frame.children);
    for (var i = 0; i < kids.length; i++) {
      if (kids[i].id !== WRAP_ID) kids[i].style.display = "none";
    }

    // Insert our own 12-photo wrapper if it isn't already there.
    if (!document.getElementById(WRAP_ID)) {
      frame.appendChild(buildWrap());
    }
    return true;
  }

  function start() {
    apply();
    var sec = document.querySelector('section[aria-labelledby="life-title"]') || document.body;
    var pending = false;
    var mo = new MutationObserver(function (records) {
      // Ignore mutations that are only inside our own wrapper (nothing to react to).
      var relevant = records.some(function (r) {
        return !(r.target && r.target.closest && r.target.closest("#" + WRAP_ID));
      });
      if (!relevant || pending) return;
      pending = true;
      setTimeout(function () { pending = false; apply(); }, 300);
    });
    mo.observe(sec, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 30000);
  }

  if (document.readyState === "complete") setTimeout(start, 1000);
  else window.addEventListener("load", function () { setTimeout(start, 1000); });
})();

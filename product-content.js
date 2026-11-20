/* Adds professional product content (typical applications, materials, and
   listing-card descriptions) after React hydration, which otherwise strips
   markup that is not part of the Next.js payload. See extra-sections.js for
   the same technique used on the home page. */
(function () {
  var CARD_DESC = {
    "Universal Expansion Joint": "Twin-bellows assembly with a centre spool, absorbing axial, lateral and angular pipe movement in a single compact unit.",
    "Hinged Expansion Joint": "Hinge plates and pins restrain pressure thrust, allowing controlled angular rotation in a single plane.",
    "Gimbal Expansion Joint": "Forged gimbal rings permit angular rotation in any plane while fully containing internal pressure.",
    "Rectangular Expansion Joint": "Fabricated to custom cross-sections for flue gas ducts, air handling and low-pressure process lines.",
    "Pressure Balanced Joint": "Absorbs axial movement while internally balancing pressure thrust, protecting adjacent equipment and anchors.",
    "Large-Bore Bellows (Up to 9000 mm)": "Large-diameter stainless steel bellows engineered for blast furnace gas mains and major industrial ducting."
  };

  var PRODUCT_INFO = {
    "kyst-house": {
      design: "A universal joint puts two bellows either side of a floating centre spool, so the assembly takes up lateral offset in any direction while the spool itself carries axial and angular movement. Run two of these in a line and you can close out almost any misalignment between two anchors without loading either one.",
      applications: ["Steam and high-temperature process piping", "Turbine exhaust and condenser ducts", "Pump and compressor suction/discharge nozzles", "Tank farm and interconnecting pipeline runs"],
      materials: "We form the bellows in 304, 316 or 321 stainless, or in Inconel 625 and Incoloy 825 where the line runs hot or carries something the lighter grades won't take. An internal liner keeps flow-induced wear off the convolutions; external cover plates do the same job against knocks on site.",
      sizes: "Nominal bore from 20 mm up. Length and convolution count are set by how much lateral movement the run calls for, so give us the offset and we'll size the spool to suit.",
      standards: "Design follows EJMA's fatigue and stability rules for universal joints; fabrication runs to ASME Section VIII in our U-Stamped shop, with PED or IBR cover added where the job needs it.",
      quality: "Every unit gets a hydrostatic test to design pressure, a dimensional check against the approved drawing, and a weld inspection: dye penetrant as standard, radiography where the specification calls for it. Certificates travel with the unit."
    },
    "norrebro-library-annex": {
      design: "A hinged joint pins two plates either side of a single bellows, so the hinge, not the bellows, carries the pressure thrust and any side load from the duct. That leaves the bellows to do one thing: rotate, in the plane the hinge allows. On their own they only manage one movement, which is why you'll usually see two or three of them working together to close out an offset.",
      applications: ["Flue gas and ducting systems", "Boiler and furnace connections", "Large-diameter, low-pressure ducts requiring single-plane rotation", "Blast furnace gas main sections"],
      materials: "Bellows elements are stainless; hinge plates and pins go in carbon or alloy steel, sized to the thrust the line will put through them, with a heavier wall or a harder pin where the pressure or the duct diameter calls for it.",
      sizes: "These scale up well. Most of our large-diameter, low-pressure duct work, flue gas lines and blast furnace gas mains among them, runs on hinged joints rather than one oversized bellows.",
      standards: "EJMA governs the bellows geometry; the hinge hardware is sized separately, by hand calculation against the line's maximum thrust rather than the EJMA pressure rating.",
      quality: "Hinge pins and plates are checked for dimension before assembly, the welded bellows is leak-tested, and the finished joint is cycled through its design rotation before it leaves the shop."
    },
    "fjordhus": {
      design: "Two hinge pairs, set at right angles on a floating gimbal ring, give this joint rotation in any plane at once rather than just one, which is the whole reason to specify a gimbal over a pair of hinged joints. The ring carries the thrust; the bellows only flexes.",
      applications: ["Multi-directional piping runs in refineries and power plants", "Elbow-to-elbow connections absorbing angular movement in any plane", "Pipe racks and interconnecting lines with limited anchor points"],
      materials: "Bellows in stainless or high-nickel alloy; gimbal rings and trunnions forged in carbon steel and machined to take the thrust without deflecting under load.",
      sizes: "Sized first to the line pressure, then checked against the angular rotation needed in each plane. The two don't always point to the same ring diameter, so we check both before we commit to a design.",
      standards: "EJMA's angular-rotation limits set the bellows geometry; ring and trunnion sizing is our own calculation, checked against the worst-case combined thrust from both planes.",
      quality: "Before dispatch we run the gimbal through its full rotation under no load, then hydrostatic test the bellows to design pressure with the ring locked square."
    },
    "hald-ege-school": {
      design: "Rectangular joints are built to the duct's own cross-section rather than forced into a round bellows, which is the only practical way to handle the large, low-pressure ducting that flue gas and air-handling work usually needs. Corner geometry and reinforcement are worked out case by case; a square corner behaves very differently from a radiused one under the same pressure.",
      applications: ["Flue gas ducts and boiler casings", "Air-handling and low-pressure ventilation systems", "Non-circular ducting in steel and cement plants"],
      materials: "Stainless or carbon steel plate, formed and welded panel by panel. PTFE, fabric or metallic liners go in where the gas stream carries abrasive dust or runs corrosive.",
      sizes: "There's no fixed bore here. We work from your duct drawing, and convolution count and reinforcement follow from that.",
      standards: "EJMA's rectangular-joint rules cover the convolution design; liner material is chosen against the gas analysis you give us, not a standard specification.",
      quality: "Panel welds are inspected before final assembly, corners are checked against the drawing for square, and the finished joint is pressure-tested to the design figure before it ships."
    },
    "saltvaerket-studios": {
      design: "Two bellows, not one: a flow bellows and a smaller balancing bellows, tied together through a central spool and a tie-rod frame. The balancing bellows takes the same pressure thrust in the opposite direction, so the two cancel out internally instead of loading whatever's bolted to either end. That's what lets you put a joint at a bend without anchoring the pump or turbine nozzle behind it.",
      applications: ["Pipeline direction changes where thrust cannot be anchored", "Turbine exhaust and compressor discharge lines", "Refinery and petrochemical process piping"],
      materials: "Both bellows in the same material, stainless or high-nickel alloy, with the tie-rod frame sized in carbon steel to the net thrust once the balancing is accounted for.",
      sizes: "The balancing bellows area is set as a ratio of the flow bellows area. Get that ratio right and the residual thrust on the anchors drops close to zero.",
      standards: "EJMA's pressure-balanced design procedure sets the area ratio and tie-rod sizing; fabrication is ASME Section VIII in our U-Stamped shop.",
      quality: "We test the flow and balancing bellows separately before assembly, then hydrostatic test the finished joint as a unit. A mismatch between the two only shows up once it's fully assembled, so that final test is the one that matters."
    },
    "lysning-chapel": {
      design: "Past about 1500 mm diameter, a bellows stops being something you form in one piece. It's built as ring sections, welded up in the shop or, beyond transport limits, on site. Getting the circumferential welds right is most of the job at this size: a few millimetres of mismatch between rings shows up as a stress riser once the line starts cycling.",
      applications: ["Blast furnace gas mains", "Large-diameter ducting in steel and cement plants", "Cooling water and FGD (flue gas desulphurisation) ducting"],
      materials: "Multi-ply stainless or carbon steel, with ply count set by the design pressure and the number of cycles the line will see over its life.",
      sizes: "Up to 9000 mm diameter, the top of our range, built up from ring sections for anything beyond a single forming pass or a standard trailer load.",
      standards: "EJMA's multi-ply bellows rules apply ply by ply; large-diameter field joints follow our own welding procedure, qualified separately from the shop welds.",
      quality: "Every ring is checked for dimension before it's welded to the next; the assembled bellows is leak-tested, and a field joint gets its own radiography before the line is commissioned."
    }
  };

  var LISTING_INTRO =
    "Every joint below starts from the same brief: nominal bore, design pressure and temperature, flow media, and the movement (axial, lateral, angular) it has to absorb. From there it's formed, welded and tested at our Chennai works to EJMA, ASME and PED, in sizes from 20 mm nominal bore up to 9000 mm diameter, in stainless steel, high-nickel alloy or carbon steel.";

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  function addCardDescriptions() {
    var grid = document.querySelector('div[class*="gap-y-14"]');
    if (!grid) return false;
    var done = true;
    grid.querySelectorAll("h3").forEach(function (h3) {
      var name = h3.textContent.trim();
      var desc = CARD_DESC[name];
      if (!desc) return;
      var wrap = h3.parentElement;
      if (!wrap || wrap.querySelector(".mbr-card-desc")) return;
      done = false;
      var p = document.createElement("p");
      p.className = "mbr-card-desc";
      p.textContent = desc;
      wrap.appendChild(p);
      done = true;
    });
    return true;
  }

  function shrinkGallery() {
    if (!/^\/projects\/[a-z0-9-]+\/?$/.test(location.pathname)) return false;
    var g = document.querySelector('div[class*="mt-20"][class*="gap-16"][class*="gap-28"]');
    if (!g) return false;
    var figs = g.querySelectorAll("figure");
    figs.forEach(function (f, i) {
      if (i > 0) f.classList.add("mbr-extra-figure");
    });
    return true;
  }

  function addProductDetail() {
    var m = location.pathname.match(/^\/projects\/([a-z0-9-]+)\/?$/);
    if (!m || !PRODUCT_INFO[m[1]]) return false;
    if (document.getElementById("product-spec-section")) return true;
    var anchor = document.querySelector('section[aria-labelledby="next-title"]');
    if (!anchor || !anchor.parentNode) return false;
    var info = PRODUCT_INFO[m[1]];
    var apps = info.applications.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
    var html =
      '<section id="product-spec-section" class="mx-auto w-full max-w-[1600px] px-4 m:px-8 mt-20 m:mt-28">' +
      '<div class="max-w-[62ch]"><h2 class="font-display text-h4">Design &amp; construction</h2>' +
      '<p class="mt-5 text-graphite">' + esc(info.design) + "</p></div>" +
      '<div class="mt-16 grid gap-10 m:grid-cols-12">' +
      '<div class="m:col-span-5"><h2 class="font-display text-h4">Typical applications</h2>' +
      "<ul class=\"mt-5 space-y-2 text-graphite\">" + apps + "</ul></div>" +
      '<div class="m:col-span-6 m:col-start-7"><h2 class="font-display text-h4">Materials &amp; specification</h2>' +
      '<p class="mt-5 text-graphite">' + esc(info.materials) + "</p>" +
      '<p class="mt-4 text-graphite">' + esc(info.sizes) + "</p></div>" +
      "</div>" +
      '<div class="mt-16 grid gap-10 m:grid-cols-12">' +
      '<div class="m:col-span-5"><h2 class="font-display text-h4">Design standards</h2>' +
      '<p class="mt-5 text-graphite">' + esc(info.standards) + "</p></div>" +
      '<div class="m:col-span-6 m:col-start-7"><h2 class="font-display text-h4">Quality &amp; testing</h2>' +
      '<p class="mt-5 text-graphite">' + esc(info.quality) + "</p></div>" +
      "</div></section>";
    var t = document.createElement("template");
    t.innerHTML = html;
    anchor.parentNode.insertBefore(t.content, anchor);
    return true;
  }

  function addListingIntro() {
    if (!/^\/projects\/?$/.test(location.pathname)) return false;
    if (document.getElementById("product-listing-intro")) return true;
    var grid = document.querySelector('div[class*="gap-y-14"]');
    if (!grid || !grid.parentNode) return false;
    var p = document.createElement("p");
    p.id = "product-listing-intro";
    p.className = "max-w-[62ch] text-graphite";
    p.textContent = LISTING_INTRO;
    grid.parentNode.insertBefore(p, grid);
    return true;
  }

  var FAB_FLOOR_NOTE =
    "Welding runs to procedures qualified under ASME IX, and every heat of material, weld and inspection record is logged against the job number as the unit moves through the shop. The certification pack that ships with it is built from that same paper trail, not assembled afterward.";

  function addFabFloorNote() {
    if (!/^\/studio\/?$/.test(location.pathname)) return false;
    if (document.getElementById("fab-floor-note")) return true;
    var h2 = [].slice.call(document.querySelectorAll("h2")).filter(function (h) {
      return /From the Fabrication Floor/.test(h.textContent);
    })[0];
    if (!h2) return false;
    var p = h2.parentElement.querySelector("p.max-w-\\[52ch\\]") || h2.nextElementSibling;
    if (!p || !p.parentNode) return false;
    var note = document.createElement("p");
    note.id = "fab-floor-note";
    note.className = "mt-4 max-w-[52ch] text-graphite";
    note.textContent = FAB_FLOOR_NOTE;
    p.parentNode.insertBefore(note, p.nextSibling);
    return true;
  }

  var APPROVALS = [
    { standard: "ASME & EJMA design compliance", ref: "EJMA 10th Ed." },
    { standard: "ASME U-Stamp certified fabrication", ref: "ASME Sec. VIII, Div. 1" },
    { standard: "EJMA (USA) standards compliant", ref: "EJMA 10th Ed." },
    { standard: "ISO & PED compliance", ref: "PED 2014/68/EU", product: "Gimbal Expansion Joint" },
    { standard: "IBR & ASTM inspection standards", ref: "IBR / ASTM E165" }
  ];

  function fixApprovalsTable() {
    var rows = document.querySelectorAll("table tbody tr");
    if (!rows.length) return false;
    rows.forEach(function (tr) {
      var standardEl = tr.querySelector("th span.block");
      if (!standardEl) return;
      var std = standardEl.textContent.trim();
      var row = APPROVALS.filter(function (a) { return a.standard === std; })[0];
      if (!row) return;
      var refCell = tr.querySelector("td");
      if (refCell && refCell.textContent.trim() !== row.ref) refCell.textContent = row.ref;
      if (row.product) {
        tr.querySelectorAll("span.text-small, td.hidden").forEach(function (el) {
          var cur = el.textContent.trim();
          if (cur !== row.product && /Expansion Joint|Bellows/.test(cur)) el.textContent = row.product;
        });
      }
    });
    return true;
  }

  function ensure() {
    addCardDescriptions();
    addProductDetail();
    addListingIntro();
    shrinkGallery();
    if (/^\/studio\/?$/.test(location.pathname)) { fixApprovalsTable(); addFabFloorNote(); }
  }

  function start() {
    var n = 0,
      iv = setInterval(function () {
        ensure();
        if (++n > 40) clearInterval(iv);
      }, 500);
    var root = document.querySelector("main") || document.body;
    var pending = false;
    var mo = new MutationObserver(function () {
      if (pending) return;
      pending = true;
      setTimeout(function () {
        pending = false;
        ensure();
      }, 300);
    });
    mo.observe(root, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 30000);
  }

  if (document.readyState === "complete") setTimeout(start, 1200);
  else window.addEventListener("load", function () { setTimeout(start, 1200); });
})();

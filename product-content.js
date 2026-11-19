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
      design: "A universal expansion joint uses two bellows elements joined by a centre pipe spool, with the spool free to translate and rotate between the two ends. This arrangement absorbs large lateral offsets together with axial and angular movement in a single, compact assembly, without transmitting significant force back to the pipeline anchors.",
      applications: ["Steam and high-temperature process piping", "Turbine exhaust and condenser ducts", "Pump and compressor suction/discharge nozzles", "Tank farm and interconnecting pipeline runs"],
      materials: "Available in austenitic stainless steel (SS 304, 316, 321), high-nickel alloys (Inconel, Incoloy) and carbon steel, with internal flow liners and external tie-rod protection to specification.",
      sizes: "Formed from 20 mm nominal bore to large-diameter assemblies, with the number of convolutions and bellows length set by the design movement."
    },
    "norrebro-library-annex": {
      design: "A hinged expansion joint carries two hinge plates, pinned on a common axis, fitted across a single bellows element. The hinge pins and plates carry the full pressure thrust and any external mechanical load, so the bellows is left to accommodate only the intended angular rotation. Two or three hinged joints are normally installed together to resolve an offset between two fixed points.",
      applications: ["Flue gas and ducting systems", "Boiler and furnace connections", "Large-diameter, low-pressure ducts requiring single-plane rotation", "Blast furnace gas main sections"],
      materials: "Stainless steel bellows elements with carbon steel or alloy steel hinge plates and pins, sized to the operating pressure, temperature and rotation required.",
      sizes: "Suited to larger, low-pressure ducts; hinge plate thickness and pin diameter are set by the pressure thrust and rotation specified."
    },
    "fjordhus": {
      design: "A gimbal expansion joint carries two pairs of hinge pins, set at 90° to each other on a floating gimbal ring, allowing angular rotation in any plane while fully restraining axial and lateral movement. This suits pipe runs that change direction in more than one plane, where a single joint can replace a set of hinged joints.",
      applications: ["Multi-directional piping runs in refineries and power plants", "Elbow-to-elbow connections absorbing angular movement in any plane", "Pipe racks and interconnecting lines with limited anchor points"],
      materials: "Stainless steel or high-nickel alloy bellows with forged carbon steel gimbal rings and trunnions, designed to EJMA angular rotation limits.",
      sizes: "Gimbal ring and trunnion dimensions are sized to the line pressure and the angular rotation required in each plane."
    },
    "hald-ege-school": {
      design: "Rectangular expansion joints are fabricated to the exact cross-section of the duct, rather than formed as a circular bellows, so they suit low-pressure, large cross-section ducting such as flue gas and air-handling lines. Reinforcing bars and internal liners are added where gas velocity or particulate loading requires it.",
      applications: ["Flue gas ducts and boiler casings", "Air-handling and low-pressure ventilation systems", "Non-circular ducting in steel and cement plants"],
      materials: "Fabricated stainless steel or carbon steel bellows plate, with PTFE, fabric or metallic liners available for abrasive or corrosive gas streams.",
      sizes: "Fabricated to the duct's own cross-section rather than a fixed bore, so dimensions follow the drawing supplied."
    },
    "saltvaerket-studios": {
      design: "A pressure balanced expansion joint uses two bellows elements — a flow bellows and a smaller balancing bellows — connected through a tie-rod frame and a central spool. Internal pressure thrust is resisted between the two bellows rather than carried to the pipeline anchors, so the joint absorbs axial movement at a change of direction without loading adjacent equipment, pump or turbine nozzles.",
      applications: ["Pipeline direction changes where thrust cannot be anchored", "Turbine exhaust and compressor discharge lines", "Refinery and petrochemical process piping"],
      materials: "Dual bellows (flow and balancing elements) in stainless steel or high-nickel alloy, connected by a tie-rod frame sized to the pressure thrust.",
      sizes: "The balancing bellows area is set as a ratio of the flow bellows area to suit the design pressure and the thrust to be neutralised."
    },
    "lysning-chapel": {
      design: "Large-bore bellows above roughly 1500 mm diameter are formed and welded in multiple ring sections and joined in the shop or on site, since single-piece forming and road transport are impractical beyond standard tooling limits. Each ring is dimensionally checked and the completed assembly is leak-tested before dispatch.",
      applications: ["Blast furnace gas mains", "Large-diameter ducting in steel and cement plants", "Cooling water and FGD (flue gas desulphurisation) ducting"],
      materials: "Multi-ply stainless steel or carbon steel bellows, fabricated and shop-tested in sections for diameters beyond standard transport limits.",
      sizes: "Manufactured up to 9000 mm diameter, the largest size range offered, built up from ring sections jointed in the shop or on site."
    }
  };

  var STANDARDS_TEXT =
    "Design and fabrication follow the Expansion Joint Manufacturers Association (EJMA) 10th edition, with manufacture to ASME Section VIII (our shop holds the U-Stamp) and, where specified, PED 2014/68/EU or IBR requirements for boiler applications.";
  var QUALITY_TEXT =
    "Every unit is hydrostatically pressure tested and dimensionally checked before dispatch. Non-destructive examination (dye penetrant, radiography or ultrasonic testing, as specified) and third-party inspection by agencies such as Lloyd's Register, Bureau Veritas, SGS, DNV or TÜV are available on request, with full documentation supplied.";

  var LISTING_INTRO =
    "Each type below is engineered to your operating parameters — nominal bore, design pressure, design temperature, flow media, and the axial, lateral and angular movement to be absorbed — then formed, welded and tested at our Chennai works to EJMA, ASME and PED standards. Sizes range from 20 mm nominal bore to 9000 mm diameter, in stainless steel, high-nickel alloys or carbon steel.";

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
      '<p class="mt-5 text-graphite">' + esc(STANDARDS_TEXT) + "</p></div>" +
      '<div class="m:col-span-6 m:col-start-7"><h2 class="font-display text-h4">Quality &amp; testing</h2>' +
      '<p class="mt-5 text-graphite">' + esc(QUALITY_TEXT) + "</p></div>" +
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
    if (/^\/studio\/?$/.test(location.pathname)) fixApprovalsTable();
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

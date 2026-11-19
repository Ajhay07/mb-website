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
      applications: ["Steam and high-temperature process piping", "Turbine exhaust and condenser ducts", "Pump and compressor suction/discharge nozzles", "Tank farm and interconnecting pipeline runs"],
      materials: "Available in austenitic stainless steel (SS 304, 316, 321), high-nickel alloys (Inconel, Incoloy) and carbon steel, with internal flow liners and external tie-rod protection to specification."
    },
    "norrebro-library-annex": {
      applications: ["Flue gas and ducting systems", "Boiler and furnace connections", "Large-diameter, low-pressure ducts requiring single-plane rotation", "Blast furnace gas main sections"],
      materials: "Stainless steel bellows elements with carbon steel or alloy steel hinge plates and pins, sized to the operating pressure, temperature and rotation required."
    },
    "fjordhus": {
      applications: ["Multi-directional piping runs in refineries and power plants", "Elbow-to-elbow connections absorbing angular movement in any plane", "Pipe racks and interconnecting lines with limited anchor points"],
      materials: "Stainless steel or high-nickel alloy bellows with forged carbon steel gimbal rings and trunnions, designed to EJMA angular rotation limits."
    },
    "hald-ege-school": {
      applications: ["Flue gas ducts and boiler casings", "Air-handling and low-pressure ventilation systems", "Non-circular ducting in steel and cement plants"],
      materials: "Fabricated stainless steel or carbon steel bellows plate, with PTFE, fabric or metallic liners available for abrasive or corrosive gas streams."
    },
    "saltvaerket-studios": {
      applications: ["Pipeline direction changes where thrust cannot be anchored", "Turbine exhaust and compressor discharge lines", "Refinery and petrochemical process piping"],
      materials: "Dual bellows (flow and balancing elements) in stainless steel or high-nickel alloy, connected by a tie-rod frame sized to the pressure thrust."
    },
    "lysning-chapel": {
      applications: ["Blast furnace gas mains", "Large-diameter ducting in steel and cement plants", "Cooling water and FGD (flue gas desulphurisation) ducting"],
      materials: "Multi-ply stainless steel or carbon steel bellows, fabricated and shop-tested in sections for diameters beyond standard transport limits."
    }
  };

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
      '<div class="grid gap-10 m:grid-cols-12">' +
      '<div class="m:col-span-5"><h2 class="font-display text-h4">Typical applications</h2>' +
      "<ul class=\"mt-5 space-y-2 text-graphite\">" + apps + "</ul></div>" +
      '<div class="m:col-span-6 m:col-start-7"><h2 class="font-display text-h4">Materials &amp; specification</h2>' +
      '<p class="mt-5 text-graphite">' + esc(info.materials) + "</p></div>" +
      "</div></section>";
    var t = document.createElement("template");
    t.innerHTML = html;
    anchor.parentNode.insertBefore(t.content, anchor);
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

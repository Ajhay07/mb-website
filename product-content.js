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
      quality: "Every unit gets a hydrostatic test to design pressure, a dimensional check against the approved drawing, and a weld inspection: dye penetrant as standard, radiography where the specification calls for it. Certificates travel with the unit.",
      selection: "Specify a universal joint wherever the movement to absorb is mostly lateral, with some axial and angular give on top, between two points you can't bring into line by routing alone. Because the centre spool takes the angular component rather than the bellows themselves, you get more lateral capacity per unit of installed length than a single bellows of the same diameter would allow, without the cost and bulk of the hinge or gimbal hardware those designs need. Where the dominant requirement is single-plane rotation instead of offset, a hinged joint usually does the job in a smaller footprint; where rotation can occur in any plane at once, a gimbal joint is the better fit.",
      specs: {
        size: "DN 50 – DN 2000 (2″ – 80″)",
        pressure: "Full vacuum up to 40 barg",
        temperature: "-196°C to 650°C",
        materials: "SS 304, 316, 321; Inconel 625; Incoloy 825",
        codes: "EJMA 10th Ed., ASME Section VIII Div. 1, ASME B31.3",
        tests: "Hydrostatic test, dye penetrant examination, radiography on request"
      },
      faq: [
        { q: "How much lateral movement can a universal joint take up?", a: "It depends on bore, convolution count and spool length, not a single fixed figure. Give us the required lateral offset alongside the line size and pressure, and we size the spool and convolution count to deliver it within EJMA's fatigue-life limits." },
        { q: "Can it also handle angular misalignment?", a: "Yes. The floating centre spool carries axial and angular movement while the two bellows take up the lateral offset, so a single universal joint can absorb all three movements at once, which is what tells most buyers it's the right joint before anything else does." },
        { q: "Do I need tie rods on a universal joint?", a: "Tie rods aren't structural on a universal joint the way they are on an axial bellows, since the spool itself restrains angular movement, but we fit external movement limit rods on request where erection sequence or transport calls for it." },
        { q: "How long does a universal joint take to manufacture?", a: "Standard stainless units in common sizes typically ship in 3 to 5 weeks from a signed drawing; exotic alloys, large diameters or added test requirements extend that, so it's worth sharing your timeline when you send the enquiry rather than after the order is placed." }
      ],
      installation: "Universal joints need guides on the pipe either side to keep the assembly square and stop it taking up movement sideways instead of along its design axes. Anchors belong beyond the guides, not on the joint itself, and the run should be cold-sprung if the installed temperature sits far from the operating one, so the bellows isn't starting from one end of its travel on day one.",
      commonIssues: "The failures we get asked to look at almost always trace back to a missing or undersized pipe guide, which lets the centre spool wander and loads the convolutions with movement they weren't sized for. Torsional loading from a run that was never properly supported is the other repeat offender: universal joints absorb lateral, axial and angular movement, not twist, and a bellows asked to do that job fails early."
    },
    "norrebro-library-annex": {
      design: "A hinged joint pins two plates either side of a single bellows, so the hinge, not the bellows, carries the pressure thrust and any side load from the duct. That leaves the bellows to do one thing: rotate, in the plane the hinge allows. On their own they only manage one movement, which is why you'll usually see two or three of them working together to close out an offset.",
      applications: ["Flue gas and ducting systems", "Boiler and furnace connections", "Large-diameter, low-pressure ducts requiring single-plane rotation", "Blast furnace gas main sections"],
      materials: "Bellows elements are stainless; hinge plates and pins go in carbon or alloy steel, sized to the thrust the line will put through them, with a heavier wall or a harder pin where the pressure or the duct diameter calls for it.",
      sizes: "These scale up well. Most of our large-diameter, low-pressure duct work, flue gas lines and blast furnace gas mains among them, runs on hinged joints rather than one oversized bellows.",
      standards: "EJMA governs the bellows geometry; the hinge hardware is sized separately, by hand calculation against the line's maximum thrust rather than the EJMA pressure rating.",
      quality: "Hinge pins and plates are checked for dimension before assembly, the welded bellows is leak-tested, and the finished joint is cycled through its design rotation before it leaves the shop.",
      selection: "Hinged joints earn their place on large-diameter, low-pressure ducting, where the pressure thrust at that bore would otherwise need an anchor too heavy to be practical. Pinning the thrust path through external hinge plates instead of through the bellows lets the convolutions be sized purely for the rotation, not for restraining the line. Because a single hinge only permits rotation in one plane, two hinged joints set 90 degrees apart will do what a gimbal joint does in one assembly; which arrangement wins usually comes down to available space and whether the duct run already has a natural second bend to carry the second hinge.",
      specs: {
        size: "DN 300 – DN 6000, larger on request",
        pressure: "Up to 10 barg (ducting duty)",
        temperature: "Ambient to 600°C",
        materials: "Stainless bellows; carbon or alloy steel hinge plates and pins",
        codes: "EJMA 10th Ed., ASME B31.1",
        tests: "Leak test, dimensional check, hinge rotation and load verification"
      },
      faq: [
        { q: "Why fit external hinges instead of just a heavier bellows?", a: "Past a certain diameter, the pressure thrust on an unrestrained bellows needs an anchor that's expensive or physically impossible to build. Hinge plates carry that thrust externally, through steel designed for the load, so the bellows itself only has to flex." },
        { q: "How many hinged joints does one offset need?", a: "One hinge gives rotation in a single plane. Most duct offsets need two, set at the ends of a short connecting pipe spool and oriented so their rotation planes combine to close out the required movement; some layouts need three." },
        { q: "Can the hinge pins be inspected after the joint is installed?", a: "Yes. Hinge plates and pins are accessible from outside the duct, so routine inspection doesn't require cutting into the line or removing the bellows." },
        { q: "Can hinged joints be supplied with insulation and cladding?", a: "Yes, we can fit insulation support rings and leave the hinge hardware accessible through the cladding, which matters more here than on most joint types since the hinges need periodic inspection over the line's life." }
      ],
      installation: "Hinge pins carry real load, so the steelwork they're bolted to has to be checked against the actual thrust calculation, not just specified to the pipe schedule. Two or three hinged joints working as a set need their rotation planes set out precisely at the design stage; get the orientation wrong on site and the joints fight each other instead of sharing the movement between them.",
      commonIssues: "Most problems on hinged joints come from treating the hinge as an afterthought bracket rather than a load-bearing component: undersized plates, pins without enough bearing area, or a support structure sized for the duct's dead weight but never checked against pressure thrust. The bellows itself rarely fails first on a properly hinged joint; the hardware around it does."
    },
    "fjordhus": {
      design: "Two hinge pairs, set at right angles on a floating gimbal ring, give this joint rotation in any plane at once rather than just one, which is the whole reason to specify a gimbal over a pair of hinged joints. The ring carries the thrust; the bellows only flexes.",
      applications: ["Multi-directional piping runs in refineries and power plants", "Elbow-to-elbow connections absorbing angular movement in any plane", "Pipe racks and interconnecting lines with limited anchor points"],
      materials: "Bellows in stainless or high-nickel alloy; gimbal rings and trunnions forged in carbon steel and machined to take the thrust without deflecting under load.",
      sizes: "Sized first to the line pressure, then checked against the angular rotation needed in each plane. The two don't always point to the same ring diameter, so we check both before we commit to a design.",
      standards: "EJMA's angular-rotation limits set the bellows geometry; ring and trunnion sizing is our own calculation, checked against the worst-case combined thrust from both planes.",
      quality: "Before dispatch we run the gimbal through its full rotation under no load, then hydrostatic test the bellows to design pressure with the ring locked square.",
      selection: "A gimbal joint is the right call when the run has to absorb angular movement that doesn't stay in one plane, elbow-to-elbow connections on a pipe rack being the classic case, and there isn't room or budget for two hinged joints and the extra pipe spool between them. Combining both rotation axes into one gimbal ring also means one less weld joint and one less point of potential leakage in the line. Where the required movement really is confined to a single plane, a hinged joint will do the same job at lower cost, so the layout drawing is usually what decides between the two before the pressure rating does.",
      specs: {
        size: "DN 100 – DN 3000",
        pressure: "Full vacuum up to 25 barg",
        temperature: "-29°C to 600°C",
        materials: "SS or high-nickel alloy bellows; forged carbon steel rings and trunnions",
        codes: "EJMA 10th Ed., ASME Section VIII Div. 1",
        tests: "Full-rotation functional check, hydrostatic test, dye penetrant on welds"
      },
      faq: [
        { q: "What's the real difference between a gimbal and a pair of hinged joints?", a: "Function-wise, very little, both give combined angular rotation across two planes. The gimbal does it in one assembly and one pipe spool shorter, which usually wins on cost and leak paths unless the layout already has the length to spare for two hinges." },
        { q: "Can the gimbal ring be oriented to favour one rotation plane?", a: "Yes. If the line's movement is mostly in one direction with only a little in the other, we can size the ring and trunnions asymmetrically rather than for equal rotation both ways." },
        { q: "How is the trunnion load worked out?", a: "From the worst-case combination of pressure thrust and the angular movement in both planes together, not each plane checked separately, since a gimbal can be asked to rotate in both at once." },
        { q: "Does a gimbal joint need clearance once it's lagged?", a: "Yes, and it's easy to miss. The ring has to keep its full rotation once insulation and cladding go on around it, so we mark the clear envelope it needs on the drawing before the joint ever gets to site." }
      ],
      installation: "Trunnion supports need to resist the full thrust in both rotation planes at once, the worst case a gimbal joint sees, rather than each plane checked against the thrust in isolation. We mark the neutral position on every gimbal before it ships, so the erection crew can confirm it's installed square before the line is charged.",
      commonIssues: "The recurring issue is a support structure sized against a single-plane thrust figure borrowed from a hinged-joint calculation, which under-sizes it for a gimbal that can rotate, and generate thrust, in two planes simultaneously. The other is forgetting the ring needs clearance to rotate once insulation and cladding have gone on around it."
    },
    "hald-ege-school": {
      design: "Rectangular joints are built to the duct's own cross-section rather than forced into a round bellows, which is the only practical way to handle the large, low-pressure ducting that flue gas and air-handling work usually needs. Corner geometry and reinforcement are worked out case by case; a square corner behaves very differently from a radiused one under the same pressure.",
      applications: ["Flue gas ducts and boiler casings", "Air-handling and low-pressure ventilation systems", "Non-circular ducting in steel and cement plants"],
      materials: "Stainless or carbon steel plate, formed and welded panel by panel. PTFE, fabric or metallic liners go in where the gas stream carries abrasive dust or runs corrosive.",
      sizes: "There's no fixed bore here. We work from your duct drawing, and convolution count and reinforcement follow from that.",
      standards: "EJMA's rectangular-joint rules cover the convolution design; liner material is chosen against the gas analysis you give us, not a standard specification.",
      quality: "Panel welds are inspected before final assembly, corners are checked against the drawing for square, and the finished joint is pressure-tested to the design figure before it ships.",
      selection: "Rectangular joints exist because the duct does: when the interface on both sides is already a rectangular or square flange, forcing a round bellows between them just adds a pair of expensive, failure-prone transition pieces. The trade-off is in the corners, which concentrate stress under pressure and movement in a way a round bellows never has to deal with, so reinforcement and ply count there are worked out for the specific cross-section rather than read off a standard table.",
      specs: {
        size: "Custom cross-sections, matched to your duct drawing",
        pressure: "Typically up to 1000 mmWC (low-pressure ducting duty)",
        temperature: "Ambient to 500°C, higher with a liner",
        materials: "SS or CS plate; PTFE, fabric or metallic liners",
        codes: "EJMA rectangular-joint design rules",
        tests: "Panel weld inspection, dimensional/square check, pressure test to design figure"
      },
      faq: [
        { q: "What temperature can a rectangular joint handle?", a: "The bellows element itself is rated by material and ply count the same way a round one would be; the limit in practice is usually the liner, which is chosen against the actual gas analysis you give us rather than a generic rating." },
        { q: "Why do the corners need special attention?", a: "A flat panel under internal pressure wants to bow outward, and a corner is where two panels fight that tendency against each other. Left unreinforced, that's where a rectangular joint fails first, so corner geometry gets checked separately from the flat-face convolution design." },
        { q: "Can you line a rectangular joint for abrasive flue gas dust?", a: "Yes. PTFE, fabric and metallic liner options are all available, selected against the dust loading and gas temperature you specify, to keep abrasive flow off the convolutions themselves." },
        { q: "Can a rectangular joint be split for easier installation?", a: "Yes, large units can be supplied in sections for site assembly where access or crane capacity won't take it in one piece; the split location and field-weld procedure are agreed with you at the drawing stage, not improvised on site." }
      ],
      installation: "Duct flanges either side of a rectangular joint need to land square and parallel; a twisted connection loads the corners unevenly before the line has even started up. Where a liner is fitted, it goes in with enough slack to follow the joint's movement without tearing at the corners, the first place a tight liner lets go.",
      commonIssues: "Corner failure is the signature problem on a badly specified rectangular joint, usually traced to a convolution design scaled up from a smaller unit without re-checking the corner geometry at the new size. The second recurring issue is liner wear from abrasive dust where the actual gas analysis was never given to us at the design stage, so the liner specified was for a cleaner stream than the one it ended up handling."
    },
    "saltvaerket-studios": {
      design: "Two bellows, not one: a flow bellows and a smaller balancing bellows, tied together through a central spool and a tie-rod frame. The balancing bellows takes the same pressure thrust in the opposite direction, so the two cancel out internally instead of loading whatever's bolted to either end. That's what lets you put a joint at a bend without anchoring the pump or turbine nozzle behind it.",
      applications: ["Pipeline direction changes where thrust cannot be anchored", "Turbine exhaust and compressor discharge lines", "Refinery and petrochemical process piping"],
      materials: "Both bellows in the same material, stainless or high-nickel alloy, with the tie-rod frame sized in carbon steel to the net thrust once the balancing is accounted for.",
      sizes: "The balancing bellows area is set as a ratio of the flow bellows area. Get that ratio right and the residual thrust on the anchors drops close to zero.",
      standards: "EJMA's pressure-balanced design procedure sets the area ratio and tie-rod sizing; fabrication is ASME Section VIII in our U-Stamped shop.",
      quality: "We test the flow and balancing bellows separately before assembly, then hydrostatic test the finished joint as a unit. A mismatch between the two only shows up once it's fully assembled, so that final test is the one that matters.",
      selection: "Reach for a pressure-balanced joint wherever the piece of equipment on one side of the joint, a turbine casing, a compressor nozzle, a pump flange, simply cannot take the pressure thrust an ordinary bellows would put on it. By internally cancelling that thrust between the flow and balancing bellows, the tie-rod frame only has to carry what's left over, which is small enough that the equipment's own nozzle can usually take it without a separate anchor structure. The cost is a longer, heavier assembly than a single bellows at the same bore, which is the trade every pressure-balanced specification is making.",
      specs: {
        size: "DN 100 – DN 1200 (flow bellows bore)",
        pressure: "Full vacuum up to 40 barg",
        temperature: "-29°C to 550°C",
        materials: "SS or high-nickel alloy bellows; carbon steel tie-rod frame",
        codes: "EJMA pressure-balanced design procedure, ASME Section VIII Div. 1",
        tests: "Separate hydrostatic tests on both bellows, then a full-assembly hydrostatic test"
      },
      faq: [
        { q: "What exactly does \"pressure-balanced\" mean here?", a: "The flow bellows and the smaller balancing bellows are connected so the same internal pressure pushes against each in opposite directions. The two thrusts cancel internally, leaving only a small residual load on the tie-rod frame instead of the full pressure thrust reaching whatever the joint is bolted to." },
        { q: "How is the balancing bellows sized?", a: "As a ratio of the flow bellows' effective area, calculated to EJMA's pressure-balanced procedure. Get the ratio right and the residual thrust on the anchors drops close to zero; get it wrong and the joint doesn't do the one job it exists for." },
        { q: "Can this type be used anywhere other than a bend?", a: "Bends are the most common case because that's where thrust has nowhere to go without turning the pipe, but any location where the connected equipment's nozzle can't take ordinary bellows thrust is a candidate, turbine and compressor connections especially." },
        { q: "What happens if the operating pressure changes after the joint is ordered?", a: "Tell us before it's built, not after. The area ratio between the flow and balancing bellows is calculated for a specific pressure, and a joint balanced for one duty won't necessarily stay balanced at another, which defeats the reason for specifying it in the first place." }
      ],
      installation: "The tie-rod frame is set to its cold length before the line is welded in, not adjusted afterward, because that length is what fixes the balance between the flow and balancing bellows. Supports near the joint only need to carry the small residual thrust rather than the full line pressure, which is worth confirming with whoever is designing the pipe supports so they aren't over-built for a load the joint has already cancelled out.",
      commonIssues: "Most issues trace back to the area ratio being recalculated for a changed operating pressure without re-sizing the balancing bellows to match, which quietly reintroduces the thrust the joint was specified to eliminate. Tie rods backed off or re-tensioned on site without reference to the design cold length cause the same problem from a different direction, so the frame is one part of this joint that's best left exactly as it arrives."
    },
    "lysning-chapel": {
      design: "Past about 1500 mm diameter, a bellows stops being something you form in one piece. It's built as ring sections, welded up in the shop or, beyond transport limits, on site. Getting the circumferential welds right is most of the job at this size: a few millimetres of mismatch between rings shows up as a stress riser once the line starts cycling.",
      applications: ["Blast furnace gas mains", "Large-diameter ducting in steel and cement plants", "Cooling water and FGD (flue gas desulphurisation) ducting"],
      materials: "Multi-ply stainless or carbon steel, with ply count set by the design pressure and the number of cycles the line will see over its life.",
      sizes: "Up to 9000 mm diameter, the top of our range, built up from ring sections for anything beyond a single forming pass or a standard trailer load.",
      standards: "EJMA's multi-ply bellows rules apply ply by ply; large-diameter field joints follow our own welding procedure, qualified separately from the shop welds.",
      quality: "Every ring is checked for dimension before it's welded to the next; the assembled bellows is leak-tested, and a field joint gets its own radiography before the line is commissioned.",
      selection: "Large-bore bellows are specified where the line itself is large, blast furnace gas mains and major ducting in steel and cement plants being the usual case, so the decision is rarely whether to use a bellows at all but how to build and deliver one at that diameter. Ring-section construction, rather than one continuous forming pass, is what makes diameters up to 9000 mm achievable: each ring is formed and checked to size before it's welded to the next, and where the finished bellows would exceed what a trailer can carry, the final rings are welded up on site instead of in the shop.",
      specs: {
        size: "DN 1500 – 9000 mm, built up from ring sections",
        pressure: "Up to 5 barg (large-diameter ducting duty)",
        temperature: "Ambient to 450°C, higher with a liner",
        materials: "Multi-ply stainless or carbon steel",
        codes: "EJMA multi-ply bellows rules; in-house qualified field-weld procedure",
        tests: "Per-ring dimensional check, leak test, field-joint radiography before commissioning"
      },
      faq: [
        { q: "How many plies does a large-bore bellows need?", a: "Ply count is set by the design pressure and the number of pressure and thermal cycles the line will see over its service life, worked out ring by ring rather than assumed from diameter alone." },
        { q: "How do you get a 9000 mm bellows to site?", a: "In sections. Rings are formed and welded up in the shop to the largest size a standard trailer can carry; where the complete bellows would exceed that, the remaining rings are welded on site under the same qualified procedure as the shop welds." },
        { q: "What's a field joint and why does it get its own test?", a: "It's a weld made on site rather than in the controlled conditions of the shop floor. Because it's the one joint not made under shop conditions, it gets its own radiography before the line is commissioned, separate from the checks already done on every shop-welded ring." },
        { q: "How is a bellows this size supported without restraining it?", a: "On saddles sized to carry its dead weight while leaving the movement path clear; a support that touches the convolutions or pins the bellows too close to its anchor defeats the purpose of fitting one at this diameter in the first place." }
      ],
      installation: "Ring sections shipped separately are match-marked before they leave the shop, so site welding follows the same sequence and orientation as the shop assembly; welding them up out of order is the fastest way to introduce ovality a bellows this size can't absorb. Support saddles carry the bellows' own weight without restraining the movement it's there to take up.",
      commonIssues: "Ovality from incorrect handling or storage before installation is the most common site issue at this diameter; a bellows this size has very little stiffness of its own and takes the shape of whatever it's left resting on. The other recurring problem is a field joint welded without the same procedure qualification as the shop welds, which is exactly the joint most likely to be questioned later in the line's life."
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

  var SPEC_LABELS = [
    ["size", "Size range"],
    ["pressure", "Pressure rating"],
    ["temperature", "Temperature range"],
    ["materials", "Materials"],
    ["codes", "Design codes"],
    ["tests", "Testing"]
  ];

  var EXTRA_GALLERY_BASE = "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto:best,c_limit,w_1600/mb-website/client-supplied/";
  var EXTRA_GALLERY = {
    "kyst-house": [
      { id: "hq-bellow-closeup-1", caption: "Bellows element, Chennai works" },
      { id: "hq-single-bellow-painted", caption: "Finished unit, flange to flange" },
      { id: "hq-finished-batch-painted", caption: "Finished units ready for dispatch" }
    ],
    "hald-ege-school": [
      { id: "hq-rectangular-duct", caption: "Rectangular duct expansion joint" },
      { id: "sawtooth-1", caption: "Saw-tooth fabric expansion joint" },
      { id: "sawtooth-2", caption: "Saw-tooth fabric expansion joint, installed" }
    ]
  };

  function addProductDetail() {
    var m = location.pathname.match(/^\/projects\/([a-z0-9-]+)\/?$/);
    if (!m || !PRODUCT_INFO[m[1]]) return false;
    if (document.getElementById("product-spec-section")) return true;
    var anchor = document.querySelector('section[aria-labelledby="next-title"]');
    if (!anchor || !anchor.parentNode) return false;
    var info = PRODUCT_INFO[m[1]];
    var extraPhotos = EXTRA_GALLERY[m[1]] || [];
    var extraGalleryHtml = !extraPhotos.length ? "" :
      '<div class="mt-16"><h2 class="font-display text-h4">From our works</h2>' +
      '<div class="mt-6 grid gap-6 m:grid-cols-3">' +
      extraPhotos.map(function (p) {
        return '<figure><div class="relative aspect-[4/3] bg-rule overflow-hidden">' +
          '<img src="' + EXTRA_GALLERY_BASE + p.id + '" alt="' + esc(p.caption) + '" loading="lazy" ' +
          'style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"/></div>' +
          '<figcaption class="mt-2 text-small text-graphite">' + esc(p.caption) + "</figcaption></figure>";
      }).join("") + "</div></div>";
    var apps = info.applications.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
    var specRows = SPEC_LABELS.map(function (pair) {
      return '<div class="mbr-spec-row"><dt>' + esc(pair[1]) + "</dt><dd>" + esc(info.specs[pair[0]]) + "</dd></div>";
    }).join("");
    var faqItems = info.faq.map(function (item, i) {
      return '<div class="mbr-faq-item"><h3 class="font-display text-lead">' + esc(item.q) + "</h3>" +
        '<p class="mt-2 text-graphite">' + esc(item.a) + "</p></div>";
    }).join("");
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
      "</div>" +
      '<div class="mt-16 max-w-[62ch]"><h2 class="font-display text-h4">Choosing this joint</h2>' +
      '<p class="mt-5 text-graphite">' + esc(info.selection) + "</p></div>" +
      '<div class="mt-16 grid gap-10 m:grid-cols-12">' +
      '<div class="m:col-span-5"><h2 class="font-display text-h4">Installation notes</h2>' +
      '<p class="mt-5 text-graphite">' + esc(info.installation) + "</p></div>" +
      '<div class="m:col-span-6 m:col-start-7"><h2 class="font-display text-h4">What usually goes wrong</h2>' +
      '<p class="mt-5 text-graphite">' + esc(info.commonIssues) + "</p></div>" +
      "</div>" +
      '<div class="mt-16"><h2 class="font-display text-h4">Specification at a glance</h2>' +
      '<dl class="mbr-spec-table mt-6">' + specRows + "</dl></div>" +
      '<div class="mt-16"><h2 class="font-display text-h4">Questions we hear first</h2>' +
      '<div class="mbr-faq mt-6">' + faqItems + "</div></div>" +
      extraGalleryHtml +
      "</section>";
    var t = document.createElement("template");
    t.innerHTML = html;
    anchor.parentNode.insertBefore(t.content, anchor);
    return true;
  }

  var PROFILE_BADGES = [
    "ISO 9001:2015 Quality Management",
    "ASME U-Stamped Shop",
    "PED 2014/68/EU CE-Marked",
    "IBR Boiler Regulatory Approved",
    "EJMA 10th Edition"
  ];

  var COMPANY_PROFILE_HTML =
    '<p class="text-small text-graphite">Company profile &amp; standards</p>' +
    '<h2 class="mt-2 font-display text-h4">Engineered to international standards</h2>' +
    '<p class="mt-4 text-graphite"><strong>MB Metallic Bellows Private Limited</strong> manufactures bellows, expansion joints, compensators, metal hoses, rubber bellows, non-metallic fabric bellows, dampers, strainers, couplings and sleeve couplings.</p>' +
    '<p class="mt-3 text-graphite">Our facility sits in a strategically located industrial zone at Chennai, India, with close proximity to air, sea, rail and road services.</p>' +
    '<p class="mt-3 text-graphite">With over 25 years of experience in design, fabrication and testing, and an established supply chain, we can despatch expansion joints within 48 hours of order placement to both domestic and overseas customers.</p>' +
    '<div class="mbr-badge-row mt-6">' +
    PROFILE_BADGES.map(function (b) { return '<span class="mbr-badge">' + esc(b) + "</span>"; }).join("") +
    "</div>";

  var COMPANY_PROFILE_DETAIL_HTML =
    '<div class="mbr-profile-card"><h3 class="font-display text-lead">Complete range of manufacturing</h3>' +
    '<p class="mt-2 text-small text-graphite">(1) <strong>Metallic expansion joints:</strong> circular and rectangular, universal, hinged, gimbal, pressure balanced, reinforced, and metal hoses for high-pressure applications.</p>' +
    '<p class="mt-2 text-small text-graphite">(2) <strong>Stainless steel bellows:</strong> ranging from 20 mm to 9000 mm. We also manufacture instrument bellows, bellows assemblies, bellows-related ducts, couplings, gaskets and accessories.</p>' +
    '<div class="mt-4 relative aspect-[16/9] bg-rule overflow-hidden"><img src="https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto:best,c_limit,w_1600/mb-website/client-supplied/hq-hose-coil" alt="Coiled stainless steel metal hose" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"/></div>' +
    '<p class="mt-2 text-small text-graphite">Stainless steel metal hose, one of our standard product lines alongside bellows and expansion joints.</p></div>' +
    '<div class="mbr-profile-card mt-6"><h3 class="font-display text-lead">Custom engineering &amp; movement absorption</h3>' +
    '<p class="mt-2 text-small text-graphite">These expansion joints absorb movement arising in multiple planes in pipelines, caused by variation in temperature and pressure, following standards laid down by the Expansion Joint Manufacturers Association, USA (EJMA).</p>' +
    '<p class="mt-2 text-small text-graphite">For special applications, units are designed and manufactured to customer specifications based on nominal bore, design pressure, design temperature, flow media, flow velocity, and axial, lateral and angular deflection, supported by appropriate destructive and type testing.</p></div>' +
    '<div class="mbr-profile-card mt-6"><h3 class="font-display text-lead">Shop infrastructure</h3>' +
    '<p class="mt-2 text-small text-graphite">The works occupies a 2-acre site at Oragadam, Chennai &mdash; 8,000 m&sup2; of ground area with 1,500 m&sup2; under roof for fabrication, served by 16-tonne and 10-tonne EOT cranes and a 200 kVA diesel generator for uninterrupted production.</p>' +
    '<p class="mt-2 text-small text-graphite">We are an NSIC-registered manufacturing unit (Ref. NSIC(M)/GP/6210/2010/90) and have supplied over 2,000 expansion joints across nuclear, conventional power, refineries, minerals &amp; metals, infrastructure, fertilizers and defence in the last decade.</p></div>';

  function addCompanyProfile() {
    if (!/^\/studio\/?$/.test(location.pathname)) return false;
    if (document.getElementById("company-profile-section")) return true;
    var anchor = document.querySelector('section[aria-labelledby="closing-title"]');
    if (!anchor || !anchor.parentNode) return false;
    var html =
      '<section id="company-profile-section" class="mx-auto w-full max-w-[1600px] px-4 m:px-8 mt-20 m:mt-28 pt-16 border-t border-rule">' +
      '<div class="grid gap-10 m:grid-cols-12">' +
      '<div class="m:col-span-5">' + COMPANY_PROFILE_HTML + "</div>" +
      '<div class="m:col-span-6 m:col-start-7">' + COMPANY_PROFILE_DETAIL_HTML + "</div>" +
      "</div></section>";
    var t = document.createElement("template");
    t.innerHTML = html;
    anchor.parentNode.insertBefore(t.content, anchor);
    return true;
  }

  var QHSE_POLICIES = [
    {
      title: "Quality",
      body: "Every order is designed, manufactured and tested against the standard it was quoted against, not a catalogue approximation of it. We'd rather hold a delivery date for a day than ship a unit that doesn't match its own drawing, and the paper trail, from material certificate to final hydrostatic test, is built to prove that at any point after handover."
    },
    {
      title: "Safety",
      body: "Forming, welding and pressure testing all carry real risk if they're treated casually, so equipment handling, PPE and test procedures are fixed, not left to individual judgement on the day. We review incidents and near-misses specifically to close the gap before it causes one, not after."
    },
    {
      title: "Environment",
      body: "Material is cut to the job, not to convenience, and offcuts, scrap metal and packaging are segregated and recovered rather than binned together. Where a process can run on less water or less power without compromising the test or the weld, that's the version we run."
    }
  ];

  var MADE_WITH_CARE =
    "None of this is abstract policy for us. It's the difference between a bellows that reaches its design cycle life and one that fails early, and between a shop floor that runs safely for thirty years and one that doesn't. We built the business on getting the first thing right, and the second and third are what let us keep doing it.";

  function addCompanyQHSE() {
    if (!/^\/studio\/?$/.test(location.pathname)) return false;
    if (document.getElementById("company-qhse-section")) return true;
    var anchor = document.querySelector('section[aria-labelledby="closing-title"]');
    if (!anchor || !anchor.parentNode) return false;
    var policies = QHSE_POLICIES.map(function (p) {
      return '<div><h3 class="font-display text-lead">' + esc(p.title) + "</h3>" +
        '<p class="mt-2 text-graphite">' + esc(p.body) + "</p></div>";
    }).join("");
    var html =
      '<section id="company-qhse-section" class="mx-auto w-full max-w-[1600px] px-4 m:px-8 mt-20 m:mt-28">' +
      '<h2 class="font-display text-h4">Quality, safety &amp; environment</h2>' +
      '<div class="mt-8 grid gap-10 m:grid-cols-3">' + policies + "</div>" +
      '<p class="mt-12 max-w-[62ch] text-graphite">' + esc(MADE_WITH_CARE) + "</p>" +
      "</section>";
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

  var EXTRA_CAPABILITIES = [
    { label: "Dampers", href: "/projects/dampers", note: "Slide-gate and multi-blade dampers, 500–2500 mm" },
    { label: "Strainers", href: "/projects/strainers", note: "Y-type and basket strainers, up to DN 350" },
    { label: "Couplings & sleeve couplings", href: "/projects/couplings", note: "Rigid and sleeve couplings, up to 900 NB" }
  ];
  var CAP_ARROW =
    '<span aria-hidden="true" class="relative size-4 shrink-0 translate-x-0 transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1.5">' +
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" class="size-4"><path d="M2 8h12M9 3l5 5-5 5"></path></svg></span>';

  function addAdditionalCapabilities() {
    if (!/^\/projects\/?$/.test(location.pathname)) return false;
    if (document.getElementById("additional-capabilities")) return true;
    var grid = document.querySelector('div[class*="gap-y-14"]');
    if (!grid || !grid.parentNode) return false;
    var rows = EXTRA_CAPABILITIES.map(function (c) {
      return '<a href="' + c.href + '" class="group flex items-center justify-between gap-6 border-b border-rule py-6 text-left">' +
        '<span><span class="block font-display text-h4 transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-1.5">' + esc(c.label) + '</span>' +
        '<span class="mt-1 block text-small text-graphite">' + esc(c.note) + '</span></span>' + CAP_ARROW + '</a>';
    }).join("");
    var sec = document.createElement("section");
    sec.id = "additional-capabilities";
    sec.setAttribute("aria-labelledby", "additional-capabilities-title");
    sec.className = "mx-auto grid w-full max-w-[1600px] gap-10 px-4 pt-28 m:grid-cols-12 m:px-8 m:pt-40";
    sec.innerHTML =
      '<div class="m:col-span-4"><h2 id="additional-capabilities-title" class="font-display text-h3">Also from our Chennai works</h2>' +
      '<p class="mt-4 max-w-[30ch] text-graphite">NSIC-registered manufacturing capability outside our core bellows range.</p></div>' +
      '<div class="m:col-span-7 m:col-start-6"><div class="border-t border-rule">' + rows + '</div></div>';
    grid.parentNode.insertBefore(sec, grid.nextSibling);
    return true;
  }

  var INSTALL_PHOTOS = [
    { id: "install-jk-tyre", client: "JK Tyre" },
    { id: "install-bhel-hyd", client: "BHEL, Hyderabad" },
    { id: "install-iocl-guwahati", client: "IOCL, Guwahati" },
    { id: "install-mppgcl-satpura", client: "MPPGCL, Satpura TPS" },
    { id: "install-asva", client: "ASVA" }
  ];
  var INSTALL_BASE = "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto:best,c_limit,w_1600/mb-website/client-supplied/";

  function addInstallations() {
    if (!/^\/projects\/?$/.test(location.pathname)) return false;
    if (document.getElementById("installations-section")) return true;
    var cap = document.getElementById("additional-capabilities");
    if (!cap || !cap.parentNode) return false;
    var tiles = INSTALL_PHOTOS.map(function (p) {
      return '<figure><div class="relative aspect-[4/3] bg-rule overflow-hidden">' +
        '<img src="' + INSTALL_BASE + p.id + '" alt="Rectangular expansion joint installed at ' + esc(p.client) + '" loading="lazy" ' +
        'style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"/></div>' +
        '<figcaption class="mt-2 text-small text-graphite">' + esc(p.client) + '</figcaption></figure>';
    }).join("");
    var sec = document.createElement("section");
    sec.id = "installations-section";
    sec.setAttribute("aria-labelledby", "installations-title");
    sec.className = "mx-auto w-full max-w-[1600px] px-4 pt-28 m:px-8 m:pt-40";
    sec.innerHTML =
      '<h2 id="installations-title" class="font-display text-h3">On site</h2>' +
      '<p class="mt-4 max-w-[62ch] text-graphite">A sample of rectangular expansion joints from our own records, installed and running at customer sites across India.</p>' +
      '<div class="mt-10 grid gap-6 grid-cols-2 m:grid-cols-5">' + tiles + '</div>';
    cap.parentNode.insertBefore(sec, cap.nextSibling);
    return true;
  }

  function ensure() {
    addCardDescriptions();
    addProductDetail();
    addListingIntro();
    shrinkGallery();
    addAdditionalCapabilities();
    addInstallations();
    if (/^\/studio\/?$/.test(location.pathname)) { fixApprovalsTable(); addFabFloorNote(); addCompanyProfile(); addCompanyQHSE(); }
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

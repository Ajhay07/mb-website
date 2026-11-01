# -*- coding: utf-8 -*-
"""Static-site generator for MB Metallic Bellows.
Writes consistent HTML pages sharing header/footer partials."""
import os

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
IMG = "images/site/"

# ---------------------------------------------------------------- icons
I = {
"phone":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>',
"mail":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
"pin":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
"arrow":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
"check":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
"bolt":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>',
"flame":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-1 .3-1.8.6-2.5C6 9 6 12 6 13a6 6 0 0 0 12 0c0-5-6-11-6-11Z"/></svg>',
"beaker":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9.5V3"/><path d="M7.5 15h9"/></svg>',
"cube":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>',
"ship":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a6 6 0 0 0 10 0 6 6 0 0 0 10 0"/><path d="M4 18 3 11l9-3 9 3-1 7"/><path d="M12 3v5M9 14l3-1 3 1"/></svg>',
"factory":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20V9l-6 4V9l-6 4V5H4a2 2 0 0 0-2 2Z"/><path d="M6 20v-4M10 20v-4M14 20v-4M18 20v-4"/></svg>',
"gauge":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14 15 9"/><path d="M3.5 18a9 9 0 1 1 17 0"/><circle cx="12" cy="14" r="1.6"/></svg>',
"shield":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
"ruler":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3 8.7 2.7a1 1 0 0 0-1.4 0L2.7 7.3a1 1 0 0 0 0 1.4l12.6 12.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4Z"/><path d="m7.5 10.5 1.5 1.5M10.5 7.5 12 9M13.5 4.5 15 6M4.5 13.5 6 15"/></svg>',
"cog":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/></svg>',
"award":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M8.2 13.4 7 22l5-3 5 3-1.2-8.6"/></svg>',
"globe":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>',
"leaf":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-6 7-11 16-11 0 9-5 16-11 16Z"/><path d="M4 21c3-6 7-9 12-11"/></svg>',
"users":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
"clock":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
"wrench":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5l-9 9a2.8 2.8 0 0 1-4-4l9-9a4 4 0 0 0-1 1Z"/><path d="M14.7 6.3 18 3l3 3-3.3 3.3"/></svg>',
"layers":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
"flow":'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8h4l2-3 3 14 2-6 2 3h5"/><path d="M18 5h4M18 11h4"/></svg>',
"lin":'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/></svg>',
"fb":'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z"/></svg>',
"x":'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L9 21H6l7.4-8.5L5.5 3H12l4.5 5.5L17.5 3Z"/></svg>',
"yt":'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z"/></svg>',
}

ARROW = I["arrow"]

# ---------------------------------------------------------------- partials
NAV_ITEMS = [
    ("Home", "index.html"),
    ("About", "about.html"),
    ("Products", "products.html"),
    ("Industries", "industries.html"),
    ("Quality", "quality.html"),
    ("Contact", "contact.html"),
]

def head(title, desc, page):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#161C25">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<link rel="icon" href="images/favicon.png" type="image/png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
<script>document.documentElement.classList.add("js")</script>
</head>
<body data-page="{page}">
"""

def logo(footer=False):
    return f"""<a class="logo" href="index.html" aria-label="MB Metallic Bellows home">
  <img class="logo-img" src="images/logo.png" alt="" width="82" height="52">
  <span class="logo-text"><b>Metallic Bellows</b><small>Expansion&nbsp;Joint Specialists</small></span>
</a>"""

def header(active):
    nav = ""
    for i,(label,href) in enumerate(NAV_ITEMS):
        cls = ' class="active"' if href==active else ""
        nav += f'<a href="{href}"{cls}>{label}</a>'
    mnav = ""
    for i,(label,href) in enumerate(NAV_ITEMS):
        mnav += f'<a href="{href}">{label}</a>'
    return f"""
<div class="utility">
  <div class="wrap">
    <div class="utility-left">
      <a class="utility-item" href="tel:+914429590111">{I['phone']}<span>+91 44 2959 0111 / 12</span></a>
      <a class="utility-item" href="mailto:info@mbmetallicbellows.com">{I['mail']}<span>info@mbmetallicbellows.com</span></a>
      <span class="utility-item utility-item--addr">{I['pin']}<span>SIPCOT Industrial Growth Centre, Oragadam, Chennai</span></span>
    </div>
    <div class="utility-right">
      <span class="utility-tag">ISO 9001:2015, ASME <b>U</b>-Stamp, PED</span>
    </div>
  </div>
</div>
<header class="site-header">
  <div class="wrap header-inner">
    {logo()}
    <nav class="nav" aria-label="Primary">{nav}</nav>
    <div class="header-cta">
      <a class="btn" href="contact.html">Request a Quote {ARROW}</a>
      <button class="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="scrim"></div>
<aside class="mobile-nav" aria-label="Mobile">
  <div class="mn-top">{logo()}<button class="mn-close" aria-label="Close menu">&times;</button></div>
  <nav>{mnav}</nav>
  <a class="btn" href="contact.html">Request a Quote {ARROW}</a>
  <div class="mn-contact">
    <span>+91 44 2959 0111 / 12</span>
    <span>info@mbmetallicbellows.com</span>
    <span>Oragadam, Chennai – 602105</span>
  </div>
</aside>
"""

FOOTER = f"""
<footer class="site-footer">
  <div class="wrap footer-main">
    <div class="footer-brand">
      {logo(True)}
      <p>Metallic bellows and expansion joints built to EJMA standards for India's power, steel, refining, chemical and process plants. We make everything from 20&nbsp;mm instrument bellows to 9&nbsp;metre large-bore joints.</p>
      <div class="footer-social">
        <a href="#" aria-label="LinkedIn">{I['lin']}</a>
        <a href="#" aria-label="Facebook">{I['fb']}</a>
        <a href="#" aria-label="YouTube">{I['yt']}</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="quality.html">Quality &amp; Approvals</a></li>
        <li><a href="industries.html">Industries &amp; Clients</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Products</h4>
      <ul>
        <li><a href="products.html">Expansion Joints</a></li>
        <li><a href="products.html">Universal &amp; Gimbal</a></li>
        <li><a href="products.html">Pressure Balanced</a></li>
        <li><a href="products.html">Metal Hoses</a></li>
        <li><a href="products.html">Large-Bore Bellows</a></li>
      </ul>
    </div>
    <div class="footer-col footer-contact-col">
      <h4>Get in Touch</h4>
      <ul class="footer-contact">
        <li>{I['pin']}<span>Plot #47 &amp; 48, SIPCOT Industrial Growth Centre, Oragadam, Chennai – 602105, Tamil Nadu, India</span></li>
        <li>{I['phone']}<span>+91 44 2959 0111 / 12</span></li>
        <li>{I['mail']}<span>info@mbmetallicbellows.com</span></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-wordmark" aria-hidden="true">MB Metallic Bellows</div>
  <div class="footer-bottom"><div class="footer-bottom-in">
    <span>© <span data-year>2026</span> MB Metallic Bellows Private Limited. All rights reserved.</span>
    <span>ISO 9001:2015, ASME U-Stamp and PED certified</span>
  </div></div>
</footer>
<script src="js/main.js"></script>
</body>
</html>"""

def page(filename, title, desc, active, body):
    html = head(title, desc, active.replace(".html","")) + header(active) + body + FOOTER
    with open(os.path.join(OUT, filename), "w", encoding="utf-8") as f:
        f.write(html)
    print("wrote", filename, len(html), "bytes")

HERO_IMG = {"About":("bellows-set.jpg","Assorted flanged and braided bellows"),"Products":("range-set.jpg","Range of bellows and flexible hoses"),
    "Industries":("refinery-pipe.jpg","Bellows installed in refinery piping"),"Quality":("custom-bellows.jpg","Custom-built bellows next to a standard unit"),
    "Contact":("formed-bellows.jpg","Formed bellows and rings")}

def pagehero(crumb, kicker, h1, sub):
    hi, ha = HERO_IMG[crumb]
    return f"""
<section class="page-hero">
  <img class="page-hero-img" src="{IMG}{hi}" alt="{ha}" width="640" height="554">
  <div class="wrap">
    <nav class="crumbs"><a href="index.html">Home</a><span class="sep">/</span><span>{crumb}</span></nav>
    <span class="kicker" style="margin-top:22px">{kicker}</span>
    <h1>{h1}</h1>
    <p>{sub}</p>
  </div>
</section>"""

# ================================================================ products data
PRODUCTS = [
    ("Universal Expansion Joint", "universal-joint.jpg", "Lateral and axial",
     "Two bellows joined by a centre spool. It takes large lateral movement along with axial and angular movement, which makes it the usual choice for long pipe runs between anchors."),
    ("Gimbal Expansion Joint", "tied-joint.jpg", "Angular, multi-plane",
     "A gimbal ring lets the pipe rotate in any plane while holding the full pressure thrust. Fitted in sets, it routes piping around equipment."),
    ("Pressure Balanced Joint", "rod-restrained.jpg", "Thrust balanced",
     "Takes axial and lateral movement and balances the pressure thrust across the bellows, so pumps, turbines and nozzles at elbows and tees are not loaded."),
    ("Tied Lateral Expansion Joint", "flanged-bellows.jpg", "Tie-rod restrained",
     "Tie rods carry the full pressure thrust, so the joint only has to take lateral movement. We have supplied these between turbines and condensers on large power trains."),
    ("Reinforced Bellow", "metal-bellows.jpg", "High pressure",
     "Equalising and reinforcing rings raise the pressure rating of the convolutions for high-pressure service."),
    ("Rectangular Expansion Joint", "rectangular-joint.jpg", "Ducting, low pressure",
     "Metallic and fabric rectangular joints for flue gas ducts, fans and low-pressure gas systems where the duct grows a lot with heat."),
    ("Large-Bore Bellow", "large-bore.jpg", "Up to 9000 mm",
     "Single-piece and segmented bellows up to 9&nbsp;metres across for blast furnace gas mains, ducts and heavy process lines. We fabricate and test them in our own shop."),
    ("Tuyere Stock Bellow", "steel-mill.jpg", "Blast furnace",
     "Expansion bellows made for the tuyere stock on a blast furnace hot-blast system, where they see extreme temperature swings and abrasion."),
]

def prod_card(p, lazy=True):
    name, img, tag, desc = p
    lz = ' loading="lazy"' if lazy else ""
    return f"""<article class="prod-card reveal">
  <div class="prod-figure"><img src="{IMG}{img}" alt="{name}" width="640" height="480"{lz}></div>
  <div class="prod-body">
    <span class="tag">{tag}</span>
    <h3>{name}</h3>
    <p>{desc}</p>
    <a class="textlink pl" href="contact.html">Enquire {ARROW}</a>
  </div>
</article>"""

# ================================================================ clients data
SECTORS = [
    ("Power", ["Bharat Heavy Electricals (BHEL)","NTPC","Nuclear Power Corporation (NPCIL)","Larsen &amp; Toubro","BHAVINI, Kalpakkam"]),
    ("Steel", ["Bhilai Steel Plant","Bokaro Steel Plant","Durgapur Steel Plant","Rourkela Steel Plant","Visakhapatnam Steel Plant","Tata Steel (TISCO)","Jindal Steel &amp; Power"]),
    ("Refineries", ["Chennai Petroleum (CPCL)","Indian Oil (IOCL)","Hindustan Petroleum (HPCL)","Bharat Petroleum (BPCL)","Reliance Petrochemicals","Essar Refinery"]),
    ("Fertilizers &amp; Chemicals", ["FACT Travancore","Tata Chemicals","National Fertilizers","GNFC","GSFC","Chambal Fertilizers","Paradeep Phosphates"]),
    ("Sugar &amp; Process", ["Balrampur Chini Mills","EID Parry / GMR","Nirma","Hindustan Unilever","Bannari Amman Sugars"]),
    ("Cement", ["ACC &amp; Ambuja (Holcim)","JK Lakshmi Cement","Jaypee Cement","Shree Cement","India Cements","Dalmia Bharat Cement"]),
    ("Shipping &amp; Defence", ["Mazagon Dock, Mumbai","Hindustan Shipyard, Vizag","Naval Dockyard, Vizag"]),
    ("Inspection &amp; EPC", ["Lloyd's Register","Bureau Veritas","SGS","DNV","TÜV","MECON / M.N. Dastur","TATA Projects","RINA, Intertek"]),
]

# (display name, logo-file slug, real logo URL or None)
_C = "https://commons.wikimedia.org/wiki/Special:FilePath/"
_E = "https://en.wikipedia.org/wiki/Special:FilePath/"
CLIENTS_MQ = [
    ("BHEL","bhel", _E+"BHEL%20logo.svg?width=240"),
    ("NTPC","ntpc", _C+"National%20Thermal%20Power%20logo.svg?width=240"),
    ("L&amp;T","lt", _C+"Larsen-%26-Toubro-Logo.svg?width=240"),
    ("NPCIL","npcil", _E+"NPCIL%20Logo.svg?width=240"),
    ("SAIL","sail", _E+"Steel%20Authority%20of%20India%20logo.svg?width=240"),
    ("Tata Steel","tatasteel", _C+"Tata%20Steel%20Logo.svg?width=240"),
    ("Indian Oil","iocl", _C+"Indian%20Oil%20Logo.svg?width=240"),
    ("Reliance","reliance", _E+"Reliance%20Industries.svg?width=240"),
    ("HPCL","hpcl", _C+"Hindustan%20Petroleum%20logo.svg?width=240"),
    ("BPCL","bpcl", _C+"Bharat%20Petroleum%20logo.svg?width=240"),
    ("Jindal","jindal", _E+"Jindal%20Steel%20Limited%20Logo.png?width=240"),
    ("ACC","acc", _C+"ACC%20Limited%20logo.svg?width=240"),
    ("Ambuja","ambuja", _E+"Ambuja%20Cements.svg?width=240"),
    ("Dalmia Bharat","dalmia", None),
    ("GNFC","gnfc", None),
    ("FACT","fact", None),
    ("Mazagon Dock","mazagon", _E+"Mazagon%20Dock%20Shipbuilders.svg?width=240"),
    ("Shree Cement","shree", _E+"Shree%20cement%20logo.svg?width=240"),
]
def _mq_items():
    out = ""
    for name, slug, logo in CLIENTS_MQ:
        if logo:
            esc = logo.replace("'", "\\'")
            on = f"if(!this.dataset.f){{this.dataset.f=1;this.src='{esc}'}}else{{this.remove()}}"
        else:
            on = "this.remove()"
        out += ('<div class="mq reveal">'
                f'<img class="mq-logo" src="images/logos/{slug}.png" alt="{name}" loading="lazy" onerror="{on}">'
                f'<span>{name}</span></div>')
    return out
MARQUEE_BLOCK = ('<section class="section clients"><div class="wrap">'
                 '<div class="sec-head reveal"><h2>Selected clients</h2></div>'
                 '<div class="logo-wall">' + _mq_items() + '</div></div></section>')

print("Generator ready.")

# ================================================================ HOME
home = f"""
<section class="hero">
  <div class="hero-media"><img src="{IMG}facility.jpg" alt="Technicians running CNC machines on the production floor" width="1600" height="1000" fetchpriority="high"></div>
  <div class="hero-panel">
    <span class="kicker kicker--hero">Expansion joint manufacturer, Chennai</span>
    <h1>Flexible by design.<br>Built to last.</h1>
    <p class="lede">Metallic bellows and expansion joints engineered for India's power, steel and process plants &mdash; 20&nbsp;mm to 9&nbsp;metres, to EJMA, ASME and PED standards.</p>
    <div class="hero-cta">
      <a class="btn btn--lg" href="products.html">Explore Products {ARROW}</a>
    </div>
  </div>
</section>

<section class="stats" aria-label="MB Metallic Bellows in numbers">
  <div class="wrap">
    <div class="reveal"><div class="num"><span data-count="30" data-suffix="+">30+</span></div><div class="lbl">Years Active</div></div>
    <div class="reveal" style="--d:80ms"><div class="num"><span data-count="9000">9000</span><span class="unit">mm</span></div><div class="lbl">Max Diameter</div></div>
    <div class="reveal" style="--d:160ms"><div class="num"><span data-count="11">11</span><span>+</span></div><div class="lbl">Approvals</div></div>
    <div class="reveal" style="--d:240ms"><div class="num">Pan-India</div><div class="lbl">Client Base</div></div>
  </div>
</section>

<section class="trust">
  <div class="wrap">
    <span class="trust-label">Certified &amp; Approved</span>
    <div class="trust-items">
      <span class="cert">ISO 9001:2015 (DNV)</span>
      <span class="cert">ASME U-Stamp</span>
      <span class="cert">PED 2014/68/EU</span>
      <span class="cert">IBR Approved</span>
      <span class="cert">EJMA (USA) Standards</span>
    </div>
  </div>
</section>

<section class="about">
  <div class="about-media reveal">
    <img src="{IMG}precision-manufacturing.jpg" alt="Welder fabricating a bellows assembly" width="1200" height="900" loading="lazy">
    <div class="split-badge"><div class="n">30<span>+</span></div><div class="t">years designing flexible elements for critical service</div></div>
  </div>
  <div class="about-body">
    <span class="kicker reveal">Who We Are</span>
    <h2 class="reveal" style="--d:80ms">We only make bellows and expansion joints.</h2>
    <p class="lede reveal" style="--d:160ms">Bellows, expansion joints, compensators, metal hoses and fabric bellows, all made at our own plant in the SIPCOT industrial area at Oragadam, Chennai.</p>
    <ul class="feature-list">
      <li class="reveal"><h4>20 mm to 9000 mm</h4><p>Stainless steel, high-nickel alloy and carbon steel bellows in every diameter from 20&nbsp;mm up, plus instrument bellows and assemblies.</p></li>
      <li class="reveal"><h4>Made to your duty</h4><p>We size each unit from your nominal bore, design pressure and temperature, the medium, and the axial, lateral and angular movement it has to take.</p></li>
      <li class="reveal"><h4>Inspected by third parties</h4><p>We hold ASME U-Stamp and PED certification and approvals from boiler boards in India and abroad. Independent agencies witness our tests.</p></li>
    </ul>
    <a class="textlink reveal" href="about.html">More about the company {ARROW}</a>
  </div>
</section>

<section class="section band-light">
  <div class="wrap">
    <div class="sec-head sec-head--split">
      <div>
        <span class="kicker reveal">Product Range</span>
        <h2 class="reveal" style="--d:80ms">Expansion joints for your line.</h2>
      </div>
      <div class="aside">
        <p class="lede reveal" style="--d:160ms">Round or rectangular, restrained or free. We match the joint to the movement, thrust and operating conditions of your pipeline.</p>
        <a class="btn btn--ghost reveal" href="products.html">View the full range {ARROW}</a>
      </div>
    </div>
    <div class="prod-grid">
      {''.join(prod_card(p) for p in PRODUCTS[:6])}
    </div>
  </div>
</section>

<section class="section band-dark on-dark">
  <div class="wrap">
    <div class="sec-head">
      <span class="kicker reveal">Where Our Joints Run</span>
      <h2 class="reveal" style="--d:80ms">Where our joints are installed.</h2>
      <p class="lede reveal" style="--d:160ms">From blast furnace gas mains to turbine exhausts, our bellows take up the heat growth, vibration and pressure cycling that rigid pipe cannot.</p>
    </div>
    <ul class="applications reveal">
      <li>Blast furnace &amp; hot-blast systems</li>
      <li>Turbines &amp; compressors</li>
      <li>Heat exchangers</li>
      <li>Boilers &amp; steam-extraction lines</li>
      <li>Exhaust &amp; flue-gas pipe lines</li>
      <li>DG sets</li>
      <li>Heat-recovery systems</li>
      <li>Pre-heater cyclones</li>
      <li>De-waxing filters</li>
      <li>Process-fluid &amp; suction lines</li>
      <li>Condensate suction piping</li>
      <li>Cold-blast BF gas mains</li>
      <li>Flash-box vent to condenser</li>
      <li>Scupper &amp; discharge systems</li>
      <li>External fire-fighting systems</li>
      <li>Compressed &amp; hot-air systems</li>
      <li>Hydro-pore systems</li>
      <li>Power-turbine exhaust pumps</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head">
      <span class="kicker reveal">Industries Served</span>
      <h2 class="reveal" style="--d:80ms">Industries we supply.</h2>
    </div>
    <div class="ind-list">
      <article class="reveal" style="--d:0ms"><h3>Power</h3><p>Thermal &amp; nuclear generation, turbines, boilers and heat-recovery.</p></article>
      <article class="reveal" style="--d:80ms"><h3>Steel &amp; Metals</h3><p>Blast furnaces, gas mains and ducting for integrated steel plants.</p></article>
      <article class="reveal" style="--d:0ms"><h3>Refineries &amp; Hydrocarbons</h3><p>Process piping, carbon-black and petrochemical units.</p></article>
      <article class="reveal" style="--d:80ms"><h3>Fertilizers &amp; Chemicals</h3><p>Corrosive-service joints in high-nickel and special alloys.</p></article>
      <article class="reveal" style="--d:0ms"><h3>Cement</h3><p>Pre-heater, kiln and pollution-control duct expansion joints.</p></article>
      <article class="reveal" style="--d:80ms"><h3>Sugar &amp; Process</h3><p>Evaporator, vapour and process-line compensators.</p></article>
      <article class="reveal" style="--d:0ms"><h3>Shipping &amp; Defence</h3><p>Dockyard and naval exhaust, scupper and discharge systems.</p></article>
      <article class="reveal" style="--d:80ms"><h3>Boilers &amp; HRSG</h3><p>Steam, extraction and flue-gas expansion elements.</p></article>
    </div>
    <div style="margin-top:clamp(56px,7vw,104px)"><a class="btn btn--ghost" href="industries.html">See our client list {ARROW}</a></div>
  </div>
</section>

{MARQUEE_BLOCK}

<section class="cta-band">
  <div class="wrap">
    <div class="reveal">
      <h2>Got a specification? We'll engineer the joint.</h2>
      <p>Send us the nominal bore, pressure, temperature, medium and movements. Our design team will come back with a joint built to EJMA and ASME.</p>
    </div>
    <a class="btn btn--light btn--lg" href="contact.html">Request a Quote {ARROW}</a>
  </div>
</section>
"""
page("index.html", "MB Metallic Bellows | Expansion Joints and Metallic Bellows Manufacturer, Chennai",
     "MB Metallic Bellows Pvt Ltd manufactures metallic bellows, expansion joints, compensators and metal hoses (20–9000 mm) to EJMA, ASME U-Stamp and PED standards for power, steel, refinery and process industries across India.",
     "index.html", home)

# ================================================================ ABOUT
about = pagehero("About", "Company Profile",
    "Thirty years of making flexible elements.",
    "MB Metallic Bellows Private Limited makes bellows, expansion joints and compensators for Indian heavy industry. Our shop in Chennai is ASME, PED and ISO certified.") + f"""
<section class="section">
  <div class="wrap split split--reverse">
    <div class="split-media">
      <div class="ph"><img src="{IMG}precision-manufacturing.jpg" alt="Welder fabricating a bellows assembly" loading="lazy"></div>
      <div class="split-badge"><div class="n">10k<span>+</span></div><div class="t">sq ft of built-up fabrication space in Oragadam, Chennai</div></div>
    </div>
    <div>
      <span class="kicker">Overview</span>
      <div class="sec-head"><h2>Engineering first, then fabrication.</h2></div>
      <div class="prose" style="margin-top:24px">
        <p>MB Metallic Bellows Private Limited (MBMBPL) manufactures bellows, expansion joints, compensators, metal hoses, rubber bellows, non-metallic fabric bellows, dampers, strainers, couplings and sleeve couplings from an industrial zone in Chennai that is close to air, sea, rail and road links.</p>
        <p>Pipelines move in several directions as temperature and pressure change, and our bellows expansion joints absorb that movement. We follow the standards of the Expansion Joint Manufacturers' Association, USA (EJMA). For special applications we design and build to the customer's specification, backed by correlation, destructive and type tests.</p>
      </div>
    </div>
  </div>
</section>

<section class="statband section--tight">
  <div class="wrap">
    <div class="stat-grid">
      <div class="stat-cell"><div class="n">30<span>+</span></div><div class="l">Years of experience in expansion joints &amp; compensators</div></div>
      <div class="stat-cell"><div class="n">20&ndash;9000<span> mm</span></div><div class="l">Stainless steel bellows diameter range</div></div>
      <div class="stat-cell"><div class="n">11<span>+</span></div><div class="l">Third-party inspection agencies &amp; approvals</div></div>
      <div class="stat-cell"><div class="n">Circular<span> + </span>Rect.</div><div class="l">Both geometries, fabricated in-house</div></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div>
      <span class="kicker">What We Make</span>
      <div class="sec-head"><h2>Everything flexible, under one roof.</h2></div>
      <div class="prose" style="margin-top:22px">
        <p>Today MBMBPL manufactures a complete range of products engineered for movement, pressure and temperature across the most demanding services.</p>
        <ul class="ticks">
          <li>Metallic expansion joints, circular and rectangular: universal, hinged, gimbal, pressure balanced and reinforced</li>
          <li>Metal Hoses for high-pressure application</li>
          <li>Stainless steel bellows from 20&nbsp;mm to 9000&nbsp;mm</li>
          <li>Instrument bellows, bellows assemblies, bellows-related duct, couplings and gaskets</li>
        </ul>
      </div>
      <a class="textlink" href="products.html" style="margin-top:30px">Explore the product range {ARROW}</a>
    </div>
    <div>
      <span class="kicker">How We Engineer</span>
      <div class="sec-head"><h2>Designed to your parameters.</h2></div>
      <div class="prose" style="margin-top:22px">
        <p>For special applications, units are designed and manufactured to the customer's specification on the basis of parameters such as:</p>
        <ul class="ticks">
          <li>Nominal bore &amp; design pressure</li>
          <li>Design temperature &amp; flow media</li>
          <li>Flow velocity</li>
          <li>Axial, lateral and angular deflection</li>
        </ul>
        <p>Engineers analyse each requirement using conventional calculation and computer-based simulation to arrive at the optimal flexible-element solution.</p>
      </div>
    </div>
  </div>
</section>

<section class="section" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker kicker--center">Our Commitments</span>
      <h2>Quality, safety and the environment.</h2>
    </div>
    <div class="policy-grid" style="margin-top:38px">
      <div class="policy-card reveal"><div class="pc-ico">{I['shield']}</div><h3>Quality Policy</h3><p>We are committed to achieving high customer satisfaction by designing, manufacturing and supplying metallic bellows and expansion joints that meet international quality standards, delivered to agreed schedules through continual technology upgrades and an improving work culture.</p></div>
      <div class="policy-card reveal"><div class="pc-ico">{I['users']}</div><h3>Safety Policy</h3><p>We provide a safe and healthy workplace for all stakeholders through safe handling of equipment, practical safety measures and frequent monitoring to minimise the risk of accidents.</p></div>
      <div class="policy-card reveal"><div class="pc-ico">{I['leaf']}</div><h3>Environmental Policy</h3><p>"Go green is our motto." We use natural resources carefully, follow the regulations, dispose of or reuse waste properly, and prefer methods that use less water and less paper.</p></div>
    </div>
  </div>
</section>

<section class="photo-band" aria-label="Photographs"><figure class="reveal" style="--d:0ms"><img src="{IMG}machining.jpg" alt="Bellows being machined" width="800" height="600" loading="lazy"></figure><figure class="reveal" style="--d:80ms"><img src="{IMG}bellows-interior.jpg" alt="Inside a large bellows" width="800" height="600" loading="lazy"></figure><figure class="reveal" style="--d:160ms"><img src="{IMG}blueprint.jpg" alt="Joint beside engineering drawings" width="800" height="600" loading="lazy"></figure></section>

<section class="cta-band">
  <div class="wrap">
    <div><h2>Tell us about your line.</h2><p>Talk to our design team about your operating conditions and movements.</p></div>
    <a class="btn btn--light btn--lg" href="contact.html">Contact Us {ARROW}</a>
  </div>
</section>
"""
page("about.html", "About Us | MB Metallic Bellows Pvt Ltd | Chennai",
     "MB Metallic Bellows Pvt Ltd: 30+ years manufacturing bellows, expansion joints and compensators in Chennai to EJMA standards, with ASME U-Stamp, PED and ISO 9001:2015 certification.",
     "about.html", about)

# ================================================================ PRODUCTS
SECONDARY = [
    ("Metal Hoses", I['flow'], "Corrugated and strip-wound flexible hoses for high-pressure service, vibration isolation and pipe misalignment."),
    ("Compensators", I['cog'], "Fabric and metallic compensators for ducting, fans and flue-gas systems handling large thermal growth."),
    ("Rubber Bellows", I['layers'], "Elastomer expansion joints for water, effluent and low-temperature media where flexibility and damping matter."),
    ("Non-Metallic Fabric Bellows", I['layers'], "Multi-layer fabric joints for large rectangular ducts, hot gas and low-pressure air systems."),
    ("Dampers", I['gauge'], "Flow-control and isolation dampers integrated with duct expansion elements."),
    ("Strainers", I['beaker'], "Pipeline strainers to protect pumps, valves and downstream equipment."),
    ("Couplings &amp; Sleeve Couplings", I['wrench'], "Pipe couplings and sleeve couplings for jointing, repair and axial take-up."),
    ("Instrument Bellows &amp; Assemblies", I['ruler'], "Precision small-bore bellows, assemblies, bellows-related ducts and gaskets."),
]
products = pagehero("Products", "Product Range",
    "Bellows and expansion joints to EJMA standards.",
    "Circular and rectangular expansion joints, metal hoses and related flexible products. Sizes run from 20 mm instrument bellows to 9 metre large-bore joints, in stainless steel, high-nickel alloy and carbon steel.") + f"""
<section class="section">
  <div class="wrap">
    <div class="sec-head sec-head--split">
      <div>
        <span class="kicker">Expansion Joints</span>
        <h2>Joints matched to your pipeline.</h2>
      </div>
      <div class="aside">
        <p class="lede">Each type deals with a different mix of axial, lateral and angular movement. Our team will pick the right one for your line.</p>
      </div>
    </div>
    <div class="prod-grid prod-grid--4">
      {''.join(prod_card(p) for p in PRODUCTS)}
    </div>
  </div>
</section>

<section class="section band-light" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker kicker--center">Complete Range</span>
      <h2>Beyond expansion joints.</h2>
      <p class="lede">MB Metallic Bellows also manufactures a broad range of related flexible and pipeline products.</p>
    </div>
    <div class="ind-grid" style="margin-top:38px">
      {''.join(f'<article class="ind-card reveal"><div class="ind-icon">{ic}</div><h3>{n}</h3><p>{d}</p></article>' for n,ic,d in SECONDARY)}
    </div>
  </div>
</section>

<section class="section band-light">
  <div class="wrap split">
    <div>
      <span class="kicker">Materials &amp; Range</span>
      <div class="sec-head"><h2>From 20&nbsp;mm to 9&nbsp;metres.</h2></div>
      <p class="lede" style="margin-top:20px">Bellows are formed in stainless steel, high-nickel alloys and carbon steel to suit temperature, corrosion and pressure. Both circular and rectangular geometries are fabricated and tested in-house.</p>
      <ul class="ticks" style="margin-top:24px">
        <li>Stainless steel, Inconel / Incoloy and carbon-steel convolutions</li>
        <li>Single-ply and multi-ply constructions</li>
        <li>Reinforced and equalising-ring designs for high pressure</li>
        <li>Large-bore and segmented fabrication up to 9000&nbsp;mm</li>
      </ul>
    </div>
    <div>
      <span class="kicker">Custom Design</span>
      <div class="sec-head"><h2>Tell us the duty and we'll design the joint.</h2></div>
      <p class="lede" style="margin-top:20px">Share your parameters and our design team will send back a design checked against EJMA and ASME and backed by correlation, destructive and type tests.</p>
      <div class="hero-cta" style="margin-top:30px"><a class="btn" href="contact.html">Request a Quote {ARROW}</a></div>
    </div>
  </div>
</section>
"""
page("products.html", "Products | Expansion Joints, Bellows & Metal Hoses | MB Metallic Bellows",
     "Universal, gimbal, hinged, pressure-balanced, tied-lateral, reinforced and rectangular expansion joints, metal hoses and compensators, 20 mm to 9000 mm, engineered to EJMA by MB Metallic Bellows, Chennai.",
     "products.html", products)

# ================================================================ INDUSTRIES
IND_CARDS = [
    ("Power", I['bolt'], "Thermal and nuclear generation: turbine exhaust, boiler, extraction and heat-recovery joints."),
    ("Steel &amp; Metals", I['factory'], "Blast-furnace hot-blast, BF-gas mains and ducting for integrated steel plants."),
    ("Refineries &amp; Hydrocarbons", I['flame'], "Process piping, crude and carbon-black units in corrosion-resistant alloys."),
    ("Fertilizers &amp; Chemicals", I['beaker'], "Aggressive-media expansion joints in high-nickel and special stainless grades."),
    ("Cement", I['cube'], "Pre-heater cyclone, kiln and pollution-control duct expansion joints."),
    ("Sugar &amp; Process", I['flow'], "Evaporator, vapour-line and process-fluid compensators."),
    ("Shipping &amp; Defence", I['ship'], "Dockyard and naval exhaust, scupper and discharge systems."),
    ("Boilers &amp; HRSG", I['gauge'], "Steam, extraction and flue-gas flexible elements for heat-recovery."),
]
industries = pagehero("Industries", "Industries &amp; Clients",
    "Used by the companies that run India's plants.",
    "Our expansion joints are installed at national power utilities, integrated steel plants, refineries, fertilizer producers and naval dockyards.") + f"""
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker kicker--center">Sectors We Serve</span>
      <h2>Flexible elements for heavy industry.</h2>
    </div>
    <div class="ind-grid" style="margin-top:38px">
      {''.join(f'<article class="ind-card reveal"><div class="ind-icon">{ic}</div><h3>{n}</h3><p>{d}</p></article>' for n,ic,d in IND_CARDS)}
    </div>
  </div>
</section>

<section class="section client-wall">
  <div class="wrap">
    <div class="sec-head">
      <span class="kicker">Prestigious Clientele</span>
      <h2>Our clients over thirty years.</h2>
      <p class="lede">Some of the organisations we have supplied, and still supply, across India.</p>
    </div>
    <div class="client-sectors">
      {''.join('<div class="client-sector"><h3><span class="dot"></span>'+name+'</h3><ul>'+''.join('<li>'+c+'</li>' for c in items)+'</ul></div>' for name,items in SECTORS)}
    </div>
  </div>
</section>

{MARQUEE_BLOCK}

<section class="photo-band" aria-label="Photographs"><figure class="reveal" style="--d:0ms"><img src="{IMG}oil-gas.jpg" alt="Oil and gas plant at dusk" width="800" height="600" loading="lazy"></figure><figure class="reveal" style="--d:80ms"><img src="{IMG}power-plant.jpg" alt="Power station cooling towers" width="800" height="600" loading="lazy"></figure><figure class="reveal" style="--d:160ms"><img src="{IMG}chemical-plant.jpg" alt="Chemical plant" width="800" height="600" loading="lazy"></figure><figure class="reveal" style="--d:240ms"><img src="{IMG}applications.jpg" alt="Piping at a refinery" width="800" height="600" loading="lazy"></figure></section>

<section class="cta-band">
  <div class="wrap">
    <div><h2>Work with us on your next project.</h2><p>Tell us about the project and the operating conditions.</p></div>
    <a class="btn btn--light btn--lg" href="contact.html">Start a Conversation {ARROW}</a>
  </div>
</section>
"""
page("industries.html", "Industries & Clients | MB Metallic Bellows | Power, Steel, Refineries",
     "MB Metallic Bellows supplies expansion joints to BHEL, NTPC, NPCIL, L&T, SAIL steel plants, IOCL, HPCL, BPCL, Reliance, FACT, GNFC, ACC-Ambuja, Dalmia, Mazagon Dock and more across India.",
     "industries.html", industries)

# ================================================================ QUALITY
quality = pagehero("Quality", "Quality &amp; Approvals",
    "Certified and independently witnessed.",
    "We are ISO 9001:2015 certified, run an ASME U-Stamp production shop, make PED-certified bellows and hold approvals from boiler boards in India and overseas.") + f"""
<section class="section">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker kicker--center">Certifications</span>
      <h2>Certificates that ship with every joint.</h2>
    </div>
    <div class="cert-grid" style="margin-top:38px">
      <div class="cert-box reveal"><div class="cb-ico">{I['shield']}</div><h3>ISO 9001:2015</h3><p>Quality management system certified through DNV.</p></div>
      <div class="cert-box reveal"><div class="cb-ico">{I['award']}</div><h3>ASME U-Stamp</h3><p>Production shop approved to manufacture ASME U-Stamped expansion joints.</p></div>
      <div class="cert-box reveal"><div class="cb-ico">{I['gauge']}</div><h3>PED 2014/68/EU</h3><p>Capability to offer PED-certified bellows for European service.</p></div>
      <div class="cert-box reveal"><div class="cb-ico">{I['flame']}</div><h3>Boiler Board / IBR</h3><p>Approved by boiler regulatory boards in India and overseas.</p></div>
    </div>
  </div>
</section>

<section class="section band-light" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker kicker--center">Independently Witnessed</span>
      <h2>Witnessed by independent agencies.</h2>
      <p class="lede">Our bellows are certified by third-party inspection agencies, including:</p>
    </div>
    <div class="chips" style="justify-content:center;max-width:900px;margin:34px auto 0">
      {''.join(f'<span class="chip">{a}</span>' for a in ["Lloyd's Register","Bureau Veritas","SGS","DNV","TÜV","MECON","M.N. Dastur","TATA Projects","Intertek","RINA","QC, BHEL"])}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div>
      <span class="kicker">Standards We Build To</span>
      <div class="sec-head"><h2>Fabrication</h2></div>
      <p class="lede" style="margin-top:18px">All fabrication is carried out as a safe, process-driven activity to recognised international codes.</p>
      <div class="chips"><span class="chip">ASME</span><span class="chip">EJMA (USA)</span><span class="chip">PED</span><span class="chip">IBR</span><span class="chip">ISO</span></div>
    </div>
    <div>
      <span class="kicker">Standards We Test To</span>
      <div class="sec-head"><h2>Inspection &amp; Testing</h2></div>
      <p class="lede" style="margin-top:18px">Inspection and testing are conducted to established material and dimensional standards.</p>
      <div class="chips"><span class="chip">ASME</span><span class="chip">ASTM</span><span class="chip">DIN</span><span class="chip">IS</span></div>
    </div>
  </div>
</section>

<section class="section band-light">
  <div class="wrap split split--reverse">
    <div class="split-media">
      <div class="ph"><img src="{IMG}quality-check.jpg" alt="Inspector measuring bellows convolutions" loading="lazy"></div>
    </div>
    <div>
      <span class="kicker">Validated By Test</span>
      <div class="sec-head"><h2>Tested, not just calculated.</h2></div>
      <p class="lede" style="margin-top:20px">We back our designs with correlation, destructive and type tests, so each joint performs to its rated movement, pressure and fatigue life in service.</p>
      <ul class="ticks" style="margin-top:22px">
        <li>Correlation of design calculation with measured performance</li>
        <li>Destructive testing to validate pressure and fatigue limits</li>
        <li>Type testing for qualified, repeatable designs</li>
      </ul>
    </div>
  </div>
</section>

<section class="photo-band" aria-label="Photographs"><figure class="reveal" style="--d:0ms"><img src="{IMG}welding.jpg" alt="Welding a bellows" width="800" height="600" loading="lazy"></figure><figure class="reveal" style="--d:80ms"><img src="{IMG}pressure-test.jpg" alt="Bellows under pressure test" width="800" height="600" loading="lazy"></figure><figure class="reveal" style="--d:160ms"><img src="{IMG}bellows-stack.jpg" alt="Finished bellows stacked for dispatch" width="800" height="600" loading="lazy"></figure></section>

<section class="cta-band">
  <div class="wrap">
    <div><h2>Need paperwork for your QA package?</h2><p>We supply the certificates and test records your project asks for.</p></div>
    <a class="btn btn--light btn--lg" href="contact.html">Talk to Us {ARROW}</a>
  </div>
</section>
"""
page("quality.html", "Quality & Approvals | ISO 9001, ASME U-Stamp, PED | MB Metallic Bellows",
     "MB Metallic Bellows is ISO 9001:2015 certified (DNV) with an ASME U-Stamp shop and PED-certified bellows, witnessed by Lloyd's, Bureau Veritas, SGS, DNV, TÜV, MECON, TATA Projects and more.",
     "quality.html", quality)

# ================================================================ CONTACT
contact = pagehero("Contact", "Get in Touch",
    "Let's talk about your expansion joint.",
    "Send us your service conditions and movements, or reach our Chennai works directly. Our engineering team typically responds within one business day.") + f"""
<section class="section">
  <div class="wrap contact-grid">
    <div>
      <span class="kicker">Reach Us</span>
      <div class="sec-head"><h2>Chennai works &amp; office.</h2></div>
      <div class="contact-cards" style="margin-top:30px">
        <div class="contact-card"><div class="cc-ico">{I['pin']}</div><div><h3>Factory &amp; Office</h3><p>Plot #47 &amp; 48, SIPCOT Industrial Growth Centre,<br>Oragadam, Chennai – 602105,<br>Tamil Nadu, India</p></div></div>
        <div class="contact-card"><div class="cc-ico">{I['phone']}</div><div><h3>Phone</h3><p><a href="tel:+914429590111">+91 44 2959 0111</a> / <a href="tel:+914429590112">12</a><br><a href="tel:+919791051515">+91 97910 51515</a></p></div></div>
        <div class="contact-card"><div class="cc-ico">{I['mail']}</div><div><h3>Email</h3><p><a href="mailto:info@mbmetallicbellows.com">info@mbmetallicbellows.com</a><br><a href="mailto:mbmetallicbellows@gmail.com">mbmetallicbellows@gmail.com</a></p></div></div>
        <div class="contact-card"><div class="cc-ico">{I['clock']}</div><div><h3>Working Hours</h3><p>Monday – Saturday: 9:00 AM – 6:00 PM<br>Sunday: Closed</p></div></div>
      </div>
    </div>
    <div>
      <form class="form" data-contact>
        <span class="kicker">Enquiry Form</span>
        <div class="sec-head" style="margin:14px 0 26px"><h2 style="font-size:1.6rem">Request a quote</h2></div>
        <div class="form-row">
          <div class="field"><label for="name">Name</label><input id="name" name="name" type="text" placeholder="Your name" required></div>
          <div class="field"><label for="company">Company</label><input id="company" name="company" type="text" placeholder="Organisation"></div>
        </div>
        <div class="form-row">
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="you@company.com" required></div>
          <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" placeholder="+91"></div>
        </div>
        <div class="field"><label for="product">Product of Interest</label>
          <select id="product" name="product">
            <option>Metallic Expansion Joint</option>
            <option>Universal / Gimbal / Hinged</option>
            <option>Pressure Balanced Joint</option>
            <option>Rectangular / Fabric Joint</option>
            <option>Metal Hose</option>
            <option>Large-Bore Bellow</option>
            <option>Other / Not sure</option>
          </select>
        </div>
        <div class="field"><label for="msg">Service conditions &amp; requirement</label><textarea id="msg" name="msg" placeholder="Nominal bore, design pressure &amp; temperature, media, movements…"></textarea></div>
        <button class="btn" type="submit">Send Enquiry {ARROW}</button>
        <p class="form-note">Prefer email? Write to info@mbmetallicbellows.com and we'll respond within one business day.</p>
      </form>
    </div>
  </div>
  <div class="wrap"><div class="map-embed"><iframe title="MB Metallic Bellows location" src="https://www.google.com/maps?q=SIPCOT+Industrial+Growth+Centre+Oragadam+Chennai&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>
</section>
"""
page("contact.html", "Contact | MB Metallic Bellows Pvt Ltd | Oragadam, Chennai",
     "Contact MB Metallic Bellows Pvt Ltd, Oragadam, Chennai – 602105. Phone +91 44 2959 0111/12, email info@mbmetallicbellows.com. Request a quote for metallic bellows and expansion joints.",
     "contact.html", contact)

print("ALL PAGES GENERATED")

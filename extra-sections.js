/* Clients logo ribbon + Applications section, re-inserted after React hydration
   (hydration strips markup that is not part of the Next.js payload).
   To use real logos, add entries to LOGOS: { "BHEL": "https://.../bhel.png" } */
(function(){
  var CLIENTS=[["BHEL", "Power", "BHEL"], ["NPCIL", "Power", "NPCIL"], ["NTPC", "Power", "NTPC"], ["L&T", "Power", "L&T"], ["BHAVINI", "Power", "BHAVINI"], ["Bhilai Steel Plant", "Steel", "SAIL"], ["Bokaro Steel Plant", "Steel", "SAIL"], ["Durgapur Steel Plant", "Steel", "SAIL"], ["Rourkela Steel Plant", "Steel", "SAIL"], ["Visakhapatnam Steel (RINL)", "Steel", "Visakhapatnam Steel (RINL)"], ["TATA Steel (TISCO)", "Steel", "TATA Steel"], ["Jindal Steel & Power", "Steel", "Jindal Steel & Power"], ["CPCL", "Refinery", "CPCL"], ["IOCL", "Refinery", "IOCL"], ["HPCL", "Refinery", "HPCL"], ["BPCL", "Refinery", "BPCL"], ["Reliance Petrochemicals", "Refinery", "Reliance Petrochemicals"], ["Essar Refinery", "Refinery", "Essar"], ["FACT", "Fertilizers", "FACT"], ["Tata Chemicals", "Chemicals", "Tata Chemicals"], ["NFL", "Fertilizers", "NFL"], ["GNFC", "Fertilizers", "GNFC"], ["GSFC", "Fertilizers", "GSFC"], ["Chambal Fertilizers", "Fertilizers", "Chambal Fertilizers"], ["Paradeep Phosphates", "Fertilizers", "Paradeep Phosphates"], ["Balrampur Chini Mills", "Sugar", "Balrampur Chini Mills"], ["GMR Parry", "Sugar", "GMR"], ["Nirma", "Processing", "Nirma"], ["Hindustan Unilever", "Processing", "Hindustan Unilever"], ["Bannari Amman Sugars", "Sugar", "Bannari Amman Sugars"], ["ACC", "Cement", "ACC"], ["Ambuja Cements", "Cement", "Ambuja Cements"], ["JK Lakshmi Cement", "Cement", "JK Lakshmi Cement"], ["Jaypee Cements", "Cement", "Jaypee"], ["Shree Cements", "Cement", "Shree Cement"], ["India Cements", "Cement", "India Cements"], ["Dalmia Bharat Cement", "Cement", "Dalmia Bharat Cement"], ["Mazagon Dock", "Shipbuilding", "Mazagon Dock"], ["Hindustan Shipyard", "Shipbuilding", "Hindustan Shipyard"], ["Naval Dockyard", "Defence", "Indian Navy"]];
  var LOGOS={"BHEL": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-bhel", "NPCIL": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-npcil", "NTPC": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-ntpc", "L&T": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-l-t", "SAIL": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-sail", "TATA Steel": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-tata-steel", "Jindal Steel & Power": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-jindal-steel-power", "IOCL": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-iocl", "HPCL": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-hpcl", "BPCL": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-bpcl", "Essar": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-essar", "Tata Chemicals": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-tata-chemicals", "NFL": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-nfl", "GMR": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-gmr", "Nirma": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-nirma", "Hindustan Unilever": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-hindustan-unilever", "ACC": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-acc", "Ambuja Cements": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-ambuja-cements", "Jaypee": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-jaypee", "Shree Cement": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-shree-cement", "India Cements": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-india-cements", "Indian Navy": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-indian-navy", "Visakhapatnam Steel (RINL)": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-visakhapatnam-steel-rinl", "CPCL": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-cpcl", "Reliance Petrochemicals": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-reliance-petrochemicals", "FACT": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-fact", "GNFC": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-gnfc", "Chambal Fertilizers": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-chambal-fertilizers", "Paradeep Phosphates": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-paradeep-phosphates", "Balrampur Chini Mills": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-balrampur-chini-mills", "Bannari Amman Sugars": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-bannari-amman-sugars", "JK Lakshmi Cement": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-jk-lakshmi-cement", "Mazagon Dock": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-mazagon-dock", "Hindustan Shipyard": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_120/mb-website/logos/logo-hindustan-shipyard", "BHAVINI": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_160/mb-website/logos/logo-bhavini", "GSFC": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_160/mb-website/logos/logo-gsfc", "Dalmia Bharat Cement": "https://res.cloudinary.com/kbig7iit/image/upload/f_auto,q_auto,h_160/mb-website/logos/logo-dalmia-bharat-cement"};
  var APPS="<section id=\"applications-section\" class=\"mx-auto w-full max-w-[1600px] px-4 py-16 m:px-8 border-t border-line\">\n  <div class=\"mb-10\">\n    <div class=\"inline-block rounded-full bg-ink/10 px-3 py-1 font-mono text-[0.75rem] uppercase tracking-wider text-ink mb-3\">\n      Applications & Installation Services\n    </div>\n    <h2 class=\"font-display text-h3 leading-tight text-ink\">Where Our Bellows Are Installed</h2>\n    <p class=\"mt-3 max-w-[65ch] text-graphite text-body\">\n      Our bellows expansion joints absorb multi-plane pipeline movements arising from thermal and pressure variations across these critical services:\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-small\">\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Blast Furnace & BF Gas</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Turbines & Compressors</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Heat Exchangers</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Industrial Boilers</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">DG Sets & Exhaust Lines</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Steam Extraction Lines</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Heat Recovery Division</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Process Fluid & Suction Lines</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">De-waxing Filters</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Condensate Suction Piping</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Power Turbine Exhaust</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Hydro-pore Systems</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Pre-heater Cyclones</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">External Firefighting</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Flash Box Vent to Condenser</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Hot Air Systems</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Scupper & Discharge Systems</div>\n    <div class=\"rounded-lg bg-paper p-3 border border-line/60 font-medium text-ink\">Compressed Air Systems</div>\n  </div>\n</section>\n</main><!--$--><!--/$-->";
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
  function tile(c){
    var u=c[2]&&LOGOS[c[2]];
    if(u)return '<li class="mbr-tile mbr-has-logo"><img src="'+u+'" alt="'+esc(c[0])+' logo" loading="lazy" decoding="async"><span class="mbr-cap">'+esc(c[0])+'</span></li>';
    return '<li class="mbr-tile"><span class="mbr-name">'+esc(c[0])+'</span><span class="mbr-sector">'+esc(c[1])+'</span></li>';
  }
  function row(list,dur){
    var t=list.map(tile).join('');
    return '<div class="mbr-row"><ul class="mbr-track" style="animation-duration:'+dur+'s">'+t+t.replace(/<li /g,'<li aria-hidden="true" ')+'</ul></div>';
  }
  var half=Math.ceil(CLIENTS.length/2);
  var HTML='<section id="clients-section"><div class="mbr-head"><div class="mbr-eyebrow">Prestigious Customers &amp; Regular Clients</div><h2>Trusted by India\u2019s Critical Infrastructure</h2><p>We furnish below some of our prestigious regular customers to whom we have supplied and continue supplying our high-performance metallic bellows and expansion joints across power, steel, refinery, fertilizer, cement, sugar and shipping sectors.</p></div><div class="mbr-ribbon" role="list" aria-label="Our clients">'+row(CLIENTS.slice(0,half),70)+row(CLIENTS.slice(half),85)+'</div></section>'+APPS;
  function anchor(){return document.querySelector('section[aria-labelledby="closing-title"]');}
  var WORK_INTRO="A sample of recent production: six expansion joint types supplied to steel, power and process plants across India, each engineered and pressure tested to the customer's operating parameters before dispatch.";
  var LIFE_NOTE="Every unit shown here is pressure tested, dimensionally checked and inspected before it leaves the works, with documentation to ASME, ASTM, DIN or IS supplied as required.";
  var PROCESS_NOTE="Each bellows element is roll-formed on hydraulic tooling to the exact convolution profile the design calls for, then welded by procedure-qualified welders following WPS/PQR records kept to ASME IX. Material certificates, forming and weld traceability are logged against the job number and supplied with the dispatch documentation.";

  var DESIGN_INPUTS=["Nominal bore","Design pressure","Design temperature","Media & flow velocity","Axial, lateral & angular movement","Connecting pipe schedule & flange rating"];

  function addHomeExtras(){
    var procGrid=document.querySelector('div[class*="mt-28"][class*="m:grid-cols-2"]');
    if(procGrid && !procGrid.querySelector('.mbr-process-note')){
      var prose=procGrid.querySelector('.prose-long');
      if(prose && prose.parentNode){
        var pp=document.createElement('p');
        pp.className='mbr-process-note mbr-home-intro mt-6';
        pp.textContent=PROCESS_NOTE;
        prose.parentNode.insertBefore(pp, prose.nextSibling);
      }
      var fig=procGrid.querySelector('figure');
      if(fig && !fig.querySelector('.mbr-design-inputs')){
        var box=document.createElement('div');
        box.className='mbr-design-inputs mt-8';
        var h=document.createElement('h3');
        h.className='mbr-design-inputs-title';
        h.textContent='Design inputs we work from';
        box.appendChild(h);
        var ul=document.createElement('ul');
        DESIGN_INPUTS.forEach(function(t){ var li=document.createElement('li'); li.textContent=t; ul.appendChild(li); });
        box.appendChild(ul);
        fig.appendChild(box);
      }
    }
    var work=document.querySelector('section[aria-labelledby="work-title"]');
    if(work && !work.querySelector('.mbr-home-intro')){
      var head=work.querySelector('div'); // the heading row ("Selected work" / "All N projects")
      if(head && head.parentNode){
        var p=document.createElement('p');
        p.className='mbr-home-intro mt-3';
        p.textContent=WORK_INTRO;
        head.parentNode.insertBefore(p, head.nextSibling);
      }
    }
    var life=document.getElementById('life-title');
    if(life){
      var block=life.closest('div');
      if(block && !block.querySelector('.mbr-life-note')){
        var link=block.querySelector('a[href="/studio"]');
        if(link && link.parentNode){
          var p2=document.createElement('p');
          p2.className='mbr-life-note mbr-home-intro mt-4';
          p2.textContent=LIFE_NOTE;
          link.parentNode.insertBefore(p2, link);
        }
      }
    }
  }

  function ensure(){
    addHomeExtras();
    if(document.getElementById('clients-section'))return;
    var a=anchor(); if(!a||!a.parentNode)return;
    var t=document.createElement('template'); t.innerHTML=HTML;
    a.parentNode.insertBefore(t.content,a);
  }
  function start(){
    var n=0,iv=setInterval(function(){ensure(); if(++n>40)clearInterval(iv);},500);
    var m=document.querySelector('main');
    if(m&&m.parentNode){
      var pending=false;
      var mo=new MutationObserver(function(){
        if(pending)return; pending=true;
        setTimeout(function(){ pending=false; ensure(); },300);
      });
      mo.observe(m.parentNode,{childList:true});
      setTimeout(function(){ mo.disconnect(); },30000);
    }
  }
  if(document.readyState==='complete')setTimeout(start,1200);else window.addEventListener('load',function(){setTimeout(start,1200);});
})();

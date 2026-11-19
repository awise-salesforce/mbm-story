// Animated mock-ups, one per act. Elements marked .reveal get .in when the scene is in view.
const R = (d, html, cls = '') => `<div class="reveal ${cls}" style="--d:${d}ms">${html}</div>`;

const phone = inner => `<div class="phone"><div class="phone-bar"><span class="wa-dot"></span>Masdar · WhatsApp <span class="lang-tag">Sent in Arabic</span></div><div class="phone-body">${inner}</div></div>`;

export const SCENES = {
  act0: () => `
    <div class="frame agent">
      <div class="frame-bar"><span></span><span></span><span></span><b>Marketing agent</b></div>
      ${R(0, `<div class="bubble me">Launch areb smart locks to Riyadh homeowners who bought door hardware in the last 6 months. WhatsApp first, Arabic.</div>`)}
      ${R(500, `<div class="bubble ai"><b>Audience</b> 4,820 Riyadh homeowners <small>(illustrative)</small> · door hardware buyers<br><b>Channels</b> WhatsApp → email if no reply in 48h<br><b>Timing</b> Thursday 7pm</div>`)}
      ${R(1000, `<div class="bubble ai preview"><span class="pv-label">Draft message <span class="lang-tag">Sent in Arabic</span></span><p>Exclusive for Masdar customers in Riyadh: areb smart locks for your home. Order now and collect from your nearest branch.</p></div>`)}
      ${R(1500, `<div class="actions"><button tabindex="-1">Edit</button><button tabindex="-1" class="primary">Approve & launch</button></div>`)}
    </div>`,

  act1: () => `
    <div class="b2c">
      ${R(0, `<div class="product"><img src="assets/lock.jpg" alt="areb smart lock"><div><p class="pname">areb Smart Lock Model BYSLLWWH</p><p class="price">SAR 735.06 <small>Price Inc. VAT</small></p><span class="chip">In cart</span></div></div>`)}
      ${R(500, `<div class="toast">Cart left · 2 hours ago</div>`)}
      ${R(900, phone(`
        <div class="wa in-msg">Hi Faisal, your areb smart lock is still in your cart. Add the matching video intercom and collect tomorrow from our Riyadh branch.</div>
        <div class="wa-card"><img src="assets/intercom.jpg" alt="areb video intercom"><span>areb Smart Video Intercom<br><small>Recommended for you</small></span></div>
        <div class="wa out-msg">Can I collect it tomorrow?</div>
        <div class="wa in-msg">Yes, it’s in stock at the branch. Shall we hold it for you until 9pm?</div>`), 'phone-wrap')}
      ${R(1400, `<div class="frame adaptive"><div class="frame-bar"><span></span><span></span><span></span><b>masdaronline.com</b></div>
        <div class="ask">“I’m fitting out a villa in Riyadh”</div>
        <div class="tiles"><span>Smart locks</span><span>Video intercoms</span><span>Cameras</span><span>Pick up at your branch</span></div>
        <p class="cap">Adaptive website: the page rebuilds around him</p></div>`)}
    </div>`,

  act2: () => `
    <div class="b2b">
      ${R(0, `<div class="qr"><div class="qr-code" aria-hidden="true"></div><div><b>Masdar stand</b><br>Scan to get our contractor price list</div></div>`)}
      ${R(400, `<div class="lead-card"><b>New lead</b> · Al-Bina Contracting<br><small>Contractor · Riyadh · Steel, Timber, Fasteners</small></div>`)}
      ${R(800, `<div class="route"><span class="dot"></span><span class="line"></span><span class="team">Riyadh · Construction sales<br><small>Rep alerted in seconds</small></span></div>`)}
      ${R(1200, `<div class="frame sdr"><div class="frame-bar"><span></span><span></span><span></span><b>Business Customers</b></div>
        <div class="bubble ai">Welcome back, Al-Bina team. Here’s how bulk pricing and a credit account would work for your Riyadh projects.</div>
        <div class="slide">Bulk pricing · Credit limits · One-click reorder</div>
        <div class="bubble ai">Shall I book 20 minutes with your Masdar rep on Sunday?</div></div>`)}
      ${R(1600, `<div class="funnel" aria-label="Illustrative dashboard">
        <p class="cap">Exhibition ROI <small>(illustrative)</small></p>
        <div class="bar" style="--w:100%"><span>Stand scans</span><b>412</b></div>
        <div class="bar" style="--w:66%"><span>Leads</span><b>268</b></div>
        <div class="bar" style="--w:28%"><span>Opportunities</span><b>41</b></div>
        <div class="bar won" style="--w:14%"><span>Won</span><b>SAR 1.2M</b></div></div>`)}
    </div>`,

  act3: () => `
    <div class="merge">
      ${R(0, `<div class="pcard left"><b>Faisal</b><small>Homeowner · masdaronline.com</small><ul><li>Smart lock</li><li>Video intercom</li></ul></div>`)}
      ${R(0, `<div class="pcard right"><b>F. Al-…, Site manager</b><small>Al-Bina Contracting · Sales Cloud</small><ul><li>Steel quotation</li><li>Open opportunity</li></ul></div>`)}
      ${R(900, `<div class="pcard unified"><b>One profile</b><small>Homeowner + site manager · matched on mobile number</small><ul><li>Suppress homeowner promos during the trade deal</li><li>Rep sees his personal purchases</li></ul></div>`)}
    </div>`,

  act4: () => `
    <div class="grid4">
      ${R(0, `<div class="tile partner-tile"><span class="tag partner">Partner · not in the demo</span><b>Sprout Social</b><small>Social publishing & engagement across 25+ accounts, connected to Salesforce</small></div>`)}
      ${R(250, `<div class="tile"><span class="tag sf">Salesforce</span><b>Marketing Intelligence</b><small>Paid media & cross-channel ROI</small></div>`)}
      ${R(500, `<div class="tile"><span class="tag sf">Salesforce</span><b>B2B dashboards</b><small>Campaigns, pipeline, accounts</small></div>`)}
      ${R(750, `<div class="tile"><span class="tag sf">Salesforce</span><b>AEO</b><small>Be found in AI answers</small></div>`)}
      ${R(1000, `<p class="note">SEO: we recommend keeping a specialist partner tool.</p>`, 'span')}
    </div>`,

  act5: () => `
    <div class="later">
      ${R(0, `<span class="badge">Later · Phase 2</span>`)}
      <div class="orbit">
        ${R(300, `<span class="src">ERP</span>`)}
        ${R(500, `<span class="src">Branch POS</span>`)}
        ${R(700, `<span class="src">Service cases</span>`)}
        ${R(900, `<span class="hub">Same profile</span>`)}
      </div>
    </div>`,
};

export function initScenes(doc, win = window) {
  for (const [id, html] of Object.entries(SCENES)) {
    const slot = doc.querySelector(`#${id} .scene-slot`);
    if (slot) slot.innerHTML = `<div class="scene">${html()}</div>`;
  }
  const reduce = win.matchMedia && win.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const show = root => root.querySelectorAll('.reveal').forEach(e => e.classList.add('in'));
  if (reduce || !('IntersectionObserver' in win)) { show(doc); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
  }), { threshold: 0.3 });
  doc.querySelectorAll('.scene').forEach(s => io.observe(s));
}

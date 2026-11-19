// Ticks requirements as the sections that cover them scroll into view. One-way.
export function initTracker(doc) {
  const total = doc.querySelectorAll('#tracker li[data-req]').length;
  const count = doc.getElementById('tracker-count');
  const update = () => {
    count.textContent = `${doc.querySelectorAll('#tracker li.ticked').length} of ${total} covered`;
  };
  const tick = section => {
    for (const id of (section.dataset.reqs || '').split(',').filter(Boolean)) {
      const li = doc.querySelector(`#tracker li[data-req="${id}"]`);
      if (li && !li.classList.contains('ticked')) {
        li.classList.add('ticked');
        li.classList.add('just');
        setTimeout(() => li.classList.remove('just'), 1200);
      }
    }
    update();
  };
  // An act counts as seen when it occupies the middle band of the screen for DWELL ms.
  // The band is viewport-based, so tall acts on phones still count, and
  // fast scrolls (smooth-scroll jumps) pass through without ticking.
  const DWELL = 600;
  const timers = new Map();
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting && !timers.has(e.target)) {
        timers.set(e.target, setTimeout(() => { tick(e.target); io.unobserve(e.target); }, DWELL));
      } else if (!e.isIntersecting && timers.has(e.target)) {
        clearTimeout(timers.get(e.target)); timers.delete(e.target);
      }
    }
  }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });
  doc.querySelectorAll('section[data-reqs]').forEach(s => io.observe(s));
  update();
  const tracker = doc.getElementById('tracker');
  const toggle = doc.getElementById('tracker-toggle');
  if (toggle) toggle.addEventListener('click', () => {
    const open = !tracker.classList.contains('open');
    tracker.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Hide list' : 'Show list';
  });
}

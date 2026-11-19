// Per-section votes + comments, a live summary, and a pre-filled email.
export const KEY = 'mbm-story-votes-v1';
export const TO = 'awise@salesforce.com,m.morgan@salesforce.com';
export const SUBJECT = 'MBM demo story – our choices';

export function safeStorage() {
  try {
    const s = window.localStorage;
    const k = '__mbm_test__'; s.setItem(k, '1'); s.removeItem(k);
    return s;
  } catch {
    const mem = {};
    return { getItem: k => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); } };
  }
}

const VOTE_TEXT = { show: 'Show', skip: 'Skip', null: 'No choice yet' };

export const MAX_MAILTO = 1800;

export function buildText(state, sections) {
  const lines = ['Our choices for the proposed demo story:', ''];
  for (const { id, title } of sections) {
    const v = state[id] || {};
    lines.push(`${title}: ${VOTE_TEXT[v.vote ?? null]}`);
    if (v.comment) lines.push(`  Comment: ${v.comment}`);
  }
  lines.push('', 'Sent from the Masdar × Salesforce story page.');
  return lines.join('\n');
}

export function buildMailto(state, sections) {
  return `mailto:${TO}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(buildText(state, sections))}`;
}

export function initVotes(doc, storage = safeStorage()) {
  let state = {};
  try { state = JSON.parse(storage.getItem(KEY) || '{}') || {}; } catch { state = {}; }
  const save = () => { try { storage.setItem(KEY, JSON.stringify(state)); } catch { /* keep in memory */ } };

  const sectionEls = [...doc.querySelectorAll('section.act, section.addon')];
  const sections = sectionEls.map(s => ({ id: s.id, title: s.dataset.title }));
  const list = doc.getElementById('summary-list');
  const send = doc.getElementById('send');

  const refresh = () => {
    list.innerHTML = '';
    for (const { id, title } of sections) {
      const v = state[id] || {};
      const li = doc.createElement('li');
      li.dataset.summaryFor = id;
      li.className = `vote-${v.vote || 'none'}`;
      li.innerHTML = `<a href="#${id}"></a><span class="choice"></span>`;
      li.querySelector('a').textContent = title;
      li.querySelector('.choice').textContent = ` ${VOTE_TEXT[v.vote ?? null]}`;
      if (v.comment) { const c = doc.createElement('p'); c.className = 'cmt'; c.textContent = v.comment; li.append(c); }
      list.append(li);
    }
    send.href = buildMailto(state, sections);
    doc.getElementById('send-warn').hidden = send.href.length <= MAX_MAILTO;
  };

  const copy = doc.getElementById('copy');
  const status = doc.getElementById('copy-status');
  copy.addEventListener('click', async () => {
    const text = buildText(state, sections);
    try { await navigator.clipboard.writeText(text); status.textContent = `Copied. Paste it into an email to ${TO.replace(',', ' and ')}.`; }
    catch {
      const box = doc.getElementById('copy-box');
      box.hidden = false; box.value = text; box.select();
      status.textContent = 'Select the text below and copy it.';
    }
  });

  for (const s of sectionEls) {
    const slot = s.querySelector('.vote-slot');
    slot.innerHTML = `
      <div class="vote" role="group" aria-label="Your choice for ${s.dataset.title.replace(/"/g, '')}">
        <span class="vote-q">Include in the demo?</span>
        <button type="button" data-vote="show" aria-pressed="false">Yes, show this</button>
        <button type="button" data-vote="skip" aria-pressed="false">Skip</button>
      </div>
      <label class="cmt-label">Comment (optional)<textarea data-comment rows="2" placeholder="Anything to add or change?"></textarea></label>`;
    const v = state[s.id] || {};
    const buttons = slot.querySelectorAll('button[data-vote]');
    const paint = () => buttons.forEach(b => b.setAttribute('aria-pressed', String((state[s.id] || {}).vote === b.dataset.vote)));
    buttons.forEach(b => b.addEventListener('click', () => {
      const cur = state[s.id] || (state[s.id] = { vote: null, comment: '' });
      cur.vote = cur.vote === b.dataset.vote ? null : b.dataset.vote;
      paint(); save(); refresh();
    }));
    const ta = slot.querySelector('textarea');
    ta.value = v.comment || '';
    ta.addEventListener('input', () => {
      const cur = state[s.id] || (state[s.id] = { vote: null, comment: '' });
      cur.comment = ta.value; save(); refresh();
    });
    paint();
  }
  refresh();
}

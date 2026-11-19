import { REQUIREMENTS, ACTS, ADDONS } from './data.js';

const el = (doc, tag, attrs = {}, html = '') => {
  const e = doc.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (html) e.innerHTML = html;
  return e;
};
export const slug = s => s.toLowerCase().replace(/\s+/g, '-');

export function renderTracker(doc) {
  const box = doc.getElementById('tracker-list');
  for (const group of ['Ecommerce', 'Marketing', 'Additional requirements']) {
    box.append(el(doc, 'h3', {}, group));
    const ul = el(doc, 'ul');
    for (const r of REQUIREMENTS.filter(r => r.group === group)) {
      const li = el(doc, 'li', { 'data-req': r.id, class: `label-${slug(r.label)}` });
      li.innerHTML = `<span class="tick" aria-hidden="true"></span><span class="rtext">${r.text}</span><span class="label">${r.label}</span>`;
      ul.append(li);
    }
    box.append(ul);
  }
}

export function renderActs(doc) {
  const main = doc.getElementById('acts');
  for (const a of ACTS) {
    const s = el(doc, 'section', { id: a.id, class: 'act', 'data-reqs': a.reqs.join(','), 'data-title': a.title });
    s.innerHTML = `
      <div class="act-text">
        <p class="kicker">${a.kicker}</p>
        <h2>${a.title}</h2>
        ${a.persona ? `<p class="persona">${a.persona} <em>(fictional example)</em></p>` : ''}
        <p class="summary">${a.summary}</p>
        <ol class="steps">${a.steps.map(x => `<li>${x}</li>`).join('')}</ol>
        ${a.wows.length ? `<ul class="wows">${a.wows.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
      </div>
      <div class="scene-slot"></div>
      <div class="vote-slot"></div>`;
    main.append(s);
  }
  const add = doc.getElementById('addons');
  for (const a of ADDONS) {
    const s = el(doc, 'section', { id: a.id, class: 'addon', 'data-reqs': '', 'data-title': a.title });
    s.innerHTML = `<p class="kicker">Optional add-on · Available on request</p><h3>${a.title}</h3><p>${a.summary}</p><div class="vote-slot"></div>`;
    add.append(s);
  }
}

export function renderAll(doc) { renderTracker(doc); renderActs(doc); }

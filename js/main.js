import { renderAll } from './render.js';
import { initTracker } from './tracker.js';
import { initVotes } from './votes.js';
import { initScenes } from './scenes.js';
renderAll(document);
initTracker(document);
initVotes(document);
initScenes(document);
document.body.dataset.ready = '1';

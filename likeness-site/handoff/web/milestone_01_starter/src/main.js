import * as THREE from 'three';
import { loadRegistry } from './data/registryLoader.js';
import { buildOVSScene } from './scene/OVSSceneController.js';
import './style.css';

const app = document.querySelector('#app');
const meta = await loadRegistry('/data/project_meta.json');

const header = document.createElement('div');
header.className = 'ovs-ui';
header.innerHTML = `<div class="eyebrow">OMNIA VANITAS STUDIOS</div><h1>${meta.title}</h1><p>${meta.tagline}</p>`;
app.appendChild(header);

const canvasHost = document.createElement('div');
canvasHost.id = 'scene-host';
app.appendChild(canvasHost);

buildOVSScene(canvasHost, THREE);

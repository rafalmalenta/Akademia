import  Step0  from "./views/Step0";
import "./style.css";

import Renderer from "./Renderer";

let mountPoint:HTMLElement = document.querySelector('#app');
let renderer = new Renderer();
renderer.setView(new Step0(mountPoint));
renderer.render();


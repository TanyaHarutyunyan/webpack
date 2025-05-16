import webpackDemo from "./webpackDemo";
import "../src/styles/index.scss"
import webpack_logo from "./assets/webpack_logo.png";

const img = document.createElement('img');
img.src = webpack_logo;
img.alt = 'Webpack Logo';
img.style.width = '60px';
img.style.height = '60px';

const title = document.getElementById('title');
document.body.insertBefore(img, title);

webpackDemo()
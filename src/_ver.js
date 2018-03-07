
const replace = require('replace');


const INDEX_HTML = path('/../test/index.html');
const PKG = require('../package');

const JQUERY_VER = PKG.peerDependencies.jquery;

console.warn('VERSION_TAG :', VERSION_TAG);
console.warn('jQuery ver  :', JQUERY_VER);






function path (file) {
  return require('path').join(__dirname, file);
}

function version (str) {
  return str.replace('%s', VERSION_TAG);
}

function jqueryVersion (str) {
  return str.replace('%s', JQUERY_VER.replace('^', ''));
}



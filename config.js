const store = {}; // Global shared store

function getBaseUrl(req) {
  return req.protocol + '://' + req.get('host');
}

module.exports = { store, getBaseUrl };
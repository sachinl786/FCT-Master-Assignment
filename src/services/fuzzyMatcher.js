const Fuse = require('fuse.js');

const createFuzzyMatcher = (fctData) => {
  const options = {
    keys: ['description'],
    threshold: 0.3,
    includeScore: true
  };
  
  return new Fuse(fctData, options);
};

module.exports = { createFuzzyMatcher };
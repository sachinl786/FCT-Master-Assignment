const fctData = require('../data/fct-master-format.json');
const { createFuzzyMatcher } = require('../services/fuzzyMatcher');
const { logMapping } = require('../services/logger');

const fuse = createFuzzyMatcher(fctData);
let editableData = [...fctData];

const mapMaterials = (req, res) => {
  const { materials } = req.body;
  const mappedItems = materials.map(material => {
    const [bestMatch] = fuse.search(material);
    return bestMatch ? { 
      code: bestMatch.item.code,
      description: bestMatch.item.description,
      unit: bestMatch.item.unit,
      estimatedUnitCost: bestMatch.item.estimatedUnitCost
    } : null;
  }).filter(Boolean);

  logMapping(req.body, mappedItems);
  res.json({ mappedItems });
};

const updateDescription = (req, res) => {
  const { code, newDescription } = req.body;
  const index = editableData.findIndex(item => item.code === code);
  
  if (index !== -1) {
    editableData[index].description = newDescription;
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Code not found' });
  }
};

module.exports = { mapMaterials, updateDescription };
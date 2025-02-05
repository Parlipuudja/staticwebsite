const express = require('express');
const router = express.Router();
const Expandtext = require('expand_text.ts');

router.post('/expand-text', async (req, res) => {
  const { input_text } = req.body;
  if (!input_text) {
    return res.status(400).json({ error: 'Input text is required' });
  }
  try {
    const expandedText = await Expandtext(input_text);
    res.json({ expandedText });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate text' });
  }
});

module.exports = router;

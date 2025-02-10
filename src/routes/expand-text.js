require("module-alias/register")
const express = require('express')
const Expandtext = require('@/Components/expand_text/expand_text.js')
const expandTextRouter = express.Router()




expandTextRouter.post('/expand-text', async (req, res) => {
  const { input_text } = req.body
  if (!input_text) {
    return res.status(400).json({ error: "Input text is required" })
  }
  try {
    const expandedText = await Expandtext(input_text)
    return res.json({ expandedText })
  } catch (error) {
    return res.status(500).json({ error: "Failed to generate text" })
  }
})

module.exports = expandTextRouter




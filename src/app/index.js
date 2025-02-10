require("module-alias/register")
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const expandTextRouter = require("@/routes/expand-text.js")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use("/api", expandTextRouter)
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})


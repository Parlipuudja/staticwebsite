const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expandTextRoutes = require('./routes/expand-text');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', expandTextRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

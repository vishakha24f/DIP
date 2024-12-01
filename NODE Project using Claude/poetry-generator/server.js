const express = require('express');
const path = require('path');
const app = express();
const { runChat } = require('./script');

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for generating poetry
app.get('/generate-poetry', async (req, res) => {
  try {
    const result = await runChat();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while generating poetry');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
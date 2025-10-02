const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

const apiURL = 'https://api.openmetrolinx.com/OpenDataAPI/api/V1/Gtfs/Feed/VehiclePosition';
const apiKey = '30025820'; // Replace with your actual API key if needed

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// API endpoint to proxy Metrolinx data
app.get('/api/vehicles', async (req, res) => {
  try {
    const response = await fetch(apiURL, {
      headers: { 'x-api-key': apiKey }
    });
    if (!response.ok) {
      return res.status(response.status).json({ error: 'API error' });
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
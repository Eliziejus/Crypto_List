const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/cryptoOptions', async (req, res) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/list?include_platform=false`
      );
      const cryptoOptions = response.data.map(crypto => crypto.id);
      res.json(cryptoOptions);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.get('/api/coin/:id/market_chart/range', async (req, res) => {
    const { id } = req.params;
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coin/${id}/market_chart/range?vs_currency=usd&from=1630790400&to=1630876800&interval=hourly`
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.post('/api/log', (req, res) => {
  const { action } = req.body;
  console.log(`User action: ${action}`);
  res.json({ message: 'Action logged' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
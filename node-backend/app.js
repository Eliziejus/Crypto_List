const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/prices', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd', // You can change the currency if needed
        order: 'market_cap_desc',
        per_page: 100, // Adjust the number of coins per page
        page: 1,
        sparkline: false,
      },
    });

    const prices = response.data;
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching prices' });
  }
});

app.listen(port, () => {
  console.log(`Node.js backend is running on port ${port}`);
});

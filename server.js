const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'src')));

app.use(express.static(path.join(__dirname, 'assets')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.get('/messages', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/pages/chat', 'index.html'));
});

app.get('/api/feeds', (req, res) => {
    fs.readFile(path.join(__dirname, 'mocks', 'feeds.json'), 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ error: 'C\'est cassé pour feeds.json' });
        return;
      }
      res.json(JSON.parse(data));
    });
  });


app.get('/api/messages', (req, res) => {
    fs.readFile(path.join(__dirname, 'mocks', 'messages.json'), 'utf8', (err, data) => {
        if (err) {
        res.status(500).json({ error: 'C\'est cassé pour messages.json' });
        return;
        }
        res.json(JSON.parse(data));
    });
});
  

// Démarrage du serveur
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

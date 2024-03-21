const express = require('express');
const app = express();
const port = 3000;

// Importa i dati delle canzoni dal file JSON
const songsData = require('./songs.json');

// Imposta il motore di rendering Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Definisci una route per ogni canzone
app.get('/songs/:id', (req, res) => {
  const songId = req.params.id;
  const song = songsData.songs.find(song => song.song_id == songId);
  if (!song) {
    return res.status(404).send('Canzone non trovata');
  }
  res.render('song', { song });
});



// Avvia il server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});

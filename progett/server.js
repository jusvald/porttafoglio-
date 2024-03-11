const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Definire la cartella pubblica per servire file statici come immagini
app.use(express.static(path.join(__dirname, 'progett')));

// Pagina profili
app.get('/profili/:id', (req, res) => {
  const id = req.params.id;
  // Serve la pagina profilo completa della persona con id specifico
  res.send(`Pagina profilo di ${id}`);
});

// Servire le immagini delle persone
app.get('/profili/:id/img', (req, res) => {
  const id = req.params.id;
  // Supponendo che le immagini siano memorizzate nella cartella 'immagini'
  res.sendFile(path.join(__dirname, 'immagini', `${id}.jpg`));
});

app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});

app.get('*', (req, res) => {
    res.status(404).send('Pagina non trovata');
  });

  // Avvia il server sulla porta 3000

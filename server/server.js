import express from 'express';
import { join } from 'path';

const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(join('../dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Приложение запущено на порту ${port}`);
});

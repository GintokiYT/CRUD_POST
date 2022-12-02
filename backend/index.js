import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

db.authenticate()
  .then( () => console.log('Base de datos conectada'))
  .catch( e => console.log(e.message));

app.use(cors());

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/api/v1/posts', router.posts);

app.listen( PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
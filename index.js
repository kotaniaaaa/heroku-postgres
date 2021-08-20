import express from 'express';
import database from './database';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// jsonを扱えるようにする
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const db = new database();
// メイン処理
api.get('/', async (req, res) => {
  const result = await db.query(SQL);
  return res.status(200).send(result).end();
});

app.listen(PORT);
console.log(`Server running at ${PORT}`);

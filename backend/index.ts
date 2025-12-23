import express from 'express'; // 1: Expressというサーバー用フレームワークを呼び出すよ
const app = express();       // 2: サーバーの「本体」を生成！ここに機能を追加していくよ
const PORT = 3000;           // 3: 待ち受けポート番号。3000番がNodeの定番だね

app.use(express.json());     // 4: JSON形式のデータが送られてきても、自動で解析できるようにするよ

// 5: "/api/hello" というURLに「GET」でアクセスされた時の処理
app.get('/api/hello', (req, res) => {
  // 6: サーバーからJSONデータを送り返すよ！Rustのserdeみたいな複雑な設定は不要
  res.json({ 
    message: "Node + TS サーバです",
    status: "success"
  });
});

// 7: 指定したポートでサーバーを起動！
app.listen(PORT, () => {
  // 8: 起動に成功したらコンソールにメッセージを出すよ
  console.log(`🚀 Backend ready at http://localhost:${PORT}`);
});
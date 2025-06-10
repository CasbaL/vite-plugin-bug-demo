const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 静态文件服务
app.use('/remote', express.static(path.join(__dirname, 'packages/remote/dist')));
app.use('/host', express.static(path.join(__dirname, 'packages/host/dist')));

// 主页
app.get('/', (req, res) => {
  res.send(`
    <h1>Available Apps</h1>
    <ul>
      <li><a href="/remote">Remote App</a></li>
      <li><a href="/host">Host App</a></li>
    </ul>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`remote app is running at http://localhost:${port}/remote`);
  console.log(`host app is running at http://localhost:${port}/host`);
});
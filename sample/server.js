// nodejs 允许 js 在服务器端运行
const express = require('express'); // web 框架
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors()); // 设置 cors 头
app.use(express.json()); // 解析 JSON 请求体

const db = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: '123456',
    database: "webdemo",
    port: '3306'
});

app.get('/getPython', (req, res) => {
    db.query('SELECT * FROM Python', (err, results) => {
        if (err) {
            results = {
                warn: 'error',
                message: "数据库获取失败"
            };
            res.send(JSON.stringify(results));
        } else {
            res.send(JSON.stringify(results));
        }
    });
});

app.get('/getC', (req, res) => {
    db.query('SELECT * FROM clan', (err, results) => {
        if (err) {
            results = {
                warn: 'error',
                message: "数据库获取失败"
            };
            res.send(JSON.stringify(results));
        } else {
            res.send(JSON.stringify(results));
        }
    });
});

app.get('/getCpp', (req, res) => {
    db.query('SELECT * FROM cpp', (err, results) => {
        if (err) {
            results = {
                warn: 'error',
                message: "数据库获取失败"
            };
            res.send(JSON.stringify(results));
        } else {
            res.send(JSON.stringify(results));
        }
    });
});

app.get('/getJava', (req, res) => {
    db.query('SELECT * FROM java', (err, results) => {
        if (err) {
            results = {
                warn: 'error',
                message: "数据库获取失败"
            };
            res.send(JSON.stringify(results));
        } else {
            res.send(JSON.stringify(results));
        }
    });
});

app.get('/getVue', (req, res) => {
    db.query('SELECT * FROM vue', (err, results) => {
        if (err) {
            results = {
                warn: 'error',
                message: "数据库获取失败"
            };
            res.send(JSON.stringify(results));
        } else {
            res.send(JSON.stringify(results));
        }
    });
});

// app.post('/updateStatus', (req, res) => {
//     const { id, status } = req.body;
//     db.query('UPDATE Python SET status = ? WHERE id = ?', [status, id], (err, results) => {
//         if (err) {
//             return res.status(500).send({ error: "更新状态失败" });
//         }
//         res.send({ success: true });
//     });
// });

// app.get('/getUsers', (req, res) => {
//     db.query('SELECT * FROM users', (err, results) => {
//         if (err) {
//             results = {
//                 warn: 'error',
//                 message: "数据库获取失败"
//             };
//             res.send(JSON.stringify(results));
//         } else {
//             res.send(JSON.stringify(results));
//         }
//     });
// });

app.listen(8000, () => {
    console.log("服务器已启动");
});

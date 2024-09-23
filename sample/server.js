// nodejs 允许 js 在服务器端运行
const express = require('express'); // web 框架
const cors = require('cors');
const mysql = require('mysql');
const { warn } = require('vue');

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
                message: "数据获取失败"
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
                message: "数据获取失败"
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
                message: "数据获取失败"
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
                message: "数据获取失败"
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
                message: "数据获取失败"
            };
            res.send(JSON.stringify(results));
        } else { res.send(JSON.stringify(results)); }
    });
});

app.post('/updateUser', (req, res) => { const { id, course } = req.body;
    db.query('UPDATE user SET course = ? WHERE id = ?', [course, id], (err, results) => {
        if (err) {
            results = {
                warn: 'error',
                message: "数据更新失败"
            };
            res.send(JSON.stringify(results));
        } else { res.send(JSON.stringify(results)); }
    });
});

app.get('/getUser', (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            results = {
                warn: 'error',
                message: "数据获取失败"
            };
            res.send(JSON.stringify(results));
        } else {
            res.send(JSON.stringify(results));
        }
    });
});

app.listen(8000, () => {
    console.log("服务器已启动");
});

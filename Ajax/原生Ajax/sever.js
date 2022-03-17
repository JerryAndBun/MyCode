const { response } = require('express');

const { request } = require('express');

const express = require('express')

const app = express();
app.get('/sever', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', "*")
    response.send('Hello Ajax');
});
app.post('/sever', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', "*")
    response.send('Hello Ajax ssssThis is Post');
});

app.listen(8000, () => {
    console.log("服务已启动，端口8000");
})
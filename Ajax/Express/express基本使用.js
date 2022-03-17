const { response } = require('express');

const { request } = require('express');

const express = require('express')

const app = express();
app.get('/', (request, response) => {
    response.send('Hello Express');
});

app.listen(8000, () => {
    console.log("服务已启动，端口8000");
})
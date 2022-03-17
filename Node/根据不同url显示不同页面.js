const fs = require('fs')
const path = require('path')
// const http = require('http')

var http = require('http');
const { contentType } = require('mime-types');
var server = http.createServer(function (request, response) {
})
server.listen(80, () => {
    console.log('Server running at http://127.0.0.1:8081/');
})
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    console.log('你在请求');
    var fpath = ''
    if (req.url === '/') {
        fpath = path.join(__dirname, '/clock/index.html')
    }
    else {
        fpath = path.join(__dirname, '/clock', req.url)
    }
    fs.readFile(fpath, 'utf8', (err, datastr) => {
        if (err) { return 404 }
        else {
            res.end(datastr)
        }
    })
})
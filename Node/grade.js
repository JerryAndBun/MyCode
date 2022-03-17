const fs = require('fs')

fs.readFile(__dirname+'/files/成绩.txt', 'utf-8', function (err, result) {
    // if(err){return console.log("nimazhale");}
    var strold = result.split(' ')
    var strnew = []

    strold.forEach(element => {
        strnew.push(element.replace('=', '：'))
    });
    // strnew = strold
    console.log(strnew)
    var news = strnew.join('\r\n')
    console.log(news);
})
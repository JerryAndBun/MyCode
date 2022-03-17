const fs = require('fs')
// const { join } = require('path')
const path = require('path')

const regstyle = /<style>[\s\S]*<\/style>/
const reghtml = /<html>[\s\S]*<\/html>/
const regscript = /<script>[\s\S]*<\/script>/



fs.readFile(path.join(__dirname, 'index.html',), 'utf8', (err, result) => {
    if (err) return console.log(err);
    resolveCSS(result)
    resolveSCRIPT(result)
    resolveHTML(result)
    // console.log(result);
})
let resolveCSS = function (htmlstr) {
    let css = regstyle.exec(htmlstr)
    // console.log(css);
    let newcss = css[0].replace('<style>', '').replace('</style>', '')
    console.log(newcss);
    fs.writeFile(path.join(__dirname, 'index.css'), newcss, function () {
        console.log('success');
    })
}
let resolveHTML = function (htmlstr) {
    // console.log(css);
    let newhtml = htmlstr
        .replace(regstyle, '<link rel="stylesheet" href="./index.css">')
        .replace(regscript, '<script src="./index.js"></script>')
    // console.log(newcss);
    fs.writeFile(path.join(__dirname, 'index2.html'), newhtml, function () {
        console.log('success');
    })
}
let resolveSCRIPT = function (htmlstr) {
    let script = regscript.exec(htmlstr)
    // console.log(css);
    let newscript = script[0].replace('<script>', '').replace('</script>', '')
    // console.log(newcss);
    fs.writeFile(path.join(__dirname, 'index.js'), newscript, function () {
        console.log('success');
    })
}
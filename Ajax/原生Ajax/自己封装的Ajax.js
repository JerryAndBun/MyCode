function resolveData(data) {
    var rows = []
    for (let x in data) {
        var str = x + '=' + data[x]
        rows.push(str)
    }
    return rows.join('&')
}
function MyAjax(option) {
    var xhr = new XMLHttpRequest()
    var qs = resolveData(option.data)
    if (option.method.toUpperCase() === "POST") {
        xhr.open(option.method, option.url)
        xhr.setRequestHeader('ContentType', 'application/x-www-form-urlencodeed')
        xhr.send(qs)
    }
    if (option.method.toUpperCase() === "GET") {
        xhr.open(option.method, option.url + '?' + qs)
        xhr.send()
    }
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            var result = JSON.parse(xhr.responseText)
            option.success(result)
        }
    }
}
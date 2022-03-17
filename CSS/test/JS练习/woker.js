var fi=function(n){
    return  n<2? 1: fi(n-1)+fi(n-2)
}
onmessage=function(event){
    var result=fi(event.data)
    postMessage(result)
}
function changeArr(list = []) {
    let numArr = "QWERTYUIOPASDFGHJKLZXCVBNM".split("").sort((a,b) => a.charCodeAt() - b.charCodeAt())
    let arr = []
    for(var item of numArr){
        arr.push({big:item})
    }
    list = list.sort(function(a,b){
        return a.py[0].charCodeAt() - b.py[0].charCodeAt()
    })
    for(var item of arr){
        let keys = item.big.toLocaleLowerCase()
        item.content = list.filter((item => item.py[0] === keys))
    }
   return arr
}

export {
    changeArr
}
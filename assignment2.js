specialReverse = (input, s) => {
    let ar = input.split(" ")
    for (let i = 0; i < ar.length; i++) {
        if(ar[i].charAt(0) === s){
            let rev = []
            for (let index = ar[i].length-1; index >= 0; index--) {
                rev.push(ar[i][index])
            }
            ar[i] = rev.join('')
        } 
    }
    return ar.join(" ")
}

console.log(specialReverse("word searches are super fun","s"))


// NuminStr 

isAlpha = (element) => {
    var letters = /^[A-Za-z]+$/;
    return element.match(letters) ? true : false
}

numInStr = (arr) => {
    return arr.filter((element) => {
        return !isAlpha(element)
    })
}

console.log(numInStr(["1a", "a", "2b", "b"]))
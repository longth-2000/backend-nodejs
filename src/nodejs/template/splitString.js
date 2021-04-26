function splitString(str) {
    if (str && str.length > 0) {
        const minGram = 1
        const maxGram = str.length

        return str.split(" ").reduce((ngrams, token) => {
            if (token.length > minGram) {
                for (j = 0;  j<= token.length; ++j) {
                    for (let i = minGram;  i <= maxGram &&  i <= token.length-j; ++i) {
                        ngrams = [...ngrams, token.substr(j, i)]
                    }
                }
            }  else {
                ngrams = [...ngrams, token]
            } 
            return ngrams
        }, []).join(" ")
    }
    
}
function createSearchData(str){
    var newArr = []
    newArr = splitString(str).split(" ").filter((items) => {
        return newArr.includes(items) ? '':newArr.push(items)
    })
    return  newArr.join(" ")
    
}
module.exports = createSearchData

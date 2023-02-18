
const a = ['24', 25, true, "22", null]
let b = 'null'
function filterBy(a, b){
if (b == "null"){
    return a.filter(e => e !== null)
}
return a.filter((e => typeof(e) !== b))
}
console.log(filterBy(a, b))


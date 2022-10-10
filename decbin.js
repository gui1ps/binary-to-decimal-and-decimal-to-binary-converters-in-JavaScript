let decimal=985
let bin=0
let conversion=[]
let controloop=true
let finalresult

while (controloop===true){
    bin= decimal%2
    conversion.push(bin)
    decimal=Math.trunc(decimal/2)
    if (decimal<1){
        break
    }
}
conversion.reverse()
finalresult=conversion.join('')
console.log(finalresult)
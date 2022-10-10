let bin='10111011'
let arraybin=bin.split('')
arraybin.reverse()
let actualbin
let sum=0

arraybin.forEach((index,arraybin) => {
    actualbin=index*(Math.pow(2,arraybin))
    sum+=actualbin
});
console.log(sum)





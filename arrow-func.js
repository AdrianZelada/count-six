var inputs = process.argv.slice(2);
var text = "["
var result = inputs.map((obj) =>{ 
    return obj
})
                    .reduce((res, item) => {return res+item[0]},"");

console.log(`[${inputs.join(',')}] becomes`,`"${result}"`);
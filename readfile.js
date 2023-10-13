const { readFile, writeFile }= require('fs')

readFile('./content/first.txt','utf-8',(err,result)=> {
    if(err)
    {
        console.log(err)
        return
    }
    else
    {
        console.log(result)
    }
})
writeFile('./content/second.txt','test1234',(err,result)=>{
    if (err)
    {
        console.log(err)
        return
    }
    else
    {
        console.log(result)
    }
})
readFile('./content/second.txt','utf-8',(err,result)=> {
    if(err)
    {
        console.log(err)
        return
    }
    else
    {
        console.log(result)
    }
})

//const second = readFile('./content/second.txt','utf-8')
//console.log(second)
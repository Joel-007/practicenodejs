const { error } = require('console')
const { readFile , writeFile }= require('fs')

const getText = (path)=>{
    return new Promise((resolve, reject) => {
        readFile(path,'utf-8',(err,result)=>{
            if(err){
                reject(err)
            }
            else
            {
                resolve(result)
            }

        })
    })
}
const writeText = (path)=>{
    return new Promise((resolve, reject) => {
        writeFile(path,'harry','utf-8',(err,result)=>{
            if(err){
                reject(err)
            }
            else
            {
                resolve(result)
            }

        })
    })
}
const start = async()=>
{
    try{
    const text = await getText('./content/first.txt')
    await writeText('./content/result.txt')
    const text1= await getText('./content/result.txt')
    console.log(text,text1)
    }
    catch(error){
        console.log(error)
    }
}
start ()
//getText('./content/first.txt').then(result => console.log(result)).catch(err=>console.log(err))
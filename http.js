const http = require('http')
const server= http.createServer((req,res)=>{
    if (req.url === '/')
    {
       res.end( `
       <html>
            <h1>hey</h1>
            <body>
                <p1>
                    Welcome Home
                </p1>
            </body>
        </html>`
       )
    }
    if (req.url==='/about')
    {
        res.end(`
        <html>
            <h1>
                ERROR
            </h1>
            <body>
                <p1>
                    ERROR
                </p1>
            </body>
        </html>`)
    }
})
server.listen(5000)
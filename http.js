const http=require('http')

const server = http.createServer((req,res)=> {
//console.log(req)
//res.write('Welcome to Node Web')
//res.end()
if (req.url=="/"){
    res.end('This is Home')   
}
if (req.url=="/about")
{
    res.end('This is About Us Page ')
}
 
res.end(
    `<h1>Oops!<h1/>
    <p>We can't seem to find the page that you ar
    e looking for</p>
    <a href="/">BACK HOME</a>`
    
    )

})
server.listen(5000)


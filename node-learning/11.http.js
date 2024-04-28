const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hello World')
})

server.listen(0, () => {   // 0 means random port, no es recomendable para produccion
    console.log(`Server is running at http://localhost:${server.address().port}`)
})
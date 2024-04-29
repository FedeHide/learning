const http = require('node:http')
const { findAvailablePort } = require('./12.free-port')

const port = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hello World')
})

findAvailablePort(port).then(port => {
    server.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`)
    })
})
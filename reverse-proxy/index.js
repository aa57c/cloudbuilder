const httpProxy = require('http-proxy')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 9000

const BASE_PATH = 'https://cloudbuilder-outputs.s3.us-east-1.amazonaws.com/__outputs'

const proxy = httpProxy.createProxy()

app.use((req, res) => {
    const pathSegments = req.path.split('/')
    const subdomain = req.path

    const resolvesTo = `${BASE_PATH}${subdomain}`

    console.log(`Requesting ${req.path}`)
    console.log(`Subdomain: ${subdomain}`)
    console.log(`Proxying to ${resolvesTo}`)

    return proxy.web(req, res, { target: resolvesTo, changeOrigin: true })
})

proxy.on('proxyReq', (proxyReq, req, res) => {
    const url = req.url;
    if (url === '/')
        proxyReq.path += 'index.html'
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(PORT, () => console.log(`Reverse Proxy Running..${PORT}`))
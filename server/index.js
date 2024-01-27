const express = require('express')
const port = 5000;
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../dist')))

app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, '../dist', 'index.html')
    res.sendFile(indexPath)
})

app.listen(port, () => {
    console.log('Server is running at port:', port)
})
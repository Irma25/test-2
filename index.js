const express = require ('express')

const app = express ()

const port = 5000

const isLogin = false

app.set('view engine', 'hbs')

// Tambahkan js
 app.use('/public', express.static(__dirname + '/public'))



//  console.log(__dirname)

app.get('/', (req, res) => {

    res.render('index', {isLogin : isLogin})
})

app.get('/form', (req, res) => {

    res.render('form')
})

app.get('/addproject', (req, res) => {

    res.render('addproject', {isLogin : isLogin})
})

app.post('/addproject', (req, res) => {

    const data = req.body

    console.log(data)
})

app.get('/addproject-detail/:title', (req, res) => {

    const title = req.params.title

    // console.log(title);

    res.render('addproject-detail')
})

app.listen(port, () => {
    console.log(`Personal App on Port ${port}`)
})

// http://localhost:5000/

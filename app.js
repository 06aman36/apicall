const express = require('express');

const app = express();
var cors = require('cors')
app.use(cors())

app.get('/', (req,res) =>{
    res.send(JSON.stringify([{'name': 'aman'},{'age': 123},{'loc': 'hyd'}],));
})


app.get('/product', (req,res) =>{
    res.send(JSON.stringify([{'Apple': 'Iphone','Price': 123,'loc': 'hyd'},
    {'Apple': 'Iphone 6s','Price': 1233,'loc': 'del'},
    {'Apple': 'Iphone 6s','Price': 1233,'loc': 'del'}],));
})


app.get('/user', (req,res) =>{
    res.send(JSON.stringify([{'Admin': 'Aman'},{'Pass': 123},{'loc': 'hyd'}],));
})




app.listen(3000, () => console.log('listening on port 3000'))


// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })

// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })
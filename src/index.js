const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const port = 3000;
const tempelatePath = path.join(__dirname, '../template')
const collection= require("./mongodb")

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", tempelatePath)
//this lign changes the views name to


app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
    
})

app.listen(port, () => {
    console.log('port connected');
})

app.post('/signup', async (req, res) => {
    
    // const data = new LogInCollection({
    //     name: req.body.name,
    //     password: req.body.password
    // })
    // await data.save()

    const data = {
        name: req.body.name,
        password: req.body.password
    }

    await collection.insertMany([data])

    res.render("home")

})
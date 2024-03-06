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

app.use(express.urlencoded({extended:false}))
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
    try {
        const userData = {
            name: req.body.name,
            password: req.body.password
        };

        await collection.insertMany([userData]);

        res.render("home");
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({name:req.body.name})

        if(check.password == req.body.password){
            res.render("home")
        }else{
            res.send("wrong password")
        }

        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Wrong Username or Passowrd');
    }
});
app.post('/addProject', async (req, res) => {
    try {
        const userProjects = {
            taskID: req.body.taskID,
            projectDesc: req.body.projectDesc,
            status: req.body.status,
            assigned: req.body.assigned
        };

        await Project.insertMany([userProjects]);

        res.render("home");
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
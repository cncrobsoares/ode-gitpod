const express = require('express')
const app = express()
const Task = require('./models/Task')
// settings
app.set('views',__dirname+'/views')
app.set('view engine','ejs')
//middleweres
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//rotas
app.get('/',async(req,res)=>{
    const tasks = await Task.find()
    res.render('index',{tasks})
})
app.post('/create', async(req, res) => {
    const newTask = new Task({ task: req.body.task, description: req.body.description });
    await newTask.save()
    res.redirect('/')

})

app.use(express.static(__dirname + '/public'))


module.exports = app

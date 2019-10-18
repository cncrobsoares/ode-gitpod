const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ben:ben@cluster0-ijjkd.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
    .then(()=>console.log('DB is connected'))
    .catch(e=>console.log(e))
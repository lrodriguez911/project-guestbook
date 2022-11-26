const express  = require('express')
const path  = require('path')
const morgan  = require('morgan');
const { urlencoded } = require('express');


//Initializations
const app = express()

//Settings
const port = process.env.PORT || 3000
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extends: false}))


//Routes
app.use(require('./routes/entries.routes'));



// 404 handler
app.use((req, res) =>{
    res.status(404).render('404')
})


//Starting the app

app.listen(app.get('port'), () => {
    console.log(`Server is listen on port ${port}`);
})
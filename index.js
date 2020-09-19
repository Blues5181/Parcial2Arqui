const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override');
const path = require('path');

const app = express()

//Setting up
app.set("port", process.env.PORT || 8080)

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Middlerwares
app.use(morgan('dev'))
app.use(express.json())
app.use(methodOverride('_method'));

// Index Route
app.get('/', (req, res) => {
    res.send('invaild endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(app.get('port'), () => { 
    console.log(`Express server listening on port ${app.get('port')}`);
})
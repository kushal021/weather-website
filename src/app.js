const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forCast = require('./utils/forCast');
const {dy, dt} = require('./utils/day')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 2000;


// Setting up path
const viewsPath = path.join(__dirname, '../templates/views')
const publicPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('views', viewsPath)
app.set('view engine', 'hbs')
app.use(express.static(path.join(publicPath)))
hbs.registerPartials(partialsPath)
app.use(bodyParser.urlencoded({ extended: true }));



app.get('', (req, res) => {
    res.render('index', {
            dy,
            dt,
            city: 'Enter city name',
            tm: '0',
            mainImg: '01d.png',
            ws: '0',
            hm: '0',
            ps: '0',
            ds: '0'
    })
})

app.post('', (req, res)=>{
    const location = req.body.inp;

    forCast(location, (error, result)=>{
        if (error) {
            return res.send({error})
        }
        res.render('index',{
            dy,
            dt,
            city: result.body.location.name,
            tm: result.body.current.temp_c,
            mainImg: result.body.current.condition.icon,
            ws: result.body.current.wind_kph,
            hm: result.body.current.humidity,
            ps: result.body.current.pressure_mb,
            ds: result.body.current.condition.text
        })
    })
    
})




app.listen(port, ()=>{
    console.log('Server is listening on ' + port);
})
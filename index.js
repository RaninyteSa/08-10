import express from 'express'
import {engine} from 'express-handlebars'
import mysql from 'mysql2/promise'

const app = express()
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

mysql.createConnection({
    host: 'pauliuspetrunin.lt',
    user: 'bit',
    password: 'kulokas',
    database:'Sandra'
})

const port = process.env.PORT || 3000



app.get('/', async (req,res) => {

    const songs = await database.query('SELECT id, songName, songAlbum FROM songs')

    res.render('index',  {songs: songs[0]})
})

app.get('/delete/:id', async (req,res) => {
    await database.query('DELETE FROM `songs` WHERE id=?', [req.params.id])
    // DELETE * WHERE id = 10//
    res.redirect('/')
})



app.get('/new', async (req,res) => {
   const songs = await database.query( 'INSERT INTO `songs`(`songName`, `songAlbum`) VALUES (`value-1`,`value-2`)' )

    res.render('/', songs)
})


app.listen(port)
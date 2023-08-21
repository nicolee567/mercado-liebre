const express = require('express');
const path=require('path');

const app = express();

const publicPath=path.resolve(__dirname, './public');

app.use(express.static(path.join(__dirname,'public')));

app.listen(3010,()=>{
    console.log('Servidor corriendo en el puerto 3010');
});

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});
app.post('/register',(req, res) => {
    res.redirect('/');
});
app.post('/login',(req, res) => {
    res.redirect('/');
});

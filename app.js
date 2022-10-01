const express=require("express");
const path=require("path");
const app=express();
const port=8000;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params={ }
    res.status(200).render('index2',params);
})
app.get('/robo',(req,res)=>{
    const params={ }
    res.status(200).render('robo',params);
})

app.get('/debug',(req,res)=>{
    const params={ }
    res.status(200).render('debug',params);
})

app.get('/loginform',(req,res)=>{
    const params={ }
    res.status(200).render('loginform',params);
})

// app.post('/contact',(req,res)=>{
//     const params={ }
//     res.status(200).render('contact.pug',params);
// })

app.listen(port,()=>{
    console.log(`The Application started successfully on port ${port}`);
});
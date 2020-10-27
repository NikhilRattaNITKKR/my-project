const express = require('express');
const hbs = require('hbs');
const path = require('path');
const userRouter=require('../routes/user');

const app=express();
const port=3000||process.env.PORT;

app.set('view engine','hbs');

const public=path.join(__dirname,'../public')
const partials=path.join(__dirname,'../template/partials')
const views=path.join(__dirname,'../template/views')

hbs.registerPartials(partials);

app.set('views',views);

app.use(express.static(public));

app.use(express.json())
app.use(userRouter)

app.listen(port,()=>{
  console.log('Server is running');
})

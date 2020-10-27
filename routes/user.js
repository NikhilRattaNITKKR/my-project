const express = require('express');

const router=new express.Router();

router.get('',(req,res)=>{
  res.render('index')
})

router.get('/error',(req,res)=>{
  res.render('error')
})

router.get('/profile',(req,res)=>{
  res.render('profile')
})

router.get('/signout',(req,res)=>{

})

router.get('/form',(req,res)=>{
res.render('form')
})
module.exports=router;

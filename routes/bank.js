const express = require('express');
const routes = express.Router();
const alert = require('alert');
const Users = require('../models/users');
const Transaction = require('../models/transaction');

// home page
routes.get('/', (req,res)=>{
    res.render('bank/index');
})

// display all the users
routes.get('/users', async (req,res)=>{
    const users = await Users.find({});
    res.render('bank/show',{users})
})

// show a particular user detail
routes.get('/users/:id', async(req,res)=>{
    // console.log(req.params);
   const userDetail =  await Users.findById(req.params.id);
//   console.log(userDetail);
   res.render('bank/showDetail',{userDetail});
})

// transaction form

routes.get('/transaction', async(req,res)=>{
   res.render('bank/transfer');
})

routes.post('/transaction', async(req,res)=>{
    // console.log(req.body);
    const senName = req.body.sen_name;
    const senNo = req.body.s_actno;
    const recNo = req.body.r_actno;
    const amt = req.body.amt;
    
    const senderOne = await Users.findOne({ actno : senNo }); 
    const receiverOne = await Users.findOne({ actno :recNo });

    
    // console.log(f);
    if(!senderOne) 
    {
    alert("Sender's Account Number is Wrong!");

    }
    else if(!receiverOne){
        alert("Receiver's Account Number is Wrong!");
    }

    if(amt<=0)
    {
        alert("Please Enter a Valid Amount!")
        
    }
    else if(senderOne.bal<amt){
        alert("Does not have sufficient amount in your account!")
    }
    else{
       
        const f = new Transaction({ sendername: senName, receivername: receiverOne.name, amount: amt});
        await f.save();

        const recAmount = receiverOne.bal + parseInt(amt);
        const senAmount = senderOne.bal - parseInt(amt);
        await Users.findOneAndUpdate({name: senName}, {bal: senAmount});
        await Users.findOneAndUpdate({actno: recNo}, {bal: recAmount})
     
        alert("Transaction has been done successfully!")
        res.redirect('/transactionhistory');
        
    }
 
    
})

routes.get('/transactionhistory', async (req,res)=>{
    const history = await Transaction.find({});
    res.render('bank/history', {history});
})

module.exports = routes;

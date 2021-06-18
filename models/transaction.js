const mongoose = require('mongoose');

const transactionSchema  = new mongoose.Schema(
    {
        sendername:{
            type:String,
            required:true
        },
        receivername:{
            type:String,
            required:true
        },
        amount : {
            type:Number,
            required: true,
        },
        date: {
             type: Date, 
             default: Date.now 
        }
    }
    );


const transact = mongoose.model('Transaction', transactionSchema);

module.exports = transact;
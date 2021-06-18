const mongoose = require('mongoose');
const Transaction = require('./transaction');

const userSchema  = new mongoose.Schema(
    {
    sno: {
            type : Number,
            required: true,
    },   
    name : {
        type: String,
        required :true,
    },
    email : {
        type: String,
        required :true,
    },
    actno: {
        type : Number,
        required: true,
    },
    bal : {
        type: Number,
        required : true,
    }
  
}
);

const user = mongoose.model('user', userSchema);

module.exports = user;

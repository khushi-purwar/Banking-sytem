const mongoose = require('mongoose');
// const { getMaxListeners } = require('./models/users');
const User = require('./models/users')

let users = [
    {
        sno:1,
        name: "Khushi Purwar",
        email: "khushipurwar4@gmail.com",
        actno: 988223459787,
        bal: 50000
    },
    {
        sno:2,
        name: "Ardushi Agrawal",
        email: "aaruagrawal@gmail.com",
        actno: 231223459787,
        bal: 40000
    },
    {
        sno:3,
        name: "Ipshita Arya",
        email: "arya4342@gmail.com",
        actno: 756422345978,
        bal: 10000
    },
    {
        sno:4,
        name: "Aashi Sengar",
        email: "aashi234@gmail.com",
        actno: 165423459787,
        bal: 3000
    },
    {
        sno:5,
        name: "Simran Parmanand",
        email: "simran@gmail.com",
        actno: 675223459787,
        bal: 3000
    },
    {
        sno:6,
        name: "Avantika Shrivastava",
        email: "avanti464@gmail.com",
        actno: 342223459787,
        bal: 35000
    },
    {
        sno:7,
        name: "Pallavi Mishra",
        email: "pallavi12@gmail.com",
        actno: 876223459787,
        bal: 13000
    },
    {
        sno:8,
        name: "Simmi Jaiswal",
        email: "simmiJ213@gmail.com",
        actno: 876223459787,
        bal: 93000
    },
    {
        sno:9,
        name: "Riya Malhotra",
        email: "riyaM123@gmail.com",
        actno: 328223459787,
        bal: 53000
    },
    {
        sno:10,
        name: "Sonalika Yadav",
        email: "sona234@gmail.com",
        actno: 195223459787,
        bal: 3000
    },
    
]

const seedDB = async ()=> {
    await User.insertMany(users);
    console.log("DB Seeded!!!")
}

module.exports =seedDB; 

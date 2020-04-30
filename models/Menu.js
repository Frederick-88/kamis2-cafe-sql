const Sequelize = require('sequelize')

const sequelize = new Sequelize('CAFE','root','fred2811',{
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000  
    }
},
)


const newMenu = sequelize.define('menu',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    image:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
},{freezeTableName : true}
)

module.exports = newMenu
const sequelize = require('sequelize')
const model = sequelize.model

User.init({
    ID:{
        type: sequelize.STRING,
        allowNull: false
    },
    NAME:{
        type: sequelize.STRING,
        allowNull: false
    },
    PRICE:{
        type: sequelize.STRING,
        allowNull: false
    },
    DESCRIPTION:{
        type: sequelize.STRING,
        allowNull: false
    }, 
    IMAGE:{
        type: sequelize.STRING,
        allowNull: false
    },
    CREATEDAT:{
        type: sequelize.STRING,
        allowNull: false
    },
    UPDATEDAT:{
        type: sequelize.STRING,
        allowNull: false
    }, 
}, {freezeTableName : true}
)
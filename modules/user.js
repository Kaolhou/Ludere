const database = require('./database')

const user = database.sequelize.define('user',{
    usuario:{
        primaryKey: true,
        type: database.Sequelize.STRING(15),
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    nome:{
        type: database.Sequelize.STRING(30),
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    senha:{
        type: database.Sequelize.STRING(15),
        validate:{
            notEmpty:{
                msg: "Esse campo não pode ser vazio"
            }
        }
    }
})

//user.sync({force:true})

module.exports = user
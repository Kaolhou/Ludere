const database = require('./database')

const post = database.sequelize.define('post',{
    id:{
        primaryKey: true,
        type: database.Sequelize.INTEGER(10),
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    title:{
        type: database.Sequelize.STRING,
    },
    descri:{
        type: database.Sequelize.STRING(8000),
        validate:{
            notEmpty:{
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    youturl:{
        type: database.Sequelize.STRING(50)
    }
})

//post.sync({force:true})

module.exports = post
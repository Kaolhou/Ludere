const database = require('./database')

const post = database.sequelize.define('post',{
    id:{
        primaryKey: true,
        type: database.Sequelize.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    stars: {
        type: database.Sequelize.FLOAT(1),
        validate: {
            isIn: {
                args: [[1,2,3,4,5]],
                msg: "only integer numbers between 1-5 are valid"
            },
            notEmpty:{
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    fras:{
        type: database.Sequelize.STRING(50),
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
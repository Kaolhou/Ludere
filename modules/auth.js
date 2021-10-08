const database = require('./database')
const user = require('./user')

const verify = (person, pass)=>{
    return user.findAll({
        where: {user: person}
    })
}

module.exports = verify
const database = require('./database')
const user = require('./user')

const verify = async (person, pass)=>{
    const oi = await user.findAll({
        where: {usuario: person}
    })
    if(pass === oi[0].senha){
        return oi
    } 
    else{
        return false
    }
    
}

module.exports = verify
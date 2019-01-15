function stringValidation(password){
    return /^\w{6,}$/.test(password)
}
module.exports = stringValidation
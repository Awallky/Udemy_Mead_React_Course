import validator from 'validator'

export default (email) => validator.isEmail(email)

const validators = require('./validation');
const userRepository = require('../database/repositories/user.repository');
const { getUserById } = require('../database/repositories/user.repository');
const customDbError = require('../error/customError');

const getUserByIdController = async id => {
    try {
        const { result, error } = await getUserById(id);
        if (!result) {
            console.log(error);
            return { error: error };
        }
        return result;
    } catch (err) {
        console.error('getUserById repo: ', err);
        return new customDbError('Not valid request to users dataBases', err);
    }
};

module.exports = { getUserByIdController };

const pgClient = require('../index');
const customError = require('../../error/customError');

exports.createUser = async (email, name) => {
    try {
        await pgClient.query(`INSERT INTO users(email, name) VALUES ('${email}', '${name}')`);
        return { result: true };
    } catch (err) {
        return new customError('Something went wrong!');
    }
};

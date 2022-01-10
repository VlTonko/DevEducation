const pgClient = require('../index');
const customDbError = require('../../error/customError');

exports.getUserById = async id => {
    try {
        const result = await pgClient.query(`SELECT * FROM users WHERE id = ${id}`);
        let mess = result.rowCount;
        if (mess === 0) {
            return { error: new customDbError('Not valid request to users dataBases') };
        }
        return result;
    } catch (err) {
        console.error('getUserById repo: ', err);
        return new customDbError('Not valid request to users dataBases', err);
    }
};

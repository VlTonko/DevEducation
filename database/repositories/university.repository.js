const pgClient = require('../index');

exports.createUniversity = async name => {
    try {
        await pgClient.query(`INSERT into universities(name) values('${name}');`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};

exports.getUniversityById = async id => {
    try {
        const university = await pgClient.query(`SELECT * FROM universities WHERE id = ${id} LIMIT 1`);
        return { result: university.rows[0] };
    } catch (e) {
        return { error: e.message };
    }
};

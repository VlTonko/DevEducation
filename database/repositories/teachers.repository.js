const pgClient = require('../index');

exports.createTeachers = async (name, university_id) => {
    try {
        await pgClient.query(`INSERT into person (role, name, university_id) values('teacher', '${name}', '${university_id}');`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};

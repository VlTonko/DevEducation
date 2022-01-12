const pgClient = require('../index');

exports.createCourse = async (name, university_id, teachers_id) => {
    try {
        await pgClient.query(`INSERT into courses(name, university_id, teachers_id) values('${name}', '${university_id}', '${teachers_id}');`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};

exports.deleteFromCourse = async id => {
    try {
        await pgClient.query(`DELETE FROM marks WHERE student_id = ${id};
        DELETE FROM students_courses WHERE students_id = ${id};`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};

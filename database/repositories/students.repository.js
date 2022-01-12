const pgClient = require('../index');

exports.createStudent = async (name, age, university_id) => {
    try {
        await pgClient.query(`INSERT into person(role, name, age, university_id) values('student', '${name}', '${age}', '${university_id}');`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};

exports.deleteStudent = async id => {
    try {
        await pgClient.query(`DELETE FROM marks WHERE student_id = ${id};
        DELETE FROM students_courses WHERE students_id = ${id}; 
        DELETE FROM users WHERE role = 'student' and id = ${id};`);
        return { result: true };
    } catch (e) {
        return { error: e.message };
    }
};

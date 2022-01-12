const URL = require('url');

const { CREATE_UNIVERSITY, GET_UNIVERSITY, CREATE_TEACHER, CREATE_COURSE, DELETE_COURSE, CREATE_STUDENT, DELETE_STUDENT } = require('../constants/routes');

const { createUniversity, getUniversity } = require('../database/repositories/university.repository');
const { createTeachers } = require('../database/repositories/teachers.repository');
const { createCourses, deleteCourse } = require('../database/repositories/courses.repository');
const { createStudent, deleteStudent } = require('../database/repositories/students.repository');

const router = async ({ req, res, body }) => {
    let result, error;
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);

    switch (true) {
        case method === 'POST' && pathname === CREATE_UNIVERSITY:
            ({ result, error } = await createUniversity(body));
            break;
        case method === 'GET' && pathname === GET_UNIVERSITY:
            ({ result, error } = await getUniversity(query));
            break;
        case method === 'POST' && pathname === CREATE_TEACHER:
            ({ result, error } = await createTeachers(body));
            break;
        case method === 'POST' && pathname === CREATE_COURSE:
            ({ result, error } = await createCourses(body));
            break;
        case method === 'POST' && pathname === DELETE_COURSE:
            ({ result, error } = await deleteCourse(body));
            break;
        case method === 'POST' && pathname === CREATE_STUDENT:
            ({ result, error } = await createStudent(body));
            break;
        case method === 'DELETE' && pathname === DELETE_STUDENT:
            ({ result, error } = await deleteStudent(query));
            break;
        default:
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }

    if (error) {
        res.statusCode = error.status;
        return res.end(JSON.stringify({ error }));
    }
    res.statusCode = result.status;
    res.end(JSON.stringify(result.data));
};

module.exports = { router };

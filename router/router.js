const URL = require('url');

const { FACTORIAL_RECURSION, FACTORIAL_CYCLE, GET_USER } = require('../constants/routes');
const { getFactorialCycle, getFactorialRecursion } = require('../controllers/factorial.controller');
const { getUserByIdController } = require('../controllers/user.controller');

const router = async ({ req, res, body }) => {
    let result, error;
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);

    switch (true) {
        case method === 'GET' && pathname === GET_USER:
            ({ result, error } = await getUserByIdController(query.id));
            console.log('error ' + error.message);
            break;
        case method === 'GET' && pathname === FACTORIAL_CYCLE:
            ({ result, error } = await getFactorialCycle(query));
            break;
        case method === 'GET' && pathname === FACTORIAL_RECURSION:
            ({ result, error } = await getFactorialRecursion(query));
            break;
        default:
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }
    if (error) {
        res.statusCode = 404;
        const errMassage = error.message;
        return res.end(JSON.stringify({ errMassage }));
    }

    res.statusCode = 404;
    res.end(JSON.stringify(result));
};

module.exports = { router };

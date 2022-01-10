const http = require('http');
require('./database');

const { router } = require('./router/router');

const port = 5001;

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Content-Type', 'application/json, text/plain; charset=utf-8;');
    res.setHeader('Access-Control-Max-Age', '-1');

    const bodyBuffer = [];
    req.on('data', data => {
        bodyBuffer.push(data);
    });

    req.on('end', async () => {
        const body = bodyBuffer.length ? JSON.parse(bodyBuffer) : null;
        await router({ req, res, body });
    });

    res.on('error', err => {
        console.error(err);
        res.statusCode = 500;
        res.end(JSON.stringify(err));
    });
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const handFiltGenre = (movies: movie[], genresList) => {
//     const temporaryArr = [];
//     // Фильтер массива по жанрам
//     movies.forEach(movie => {
//         genresList.forEach(genre => {
//             if (movie.genres.includes(genre) && !temporaryArr.includes(movie)) {
//                 return temporaryArr.push(movie);
//             }
//         });
//     });
//     tempArr = temporaryArr;
//     return temporaryArr;
// };

// const handleById = (movies: movie[], key: string, value: string): string[] => {
//     const temporaryArr = [];

//     movies.forEach(movie => {
//         if (value === movie[key]) {
//             return temporaryArr.push(movie);
//         }
//     });
//     tempArr = temporaryArr;
//     return temporaryArr;
// };

// const handleByBudget = (movies): any => {
//     const temporaryArr = [];
//     movies.forEach(movie => {
//         if (movie.budget >=  DOM.minBudget.dataset.value && movie.budget <= DOM.maxBudget.dataset.value) {
//             temporaryArr.push(movie);
//         }
//     })
//     tempArr = temporaryArr;
//     return temporaryArr;
// }

// const handleByData = (movies): any => {
//     const temporaryArr = [];
//     movies.forEach(movie => {
//         if (new Date(movie.release_date).getTime() >= new Date(DOM.minDate.value).getTime()
//         && new Date(movie.release_date).getTime() <= new Date(DOM.maxDate.value).getTime())
//         {
//             temporaryArr.push(movie);
//         }
//     })
//     tempArr = temporaryArr;
//     return temporaryArr;
// }

// let tempArr = constants.movies;
// export const showFilms = () => {
//     let resultArray = handFiltGenre(tempArr, filterData.genre_ids);
//     resultArray = handleByBudget(tempArr);
//     resultArray = handleByData(tempArr);
//     resultArray = handleById(tempArr, 'original_language', filterData.original_language);

//     console.log(resultArray);
//     creatFirstPage(resultArray, 0);
//     DOM.filter.classList.toggle('hidden');
// };

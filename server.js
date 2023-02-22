const http = require("http");

//ФОРМИРУЕМ ЗАПРОС
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET' 
};

//ОТПРАВЛЯЕМ ЗАПРОС

const req =  http.request(options, (res) => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk;
    });

    //завершаем запрос

    res.on('end', () => {
        console.log('body:', JSON.parse(data));
    })

    .on('error', (err) => {
        console.log('Error:', err)
    }).end();
});





//const host = "localhost";

// or port 3000
//const port = "8000";

// http://localhost:8000

//const requestlistener = function (req, res) {
   // res.writeHead(200);
  //  res.end("Hello, server working well!");
//};

//const server = http.createServer(requestlistener);
//server.listen(port, host, () => {
// console.log(`Сервер запущен на http://${host}:${port}`)
//);

//const obj = {
    //b: '1',
    //c: '2',
    //id: 1,
    //firstName: 'Ivan'
    //lastName: 'Ivanov'
//}

//console.log (obj.firstName, obj.lastName);
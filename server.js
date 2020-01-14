const myChalk = require('chalk');
const myHttp = require('http');

console.log(myChalk.blue('This is blue!)'));

const myServer = myHttp.createServer((request, response)) => {
    console.log('Requested URL is ${request.url}');
    if (request.url === '/')
    response.write('You requested localhost 3000, my friend')
    response.end();
};

myServer.listen(3000, () => console.log('I am running on port 3000'))
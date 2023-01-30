const https = require('https');

https.get('https://reqres.in/api/users', (res) => {
    let data = '';

    // called when a data chunk is received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // called when the complete response is received.
    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error: ", err.message);
});

const data = JSON.stringify({
    name: 'John Doe',
    job: 'DevOps Specialist'
});

const options = {
    protocol: 'https:',
    hostname: 'reqres.in',
    port: 443,
    path: '/api/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};


const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error: ", err.message);
});

req.write(data);
req.end();


const delete_options = {
    hostname: 'reqres.in',
    path: '/api/users/2',
    method: 'DELETE'
};


const req = https.request(delete_options, (res) => {

    // log the status
    console.log('Status Code:', res.statusCode);

}).on("error", (err) => {
    console.log("Error: ", err.message);
});

req.end();

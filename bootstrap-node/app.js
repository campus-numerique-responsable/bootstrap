const express = require('express');

const app = express();
app.use(express.json());

//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/ping', (req, res) => {
    const login = process.env.LOGIN_API_RTE;
    const pwd = process.env.PASSWORD_API_RTE;
    console.log("Le login est " + login);
    console.log("Le pwd est " + pwd);
    res.send('pong');

});

module.exports = app;
var app = require('express')();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/healthz', function (req, res) {
    console.log('health request from %s', req.ip);
    res.send({});
});

app.get('/', function (req, res) {
    console.log('responding to request from %s', req.ip);
    res.send('Hello World!');
});

app.listen(port, ip, function(err){
    if(!err){
        console.log('Server running on http://%s:%s', ip, port);
    } else {
        console.log('Error listening on http://%s:%s, err: ', ip, port, err);
    }
});

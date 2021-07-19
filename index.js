const express = require('express');

const app = express();

app.get('/products',function(request,response){
    response.send("the data I want to send").end();
});


app.post('/relative-path',function(request,response){
    response.send("the data I want to send").end();
});




app.listen(4000, () => console.log('app is running'));
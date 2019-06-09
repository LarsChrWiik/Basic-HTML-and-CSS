
var express = require('express'); // Get the module

const app = express()
const port = 3002



console.log("Hello World!")


app.get('/lars321', (request, response) => {
   getTransactionScore(request.headers.token).then(
      totalScore => response.send({totalScore})
   ).catch(error => console.log(error))
});



app.listen(port, (err) => {
  if (err) {
    return console.log('This didnt really work out...', err)
  }
  console.log('Listening on port ', port)
});

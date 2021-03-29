// This code sample uses the 'node-fetch' library:
// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

fetch('https://api.trello.com/1/actions/{id}?key=a21c6916d937d2263ef0c62c5deffcdb&token=43f836d26c1783c89b5137afe2bf9a4e87fd22c6e497beb1b2f820f21766f2c1', {
  method: 'GET'
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
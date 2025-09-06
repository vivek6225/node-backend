const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) =>{
  console.log(req.url, req.method);
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>pratice Set</title></head>
     <body>
     <h1>Welcome to Calculator </h1>
     <a href="/calculator">Go To calculator</a>
     </body>
      </html>
      `);
      return res.end();
  }
 
  else if(req.url.toLowerCase() === "/calculator"){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
      <head><title>pratice set</title></head>
      <body>
      <h1>Here is the calculator</h1>
      <form action="/calculator-result" method="POST">
      <input type="text" placeholder="first Num" name="first"/>
      <input type="text" placeholder="second Num" name="second"/>
      <input type="submit" value="sum"> 
      </form>
      </body>
      </html>
      `);
      return res.end();
  } else if (req.url.toLowerCase() ==="/calculator-result" &&
    req.method ==='POST'){
     return sumRequestHandler(req, res);
  }
  res.setHeader('Content-Type','text/html');
  res.write(`
    <html>
    <head><title>pratice set</title></head>
    <body>
    <h1>404 Page Does not exixt</h1>
    <a href="/">Go to Home</a>
    </body>
    </html>
    `);
    return res.end();

}
exports.requestHandler = requestHandler;
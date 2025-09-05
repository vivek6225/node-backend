
// Import the File System module for writing data to a file
const fs = require('fs');
const userRequestHandler = ((req,res) => {

  // Log request details (URL, Method, Headers) for debugging
console.log(req.url , req.method);
// ✅ Route 1: Handle Home Page (GET request to '/')
if(req.url === '/'){

  // Set response type as HTML
    res.setHeader('Content-Type','text/html');

    // Write HTML response for the form page
  res.write('<html lang="en">');
  res.write('<head><title>complete coding</title></head>');
   res.write('<body><h1>Enter your details</h1>');

   // Form that sends data to '/submit-details' via POST method
   res.write('<form action="/submit-details" method="POST">');
   res.write('<input type="text" name="username" placeholder="Enter your name"><br>');

   // Gender options (radio buttons)
   res.write('<label for="male">male</label>')
   res.write('<input type="radio" id="male" name="gender" value="male"/>');
   res.write('<label for="female">female</label>');
   res.write('<input type="radio" id="female" name="gender" value="female">');

    // Submit button
   res.write('<br> <input type="submit" value="submit">');
    res.write('</form>');
    res.write('</body>');
  res.write('</html>');
  return res.end(); // End the response after sending the form

   // ✅ Route 2: Handle Form Submission (POST request to '/submit-details')
}  else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
  const body = [];
  req.on('data', chunk => {
    console.log(chunk);
    body.push(chunk);
  });
  req.on('end',() => {
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
 
    
      // Parse form data
    const params =  new URLSearchParams(fullBody);
    // const bodyObject = {};
    // for(const [key,val] of params.entries()){
    //   bodyObject[key] = val;
    // }

    // Standard way to convert form data into an object
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    //  // Save user data to a text file
    fs.writeFileSync('user.text', JSON.stringify(bodyObject));//// (Corrected from user.text to user.txt)
  })

   // Write static data to a file (you can replace with actual form data later)
  
  res.statusCode = 302;  // Redirect user back to the home page after submission
  res.setHeader('Location', '/');
}
 res.setHeader('Content-Type','text-html');
 res.write('<html>');
 res.write('<body><title>coplete codind</title></body>');
 res.write('<body><h1>like / share</h1></body>')
 res.write('</html>');
 res.end();
});
module.exports =userRequestHandler;
   

const http = require("http");
const express = require ("express");

const data = require("./MOCK_DATA.json");

const port = 2999;

 const app = express();

 app.get("/users/:id" , (req,res)=>{
  const id = parseInt(req.params.id);
  const user = data.find(user => user.id === id);
    const html = `
   <ul>
<li>${user.name}</li>
</ul>
    `;

   res.send(html)

 });





  

 
 
app.listen(port , () => console.log("Server is started: " + port));


 


const http=require("http");
const fs=require("fs");


const server = http.createServer((req, res) => {

    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }

    else if (req.url === "/style.css") {
        fs.readFile("style.css", (err, data) => {
            res.setHeader("Content-Type", "text/css");
            res.end(data);
        });
    }
});


server.listen(3000,"localhost",()=>{
	
	console.log("Listening for localhost 3000.");
});

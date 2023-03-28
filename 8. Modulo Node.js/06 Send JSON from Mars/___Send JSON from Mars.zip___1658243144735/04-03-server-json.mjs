import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  // Content-Length visible in terminal with command "curl --verbose localhost:3000/" (+ "sudo apt install curl")
  //const jsonResponseBody = JSON.stringify({ location: "Earth" }); // Content-Length: 20 (in bytes / length of '{"location":"Earth"}')
  const jsonResponseBody = JSON.stringify({ location: "Mars" }); // Content-Length: 19 (in bytes / length of '{"location":"Mars"}')

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

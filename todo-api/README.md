# todo-list-nodejs

็็HOW TO TEST

Get All To-Dos:
curl -X GET http://localhost:3000/todos

Create a New To-Do:
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"New Todo"}'

Update a To-Do:
curl -X PUT http://localhost:3000/todos/1 -H "Content-Type: application/json" -d '{"title":"Updated Todo","completed":true}'

Delete a To-Do:
curl -X DELETE http://localhost:3000/todos/1

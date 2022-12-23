build:
    docker build -t client .
run-dev:
    docker run -d -p 3001:3000 -v "C:\Users\gorun\Desktop\Compleate Proj\ToDoList\to_do_proj:/app" -v /app/node_modules --rm --name cont-client client
stop:
    docker stop cont-client
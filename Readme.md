#docker-compose
####Изначально папки database-data нет. Она появляется после команды docker-compose up. А именно во время запуска имеджа, связанного с базой данных, но только потому что мы явно указали что data будет в этой папке
       postres_db:
        container_name: "postres_db"
        image: postgres:latest
        restart: always
        ports:
          - 5432:5432
        environment:
          - POSTGRES_USER=dima // далее psql -U dima -d postgres или my_db_list  
          - POSTGRES_PASSWORD=2001ah2002 // этот пароль нужно указать в sequelize при конекте к бкзе данных
          - POSTGRES_DB=my_db_list // создаст базу данных с этим названием, если её не существует
        volumes:
          - ./database_data:/var/lib/postgresql/data //в данной папке сохраняются все данные

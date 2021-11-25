sudo docker run   \
-dit   \
--name fe_postgres   \

-e POSTGRES_PASSWORD=postgres   \
-e POSTGRES_USER=postgres   \
-e POSTGRES_DB=fe_docker   \
-p 5432:5432   \
-v ~/Documents/backup/postgres/fe_docker/:/var/lib/postgresql/data   \
postgres:14.1-alpine
#!/bin/sh

db_name=stunning-enigma-db

# Check docker and Node exist
command -v docker >/dev/null 2>&1 || { echo >&2 "You must first install docker"; exit 1; }
command -v node >/dev/null 2>&1 || { echo >&2 "You must first install NodeJS"; exit 1; }

# Is the database already running?
db_exists=$(docker ps -a | grep $db_name)

if [ -n "$db_exists" ]
then
    echo The database already exists, exiting
    exit 0
fi

echo Creating the database...
docker run --name $db_name \
    --restart always \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=admin \
    -v "$db_name":/data/db \
    -p 27017-27019:27017-27019 \
    -d mongo

echo Waiting 5 seconds for the database to initialize...
sleep 5

echo Generating admin user password...
admin_pass=$(node generateAdminPassword.js)

echo Copying and running startup script in the container...
docker cp ./dbinit.js $db_name:/home/dbinit.js
docker exec $db_name mongo --eval "const adminPassword = '$admin_pass'" /home/dbinit.js

echo Database is up and running!
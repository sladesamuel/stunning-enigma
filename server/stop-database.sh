#!/bin/sh

db_name=stunning-enigma-db

# Check docker exists
command -v docker >/dev/null 2>&1 || { echo >&2 "You must first install docker"; exit 1; }

# Is the database already running?
db_exists=$(docker ps -a | grep $db_name)

if [ -z "$db_exists" ]
then
    echo The database does not exist, exiting
    exit 0
fi

echo Removing the database and its volume
docker stop $db_name | xargs docker rm
docker volume rm $db_name

echo Cleanup complete!
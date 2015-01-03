#!/bin/sh
docker stop test
docker pull mysticprg/testproject
docker rm test
docker run -d -p 8123:8080 --name test mysticprg/testproject
docker rmi $(docker images -f "dangling=true" -q)
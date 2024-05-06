FROM ubuntu:focal

RUN apt-get update && apt-get install -y ca-certificates curl gnupg lsb-release
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

RUN apt-get install git -y

WORKDIR /home/app

COPY start.sh start.sh
COPY script.js script.js
COPY package*.json .

RUN npm install

RUN chmod +x start.sh
RUN chmod +x script.js

ENTRYPOINT [ "/home/app/start.sh" ]
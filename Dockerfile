FROM node:10.16.3

RUN mkdir -p /home/node/app

RUN apt-get install mongodb

RUN npm install typescript@3.6.2 -g

WORKDIR /home/node/app

COPY ./ /home/node/app

RUN npm install

EXPOSE 8080

ENTRYPOINT [ "npm","start"]
FROM node:13.1-alpine

WORKDIR /usr/app

COPY ./package.json .

RUN npm i

EXPOSE 3000

CMD npm run dev

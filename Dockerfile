FROM node:13.1-alpine

RUN apk add --no-cache \
    build-base \
    g++ \
    libpng \
    libpng-dev \
    jpeg-dev \
    pango-dev \
    cairo-dev \
    giflib-dev \
    python;

WORKDIR /usr/app

COPY ./package.json .
COPY ./.env .

RUN npm i

EXPOSE 3000

CMD npm run dev

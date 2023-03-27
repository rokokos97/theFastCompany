FROM node:14 as client

WORKDIR /app/client

COPY /client/package.json /app/client/

COPY /client /app/client/

RUN npm install
RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY server/package.json  /app/

RUN npm install

COPY server /app/

COPY --from=client /app/client/build /app/

EXPOSE 8080

CMD [ "npm", "start" ]

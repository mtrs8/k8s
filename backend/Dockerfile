FROM node:16-alpine

WORKDIR /back

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3003

CMD [ "yarn", "start" ]
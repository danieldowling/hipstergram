FROM node:14.16.1

ENV NODE_ENV development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY ./ ./

EXPOSE 3000

CMD ["npm", "run", "start"]
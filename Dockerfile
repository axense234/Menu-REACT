FROM node:latest
WORKDIR /usr/src/menu-react
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm","start" ]
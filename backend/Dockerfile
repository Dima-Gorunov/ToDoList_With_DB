FROM node
WORKDIR /usr/src/backend
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 5000
CMD [ "yarn", "start" ]
FROM node
WORKDIR /usr/src/to_do_proj
COPY package.json .
COPY public .
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]
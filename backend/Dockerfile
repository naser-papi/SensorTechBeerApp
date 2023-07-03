FROM node
RUN mkdir /usr/src/backend
WORKDIR /usr/src/backend

ENV PATH usr/src/backend/node_modules/.bin/:$PATH

COPY package*.json /usr/src/backend
RUN npm install
COPY . /usr/src/backend

EXPOSE 8081
CMD ["npm", "start"]
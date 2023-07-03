FROM node
RUN mkdir /usr/src/front
WORKDIR /usr/src/front

ENV PATH usr/src/front/node_modules/.bin/:$PATH

COPY package*.json /usr/src/front
RUN npm install
COPY . /usr/src/front

EXPOSE 3000
CMD ["npm", "start"]
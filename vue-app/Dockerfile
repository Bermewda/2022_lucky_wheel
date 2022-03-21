#base image
FROM node:14.18.2-alpine

#set working directory
WORKDIR /vue-app

#add /app/node_modules/.bin to $PATH
ENV PATH /vue-app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
RUN npm install --save vue-fortune-wheel

COPY . .
RUN npm run build

#start app
CMD ["npm", "run", "serve"]
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm run build

COPY . .

COPY ./dist ./dist

EXPOSE 3001

CMD ["npm", "start"]
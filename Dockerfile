FROM node:14
WORKDIR /app
COPY . .
CMD node index.js

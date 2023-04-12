FROM node:18.15.0
WORKDIR /app
COPY package.json .
RUN npm install
RUN apt-get update && apt-get install -y curl
COPY . .
CMD ["npm", "start"]

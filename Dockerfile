# Base image
FROM node:24-alpine3.21

#Working Directory
WORKDIR /node

#Copy the code
COPY . . 

#Install dependencies
RUN npm install 

#Build
RUN npm run Build

CMD ['npm','start']
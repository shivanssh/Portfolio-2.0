# Base image
FROM node:24-alpine3.21

#Working Directory
WORKDIR /node

#Copy the code
COPY . . 

#Install dependencies
RUN npm install 

#Build & Expose
RUN npm run build
EXPOSE 3000

#Start
CMD ["npx", "serve@latest", "out"]
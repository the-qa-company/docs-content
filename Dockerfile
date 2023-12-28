# Set the base image to node:16
FROM node:16 as qanswer-doc-build

# Specify where our app will live in the container
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
# Prepare the container for building React
RUN npm install
#RUN yarn global add serve

# Copy the React App to the container
COPY . /app/

# Build for production version
RUN npm run build

FROM nginx:stable-alpine as deploy
WORKDIR /home/node/app
# Copy what we've installed/built from production
COPY --chown=node:node --from=qanswer-doc-build /app/build /usr/share/nginx/html/
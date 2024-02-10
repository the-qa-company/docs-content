# Set the base image to node:16
FROM node:18 as qanswer-doc-build

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

CMD ["npm","run","serve","--","--build","--port","80","--host","0.0.0.0"]
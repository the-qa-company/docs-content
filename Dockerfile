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

EXPOSE 3000
# CMD ["serve","-s","build"]

CMD ["npx", "http-server", "build", "-p", "3000"]
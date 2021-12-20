# Set the base image to node:15
FROM node:15 as qanswer-doc-build

# Specify where our app will live in the container
WORKDIR /app

COPY package.json /app/package.json
# Prepare the container for building React
RUN npm install
RUN npm install -g serve

# Copy the React App to the container
COPY . /app/

# Build for production version
RUN npm run build

EXPOSE 3001
CMD ["serve","-s","build"]
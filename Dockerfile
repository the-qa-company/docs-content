# Set the base image to node:15
FROM node:15 as qanswer-doc-build

# Specify where our app will live in the container
WORKDIR /app

COPY package.json /app/package.json
# Prepare the container for building React
RUN yarn install
#RUN yarn global add serve

# Copy the React App to the container
COPY . /app/

# Build for production version
RUN yarn build

EXPOSE 3000
# CMD ["serve","-s","build"]

#
# Run
#
FROM node:15 as qanswer-doc-run

WORKDIR /app

COPY --from=qanswer-doc-build /app/build /app/
CMD ["npx", "http-server", "-p", "3000"]
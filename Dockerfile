FROM node
WORKDIR /app

# install and cache app dependencies
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /app
CMD ["ng", "serve"]

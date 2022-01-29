FROM node:12.2.0-alpine as client 

WORKDIR /app



copy . ./package*.json /app/


RUN npm install -silent


RUN npm install react-scripts -g --silent 


COPY . . 

# build the application 
RUN yarn build 

#build server nginx 
From nginx:latest


EXPOSE 80 

# copy all the contents from the build directory into the web root 
COPY . --from=client/app/build//var/www/html


COPY . ./nginx/default.conf/etc/nginx/conf.default


CMD ["nginx","-g","daemon off;"]
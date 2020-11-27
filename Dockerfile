FROM nginx:alpine

WORKDIR /usr/share/nginx/html
ADD ./dist/* .

EXPOSE 80
FROM nginx:stable-alpine

ENV NGINXUSER=laravel

ENV NGINXGROUP=laravel

RUN mkdir -p /var/www/html/api/public

ADD nginx/default.conf /etc/nginx/conf.d/default.conf

RUN sed -i "s/user www-data/user ${NGINXUSER}}/g" /etc/nginx/nginx.conf

RUN adduser -g ${NGINXGROUP} -s /bin/sh -D ${NGINXUSER}

RUN chown -R laravel:laravel /var/www/html/api
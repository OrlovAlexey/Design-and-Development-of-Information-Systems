FROM ubuntu:18.04
RUN  apt-get -y update && apt-get -y install nginx
COPY src/default /etc/nginx/sites-available/default
COPY src/index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
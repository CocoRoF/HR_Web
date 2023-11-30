FROM nginx:1.25.3

RUN apt-get update && apt-get install -y bash

COPY wait.sh /wait.sh
COPY default.conf /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/nginx.conf
RUN chmod +x /wait.sh

CMD ["/wait.sh", "web-front:3000", "--", "nginx", "-g", "daemon off;"]


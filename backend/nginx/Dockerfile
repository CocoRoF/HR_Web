FROM nginx:1.25.3

COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

RUN useradd -M -s /bin/false cocorof || true
RUN mkdir -p /code/staticfiles
RUN chown -R cocorof:cocorof /code/staticfiles
RUN usermod -aG sudo cocorof

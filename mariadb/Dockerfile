FROM mariadb:10.7.1

RUN echo "USE mysql;" > /docker-entrypoint-initdb.d/timezones.sql && mysql_tzinfo_to_sql /usr/share/zoneinfo >> /docker-entrypoint-initdb.d/timezones.sql

COPY ./my.cnf /ect/mysql/conf.d/my.cnf
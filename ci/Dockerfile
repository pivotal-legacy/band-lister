FROM making/dcind-jdk

ENV BASH /bin/bash

RUN apk update --no-cache \
    && apk add \
        make \
        bash \
        libstdc++ \
    && rm -rf /var/cache/apk/*
FROM mhart/alpine-node:10
VOLUME ["/opt/mcdf/ui"]
WORKDIR /opt/mcdf/ui

COPY ./package.json /opt/mcdf/ui

CMD ["yarn", "start:dev"]
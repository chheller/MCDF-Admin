FROM mhart/alpine-node:10
VOLUME ["/opt/mcdf/ui"]
WORKDIR /opt/mcdf/ui
RUN yarn global add serve
COPY ./package.json /opt/mcdf/ui
COPY node_modules /opt/mcdf/ui/node_modules
COPY build /opt/mcdf/ui/build

CMD ["serve", "-s", "build"]
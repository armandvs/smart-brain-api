FROM node:14-alpine3.14

WORKDIR /usr/src/smart-brain-api

COPY ./ ./

RUN npm install
RUN apk update && apk add bash

EXPOSE 3000

CMD ["/bin/bash"]

# FROM ubuntu:22.04
FROM node:16


WORKDIR /api-gateway/ 
COPY ./package.json /api-gateway/
COPY ./yarn.lock /api-gateway/
RUN yarn install 

# RUN mkdir myfolder => COPY시 myfolder 없으면 어처피 자동으로 만들어짐.
COPY . /api-gateway/
CMD yarn start:dev





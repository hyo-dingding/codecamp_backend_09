
# FROM ubuntu:22.04
FROM node:16


WORKDIR /resource-service/  
COPY ./package.json /resource-service/
COPY ./yarn.lock /resource-service/
RUN yarn install 

# RUN mkdir myfolder => COPY시 myfolder 없으면 어처피 자동으로 만들어짐.
COPY . /resource-service/
CMD yarn start:dev





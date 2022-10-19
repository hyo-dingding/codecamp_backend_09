
# FROM ubuntu:22.04
FROM node:16


WORKDIR /auth-service/  
COPY ./package.json /auth-service/
COPY ./yarn.lock /auth-service/
RUN yarn install 

# RUN mkdir myfolder => COPY시 myfolder 없으면 어처피 자동으로 만들어짐.
COPY . /auth-service/
CMD yarn start:dev





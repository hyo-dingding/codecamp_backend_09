
# FROM ubuntu:22.04
FROM node:16


WORKDIR /stock-service/  
COPY ./package.json /stock-service/
COPY ./yarn.lock /stock-service/
RUN yarn install 

# RUN mkdir myfolder => COPY시 myfolder 없으면 어처피 자동으로 만들어짐.
COPY . /stock-service/
CMD yarn start:dev





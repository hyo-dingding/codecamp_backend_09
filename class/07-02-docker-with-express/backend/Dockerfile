
# FROM ubuntu:22.04
FROM node:14

# RUN mkdir myfolder =>  COPY시 myfolder 없으면 어처피 자동으로 만들어짐.
COPY . /myfolder/
WORKDIR /myfolder/   

RUN yarn install
CMD yarn start:dev




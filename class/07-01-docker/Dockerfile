# 컴퓨터 만드는 설명서  실행시 내컴터 안에 작은 컴터가 만들어짐. (최종목적 내가 만든 esperss프로그램을 설정하는것임.)

# 1. 운영체제 설치 (node 14 버전과 yarn 모두 설치되어있는 리눅스)
FROM node:14


# 2. node.js와 yarn 설치하기
# RUN apt install node.js
# RUN npm install -g yarn

# 3. 내컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# COPY 내컴퓨터 폴더 위치 도커 컴퓨터 폴더 위치
COPY ./index.js /

# 4. 도커 안에서 index.js 실행시키기
# CMD yarn start:dev
CMD node index.js



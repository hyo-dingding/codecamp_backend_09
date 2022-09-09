# 컴퓨터 만드는 설명서  (이컴퓨터 안에서 실행될 명령어 작성하기)
# 실행시 내컴터 안에 작은 컴터가 만들어짐. (최종목적 내가 만든 esperss프로그램을 설정하는것임.)

# 1. 운영체제 설치 (node 14 버전과 yarn 모두 설치되어있는 리눅스) 운영체제를 이미지라고 부름
# 이미 운영체제들이 모아져있는 홈페이지들이 있다.
FROM ubuntu:22.04
FROM node:14

# aaa라는 폴더 만들기 
# 컴퓨터가 켜진다음에 내가 하고싶은 명령어들 쓰는공간임.
# RUN mkdir aaa  이컴퓨터안에서 aaa라는 폴더를 실행시켜줘
# RUN cd aaa  그 aaa폴더안에 들어가

# 2. node.js와 yarn 설치하기
# RUN apt install node.js -> node 설치
# RUN npm install -g yarn -> npm가지고 yarn 설치

# 3. 내컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# COPY 내컴퓨터 폴더 위치 도커 컴퓨터 폴더 위치
COPY ./index.js /

# 4. 도커 안에서 index.js 실행시키기
# CMD yarn start:dev
CMD node index.js



# yarn start:dev하기 위해 node, npm, yarn 설치해야함.
# 
# express 실행하기 
# 
FROM node:18

WORKDIR /loa-stat-frontend
COPY ./package.json /loa-stat-frontend
COPY ./package-lock.json /loa-stat-frontend
RUN npm install

COPY . /loa-stat-frontend

RUN npm run build
CMD npm run start
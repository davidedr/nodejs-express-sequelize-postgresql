### Thanks to:
## Brandon Parise, https://developer.okta.com/blog/authors/brandon-parise/

### Installation:

## 1. server app folder creation
md nodejs-express-sequelize-postgresql
cd nodejs-express-sequelize-postgresql

## 2. package.json creation
npm init

name: (nodejs-express-sequelize-postgresql) 
version: (1.0.0) 
description: Node.js Rest Apis with Express, Sequelize & PostgreSQL.
entry point: (index.js) server.js
test command: 
git repository: 
keywords: nodejs, express, sequelize, postgresql, rest, api
author:
license: (ISC)

Is this ok? (yes) yes
node server.js

## 3. Modules installation
npm install express sequelize pg pg-hstore body-parser cors --save

## 4. write the server code server.js 

## 5. run the server
node server.js

## 6. open browser to http://localhost:8080/ or run postman tests

### 7. once you're done with the controller, start the gui dev
## 8. check vue installation
vue --version

## 9. install vue, if not installed
npm install -g @vue/cli

## 10. Init client project
cd c:\temp
vue create nodejs-express-sequelize-postgresql-gui-vue 

## 11. accept all proposed values

## 12. 
cd nodejs-express-sequelize-postgresql-gui-vue
npm run serve

## 13 point browser to http://localhost:8080/ to be greeted by the Vue default home page

## 14 Install bootstrap
npm i bootstrap-vue bootstrap

## 15 Install vue router
npm install vue-router

## 16 Install axios
npm install axios
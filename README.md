#E-Commerce Application (Nest Framework)
## Description

ensure you have the following in order to run this application
1. Database Server
2. create Database and db User
3. Assign all db privileges to the user
4. Node v16.x.x
5. setup your environment variables using the .env.sample file in the root folder
6. Follow the instructions below to run it
7. Kindly import postman collections from the root directory of the project into postman to view the requests/response

### example of how to create db in posgres 
```bash
$ sudo -u postgres psql
postgres=# create database ;
postgres=# create user myuser with encrypted password 'mypass';
postgres=# grant all privileges on database mydb to myuser;

postgres=# exit
```

## Installation

```bash
# ensure you have node version 16.*.*
$ npm i -g @nestjs/cli
$ npm install
```

## Running the app

### migrations


```bash
#run migrations
$ npx sequelize-cli db:migrate

# seed data
$ npx sequelize-cli db:seed:all
```
### running application
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

Nest is [MIT licensed](LICENSE).

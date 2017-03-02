# band-lister
simple app with Spring server and React Frontend


## Getting Started

### Server (`band-lister-server`)
A Java Spring Boot app with jdbc and mysql
#### Prerequisites
- Java
- MySQL

#### Setup
- `make reset-dev-db` (creates mysql database `band_lister_dev` with latest schema.)
- `make reset-test-db` (creates mysql database `band_lister_test` with latest schema.)

#### Starting the app
- `make start` (starts the server up on port 8080)

#### Testing
- `make unit` (run unit tests)
- `make tests` (runs unit tests, followed by integration tests for each client with client on port 7000 and server on port 7070)

### Client (`band-lister-react`)
A React app (no redux)
#### Prerequisites
- node/npm
- Firefox (for integration test)

#### Setup
- `npm install` (install dependencies)

#### Starting the app
- `make start` (starts the client up on port 8000, with SERVER_URL hard coded as port 8080)

#### Testing
- `make unit` (run unit tests)
- `make integration` (start up, run and shut down integration tests with client on port 7000 and server on port 7070)
- `make tests` (run unit tests followed by integration tests)

### Client (`band-lister-react-redux`)
A React app with Redux
#### Prerequisites
- node/npm
- Firefox (for integration test)

#### Setup
- `npm install` (install dependencies)

#### Starting the app
- `make start` (starts the client up on port 8000, with SERVER_URL hard coded as port 8080)

#### Testing
- `make unit` (run unit tests)
- `make integration` (start up, run and shut down integration tests with client on port 7000 and server on port 7070)
- `make tests` (run unit tests followed by integration tests)

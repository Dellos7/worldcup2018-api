# Worldcup 2018 API [![Build Status](https://travis-ci.org/Dellos7/worldcup2018-api.svg?branch=master)](https://travis-ci.org/Dellos7/worldcup2018-api)

Will use data from https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json

[lsv/fifa-worldcup-2018](https://github.com/lsv/fifa-worldcup-2018)

## API

### GET /

Returns:

```json
{
    "message": "Hello World! This is the World Cup 2018 API."
}
```

### POST /

Send:

```json
{
    "name": "David"
}
```

Returns:
```json
{
    "name": "David"
}
```

### GET /groups

Will return the parsed data from the groups.

## Developmen environment

### Install modules

```bash
npm install
```

### Run local server
Using nodemon to watch for .ts file changes:
```bash
npm run dev
```

### Run tests
Using mocha, chai and supertest:

```bash
npm run test
```

### Compile & run for production
```bash
npm run prod
```

### Run production server
```bash
npm run start
```
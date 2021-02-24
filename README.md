# overstay-fees

## Description
An API that estimates and returns overstay fees for guests in an hotel.

## Technology Stack
- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [Joi](https://github.com/sideway/joi#readme)

## Installation
### Running Locally
- Clone the repo.
- Change to root folder
- Run `yarn install`
- Start app `yarn start`

### Testing
- Run `yarn test`

## API
This API has one endpoint, `/reservations`

- `GET /reservations`: Retuns all reservations 
- `GET  /reservations/:id/?clientCheckOutTime`: Returns a single reservation with the stated ID. `clientCheckOutTime` is a date string written in the format `YYYY-MM-DD HH:MM`. If `clientCheckOutTime` is not supplied, an error is returned.

## Author 
- Oluwafemi Akinwa

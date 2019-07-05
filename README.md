# Esoko PMS APIs

The PMS api are set of endpoints to manage and track farmer details. This is V1 of the PMS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to install the following

```
npm
mongodb
```

The config folder has a Keys file where you can change you mongodbURI.

### Installing

Download folder and run npm install in root of directory. A step by step series of examples that tell you how to get a development env running.

```
run > npm install
```

```
run > node_modules/.bin/migrate up <migration_file_name> -d mongodb://localhost:27017/esoko-pms
```

To run and test endpoints run the command below

```
run > npm run dev
```

## API endpoints

Use demo username admin and password admin\$123 to get token to access endpoints

```
POST /auth/login
{
    "username": "admin",
    "password": "admin$123"
}

GET /api/groups
GET /api/group:/id
POST /api/groups
{
    "name": "",
    "description": ""
}//sample group request
PUT /api/groups/:id

GET /api/persons
POST /api/persons
{
	"firstName": "Seth",
	"lastName": "Nartey",
	"country": "Ghana",
	"gender": "Male",
	"phoneNo": "0245184371",
	"comments": "Say cheese",
	"age": 12,
	"email": "example@some.com",
	"homeAddress": "AG 15 Prono Street",
	"hobbies": "Movie Watching",
	"profilePicture": "dhfafhjasfhkjsfhksajfk",
	"occupation": "farmer"
}//sample person request

GET /api/person/:id
PUT /api/persons/:id
DELETE /api:/persons/:id
```

## Deployment

This system can be deployed on any hosting platform.

```
run > npm build
```

to build system and deploy.

## Built With

- NodeJs
- Express
- Mongodb

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

Version 1

## Authors

- **Nartey Seth Bily**

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

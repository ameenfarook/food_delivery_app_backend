# NodeJS - Food Delivery App (Backend)

Backend system for [**Food Delivery**](https://github.com/ameenfarook/food_delivery_app "React Native - Food Delivery App") mobile app.

## Dependencies

- [ExpressJS](https://expressjs.com "Popular Web Framework for NodeJS")
- [MongoDB](https://docs.mongodb.com/drivers/node/current "MongoDB Client for NodeJS")
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken "Library for generating and parsing JWT")
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js "Library for password hashing")

## Setup instructions

### 1. Clone Repository

```sh
# Clone the app
git clone https://github.com/ameenfarook/food_delivery_app_backend.git
```

### 2. Install all dependencies

```sh
# navigate to app directory
cd food_delivery_app_backend

npm install
```

### 3. Setup Instructions

- MongoDB Connection

```json
# open package.json and add connectionString inside [projectConfig.mongoConnectionUrl]

"projectConfig": {
    "mongoConnectionUrl": "<put the mongodb connection string here>"
  }
```

- Application IP Address and Port Number (Default 3000)

```json
# open package.json and add ip and port inside [projectConfig]

"projectConfig": {
	"serverIp": "<put the server ip address here (string)>",
    "serverPort": "<put the server port number here (integer)>"
  }
```

### 4. Database Setup (MongoDB)

##### Database

```
foodelivery_db
```

##### Collections

- ```sh
  users  #for user specific data (email and username are unique indexes)
  ```

###### collection structure

```json
{
  "_id": {
    "$oid": "Default ObjectID"
  },
  "email": "String (unique)",
  "username": "String (unqiue)",
  "password": "String (hashed)"
}
```


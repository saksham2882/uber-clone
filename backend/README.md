# Backend API Documentation

## /users/register Endpoint Documentation

## Description
This endpoint registers a new user in the system. It creates a user record by receiving user details, hashes the password, and generates a JSON Web Token (JWT) for authentication.

## HTTP Method
`POST`

## Endpoint URL
`/users/register`

## Request Body
The endpoint expects a JSON payload with the following structure:

- **fullName**: An object containing:
  - **firstName** (required): A string with a minimum length of 3 characters.
  - **lastName** (optional): A string with a minimum length of 3 characters.
- **email** (required): A valid email address.
- **password** (required): A string with a minimum length of 8 characters.

### Example Request
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "strongpassword123"
}
```

## Responses

### Success
- **Status Code:** `201 Created`
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      // created user object details
    }
  }
  ```

### Error
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Validation error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

## /users/login Endpoint Documentation

## Description
This endpoint authenticates an existing user by validating the provided email and password.
Upon successful authentication, it returns a JSON Web Token (JWT) for further secured requests.

## HTTP Method
`POST`

## Endpoint URL
`/users/login`

## Request Body
The endpoint expects a JSON payload with the following structure:

- **email** (required): A valid email address.
- **password** (required): A string with a minimum length of 8 characters.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "strongpassword123"
}
```

## Responses

### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      // user details excluding the password field
    }
  }
  ```

### Error
- **Status Code:** `400 Bad Request` or `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Validation error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```
  or
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

## /users/profile Endpoint Documentation

## Description
This endpoint returns the current authenticated user's profile details.
The request must include a valid JWT either in the `Authorization` header or as a cookie.

## HTTP Method
`GET`

## Endpoint URL
`/users/profile`

## Request Headers
- **Authorization** (optional): Bearer token in the header, if not using cookies.
- Alternatively, a token cookie may be used.

## Responses

### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "user": {
      // user object details excluding sensitive fields like password
    }
  }
  ```

### Error
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Authentication required or invalid token"
  }
  ```

## /users/logout Endpoint Documentation

## Description
This endpoint logs out the current user by clearing the token cookie and blacklisting the JWT.
It requires the user to be authenticated.

## HTTP Method
`GET`

## Endpoint URL
`/users/logout`

## Request Headers
- **Authorization** (optional): Bearer token in the header, if not using cookies.
- Alternatively, the token cookie will be used.

## Responses

### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Error
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Authentication required or invalid token"
  }
  ```

## Additional Notes
- The password is hashed using bcrypt before saving to the database (for registration).
- The generated JWT is signed with the secret defined in `process.env.JWT_SECRET`.
- Input data validation is performed using `express-validator`.



## /captains/register Endpoint Documentation

### Description
This endpoint registers a new captain in the system. It creates a captain record by receiving captain details including personal information, account credentials, and vehicle information. The captain's password is hashed before saving, and additional validations are performed on the vehicle details.

### HTTP Method
`POST`

### Endpoint URL
`/captains/register`

### Request Body
The endpoint expects a JSON payload with the following structure:

- **fullName**: An object containing:
  - **firstName** (required): A string with at least 3 characters.
  - **lastName** (required): A string.
- **email** (required): A valid email address.
- **password** (required): A string with at least 6 characters.
- **vehicle**: An object containing:
  - **color** (required): A string with at least 3 characters.
  - **plate** (required): A string with at least 3 characters.
  - **capacity** (required): An integer with a minimum value of 1.
  - **vehicleType** (required): A string that must be one of the following values: `car`, `motorcycle`, or `auto`.

#### Example Request
```json
{
  "fullName": {
    "firstName": "Alice",
    "lastName": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "securepass123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code:** `201 Created`
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      // created captain object details
    }
  }
  ```

#### Error
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Validation error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```
  or
  ```json
  {
    "message": "Captain already exist" // if the captain email is already registered
  }
  ```

---

## /captains/login Endpoint Documentation

### Description
This endpoint authenticates an existing captain by validating the provided email and password. Upon successful authentication, it returns a JSON Web Token (JWT) for securing subsequent requests.

### HTTP Method
`POST`

### Endpoint URL
`/captains/login`

### Request Body
The endpoint expects a JSON payload with the following structure:

- **email** (required): A valid email address.
- **password** (required): A string with at least 6 characters.

#### Example Request
```json
{
  "email": "alice.smith@example.com",
  "password": "securepass123"
}
```

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      // captain details excluding the password field
    }
  }
  ```

#### Error
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Validation error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```
  or
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

---

## /captains/profile Endpoint Documentation

### Description
This endpoint returns the profile details of the current authenticated captain. A valid JWT must be provided either in the `Authorization` header or as a cookie.

### HTTP Method
`GET`

### Endpoint URL
`/captains/profile`

### Request Headers
- **Authorization** (optional): Bearer token in the header, if the JWT is not passed as a cookie.
- Alternatively, a token cookie may be automatically used.

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "captain": {
      // captain object details excluding sensitive fields like password
    }
  }
  ```

#### Error
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Authentication required or invalid token"
  }
  ```

---

## /captains/logout Endpoint Documentation

### Description
This endpoint logs out the current captain by clearing the token cookie and blacklisting the JWT. It requires the captain to be authenticated.

### HTTP Method
`GET`

### Endpoint URL
`/captains/logout`

### Request Headers
- **Authorization** (optional): Bearer token in the header, if not using cookies.
- Alternatively, the token cookie must be provided.

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "message": "Logout successfully"
  }
  ```

#### Error
- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Authentication required or invalid token"
  }
  ```
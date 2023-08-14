# Project name and description
This is the final Tokopedia Play Clone project, not completely similar but this project has the same concept.
This back-end project is made using express js and database mongodb

# Features
Feature list.
1. CRUD Video
2. CRUD Product
3. CRUD User
4. CRUD Comment

# How to install & run
1. Make sure the project location is correct and mongodb is running
2. Adjust database url address value in .env file
```
DATABASE_URL = mongodb://127.0.0.1:27017/final_db
```
3. Npm install
4. Npm run dev
```
Server running on port 8000
Database connected
```
5. Access http://localhost:8000/
```
{
  "status": 200,
  "message": "success",
  "data": "Welcome to Tokopedia Clone API"
}
```

# Schema Database and Route Path
* **Video**
* **Product**
* **User**
* **Comment**

# Video
* Video object
```
{
  _id: ObjectId(auto generate)
  video_url: string
  img_url: string
  category: string
}
```
**GET /video**
----
  Returns all videos.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get all videos",
    "data": {
        "videos": [
            {
                "_id": "64d60844c49e4c8546063e40",
                "video_url": "https://www.youtube.com/embed/ztn3DZuTwHw",
                "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg",
                "category": "Elektronik",
                "__v": 0
            },
        ]
    }
}
```
**GET /video/:id**
----
  Returns one video.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get detail video",
    "data": {
        "video": [
            {
               "_id": "64d60844c49e4c8546063e40",
                "video_url": "https://www.youtube.com/embed/ztn3DZuTwHw",
                "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg",
                "category": "Elektronik",
                "__v": 0,
                "product_list": []
            }
        ]
    }
}
```
**POST /video**
----
  Returns new video.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  video_url: string
  img_url: string
  category: string
}
```
* **Success Response:**  
* **Code:** 201
  **Content:**  
```
{
    "message": "success add new video",
    "data": {
        "newVideo": {
            "video_url": "https://youtu.be/ztn3DZuTwHw2",
            "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg",
            "category": "Elektronik",
            "_id": "64be94e0cf230f85c63ede11",
            "__v": 0
        }
    }
}
```
**PATCH /video/:id**
----
  Returns updated video.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  video_url: string
  img_url: string
  category: string
}
```
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success update video",
    "data": {
        "updateVideo": {
            "video_url": "https://youtu.be/ztn3DZuTwHw2 update",
            "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg update",
            "category": "Elektronik update"
        }
    }
}
```
**DELETE /video/:id**
----
  Returns deleted video.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success deleted video",
    "data": {
        "_id": "64be94e0cf230f85c63ede11",
        "video_url": "https://youtu.be/ztn3DZuTwHw2",
        "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg",
        "category": "Elektronik",
        "__v": 0
    }
}
```

# Product
* Product object
```
{
  _id: ObjectId(auto generate)
  link: string
  img_url: string
  title: string
  category: string
  price: number
}
```
**GET /product**
----
  Returns all products.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get all products",
    "data": {
        "products": [
            {
                "_id": "64be46141feef07ad446ca6b",
                "link": "https://tokopedia.link/QJF5g9TxFBb",
                "img_url": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg",
                "title": "Google TV 65 inch 4K UHD",
                "category": "Elektronik",
                "price": 6727500,
                "__v": 0
            }
        ]
    }
}
```
**POST /product**
----
  Returns new product.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  link: string
  img_url: string
  title: string
  category: string
  price: number
}
```
* **Success Response:**  
* **Code:** 201
  **Content:**  
```
{
    "message": "success add new product",
    "data": {
        "newProduct": {
            "link": "https://tokopedia.link/QJF5g9TxFBb",
            "img_url": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg",
            "title": "Google TV 65 inch 4K UHD",
            "category": "Elektronik",
            "price": 6727500,
            "_id": "64be8d2e8201419ee6e9b270",
            "__v": 0
        }
    }
}
```
**PATCH /product/:id**
----
  Returns updated product.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  link: string
  img_url: string
  title: string
  category: string
  price: number
}
```
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success update product",
    "data": {
        "updateProduct": {
            "link": "https://tokopedia.link/QJF5g9TxFBb update",
            "img_url": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg update",
            "title": "Google TV 65 inch 4K UHD update",
            "category": "Elektronik update",
            "price": 6727123
        }
    }
}
```
**DELETE /product/:id**
----
  Returns deleted product.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success deleted product",
    "data": {
        "_id": "64be96bb64016a9ca70239a1",
        "link": "https://tokopedia.link/QJF5g9TxFBb",
        "img_url": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg",
        "title": "Google TV 65 inch 4K UHD",
        "category": "Elektronik",
        "price": 6727500
    }
}
```

# User
* User object
```
{
  _id: ObjectId(auto generate)
  username: string
  password: string
}
```
**GET /user/:username**
----
  Returns one user.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get user",
    "data": {
        "user": {
            "_id": "64be7c611c4eb3cea0f2e3e9",
            "username": "user1",
            "password": "$2a$08$OE3eml0OSQnTcb1Am2JzxeIWB.4Ac/grbD5DgiD48oFf7pl2xmiDG",
            "__v": 0
        }
    }
}
```
**POST /user**
----
  Returns message.
* **Headers**  
  Content-Type: application/json
* **Data Body**  
```
{
  username: string
  password: string
}
```
* **Success Response:**  
* **Code:** 201
  **Content:**  
```
{
  "message": "success add new user"
}
```
**POST /user/login**
----
  Returns message and token.
* **Headers**  
  Content-Type: application/json
* **Data Body**  
```
{
  username: string
  password: string
}
```
* **Success Response:**  
* **Code:** 201
  **Content:**  
```
{
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmU4MTBhMDVjMjQwNmMxOGU5Y2JmNCIsInVzZXJuYW1lIjoidXNlcjIiLCJpYXQiOjE2OTAyMDg2MDUsImV4cCI6MTY5MDIxMDQwNX0.nNLXSF65DjWV0Lj9CcmSMPu4t48ky1pPPv64v1uKE3U"
}
```

# Comment
* Comment object
```
{
  _id: ObjectId(auto generate)
  video_id: string
  username: string
  comment: string
  time: string
}
```
**GET /comment**
----
  Returns all comments.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get all comments",
    "data": {
        "comments": [
            {
                "_id": "64d70c5235fbcf9e42993d75",
                "video_id": "64d60844c49e4c8546063e41",
                "username": "user1",
                "comment": "komentar video 2 - 1",
                "time": "Sat Aug 12 2023 11:36:34 GMT+0700 (Western Indonesia Time)",
                "__v": 0
            }
        ]
    }
}
```
**GET /comment/:videoid**
----
  Returns all comments by video id.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get all comments",
    "data": {
        "comments": [
            {
                "_id": "64d70c5235fbcf9e42993d75",
                "video_id": "64d60844c49e4c8546063e41",
                "username": "user1",
                "comment": "komentar video 2 - 1",
                "time": "Sat Aug 12 2023 11:36:34 GMT+0700 (Western Indonesia Time)",
                "__v": 0
            }
        ]
    }
}
```

**POST /comment/:videoid**
----
  Returns new comment.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  comment: string
}
```
* **Success Response:**  
* **Code:** 201
  **Content:**  
```
{
    "message": "success add new comment",
    "data": {
        "newComment": {
            "video_id": "64d60844c49e4c8546063e41",
            "username": "user1",
            "comment": "tes komentar",
            "time": "Mon Aug 14 2023 13:02:02 GMT+0700 (Western Indonesia Time)",
            "_id": "64d9c35a3a8f4f1f352e8392",
            "__v": 0
        }
    }
}
```
**DELETE /comment/:id**
----
  Returns deleted comment by id comment.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success deleted comment",
    "data": {
        "_id": "64d9c34e3a8f4f1f352e8390",
        "video_id": "64d60844c49e4c8546063e41",
        "username": "user1",
        "comment": "tes",
        "time": "Mon Aug 14 2023 13:01:50 GMT+0700 (Western Indonesia Time)",
        "__v": 0
    }
}
```

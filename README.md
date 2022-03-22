# simple_node_app

### about the application 
simple node application which allow you to register your self and add ur reflections 

### Technology used in the application 
1. base-64
2. bcrypt
3. celebrate
4. cors
5. dotenv
6. express
7. http-status-codes
8. jsonwebtoken
9. moment
10. pg
11. uuid
### environment setup
1. `DATABASE_URL`set up ur Postgres server with connection string `postgres://postgres:<<password>>@localhost:5432/<<data base name>>`
2. `PORT` the port you want to run the application, for example 8000.
3. `SECRET` jwt secret  signature , for example `supersecretjwt`


### run the application 
1. clone the repository 
2. add .env file and fill it with the environment variable which have been written above.
3. run the app with `npm run start`

### Application routes
1. post ***/login*** log in using your account 
2. post  ***/signup*** create account
3. delete ***/deleteUser*** delete your account < require to be authenticate>
4. post ***/reflections*** create a  reflections < require to be authenticate>
5. get ***/reflections*** get all your reflections  reflections < require to be authenticate>
6. get ***/reflections/:id*** get  reflections by id  reflections < require to be authenticate>
7. put ***/reflections/:id*** edit a  reflections by id  reflections < require to be authenticate>
8. delete ***/reflections/:id*** delete a  reflections by id  reflections < require to be authenticate>




const express = require('express');
const PORT = 9000;
const sequelize = require('./database/database.js');
const userRouter = require('./router/userRouter.js')
const postRouter = require('./router/postRouter.js')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(postRouter)

const databaseConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error.message);
      }
}
databaseConnection();


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
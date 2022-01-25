import express from 'express';
import router from "./routers/todos.router";
import * as dotenv from "dotenv";
import errorMiddleware from "./middleware/error.middleware";

const app = express();
dotenv.config()
const port = process.env.PORT;


app.get('/api', function (req, res) {
    res.send('Sup, ima express API');
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(errorMiddleware);
app.use('/api', router);

app.listen(port, () =>
    {console.log(`app running on port ${port}`)}
);

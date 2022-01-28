import express from 'express';
import todosRouter from "./routers/todos.router";
import usersRouter from "./routers/users.router";
import * as dotenv from "dotenv";
import cors from 'cors';

const app = express();
dotenv.config()
const port = process.env.PORT;

app.get('/api', function (req, res) {
    res.send('Sup, ima express API');
});
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', todosRouter);
app.use('/api', usersRouter);

app.listen(port, () =>
    {console.log(`app running on port ${port}`)}
);

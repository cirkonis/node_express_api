import express from 'express';
import router from "./routers/todos.router"

const app = express();
const port = 5000;


app.get('/api', function (req, res) {
    res.send('Sup, ima express API');
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', router);

app.listen(port, () =>
    {console.log(`app running on port ${port}`)}
);

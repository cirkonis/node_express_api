import express from 'express';
import { todos } from "./data"
import router from "./routes/todos"

const app = express();
const port = 5000;


app.get('/api', function (req, res) {
    res.send('Sup, ima express API');
});

app.use('/api', router);

app.listen(port, () =>
    {console.log(`app running on port ${port}`)
        console.log(todos)
    }
);

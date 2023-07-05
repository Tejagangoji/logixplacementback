import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';
import Post from './model/post.js';


dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use('/', Router);

app.get('/singlepost', async (req, res) => {
    const posts = await Post.find();
    return res.json(posts);
});

app.post('/singlepost', async (req, res) => {
    const posts = await Post.find({username: req.body.name});
    return res.json(posts);
});

app.delete('/singlepost', async (req, res) => {
    const posts = await Post.findByIdanddelte(req.body.id);
    return res.json("posts is deleted");
});

app.put('/singlepost', async (req, res) => {
    const posts = await Post.updateOne($pull, {id: req.body.id});
    return res.json("posts is deleted");
});

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

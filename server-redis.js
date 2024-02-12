const express = require("express");
const axios = require("axios");
const cors = require("cors");
const Redis = require("redis");

const redisClient = Redis.createClient(); // Pass in URL in production
const DEFAULT_EXPIRATION = 3600;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.connect().then(() => {
    console.log('Connected to Redis');
    app.listen(3010, () => {
        console.log('Server listening on port 3010');
    });
}).catch((err) => {
    console.error('Error connecting to Redis', err);
});

//2 API Endpoints
app.get("/photos", async (req, res) => {
    const albumId = req.query.albumId;
    const cacheKey = `photos?albumId=${albumId}`;
    const photos = await getOrSetCache(cacheKey, async () => {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/photos`,
            { params: { albumId } }
        );
        return data;
    });
    res.json(photos);
});

app.get("/photos/:id", async (req, res) => {
    const photo = await getOrSetCache(`photos:${req.params.id}`, async () => {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
        );
        return data;
    });
    res.json(photo);
});

async function getOrSetCache(key, cb) {
    try {
        let data = await redisClient.get(key);
        if (data != null) {
            console.log("Cache hit");
            return JSON.parse(data);
        } else {
            console.log("Cache miss");
            const freshData = await cb();
            await redisClient.setEx(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));
            return freshData;
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error accessing Redis');
    }
}

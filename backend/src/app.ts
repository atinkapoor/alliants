import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import { YouTubeSearchService } from './services/youtube'
import { FlickrService } from './services/flickr'
var cors = require('cors')

dotenv.config()

const app: Application = express()
const port = process.env.APP_PORT || 3000

app.use(cors())

const youtubeService = new YouTubeSearchService();
const flickrService = new FlickrService();

app.get('/youtube', async (req: Request, res: Response) => {
    const keyword = req.query.keyword
    if (!keyword) {
        res.send('Please add a keyword to search for as a query param');
        return;
    }
    const result = await youtubeService.searchVideo(keyword as string);
    if (result.items.length > 0) {
        res.send(result.items[0])
    } else {
        res.send({ success: false, message: 'No videos found' })
    }
})

app.get('/flickr', async (req: Request, res: Response) => {
    const keyword = req.query.keyword
    if (!keyword) {
        res.send('Please add a keyword to search for as a query param');
        return;
    }
    const result = await flickrService.searchFlickr(keyword as string);
    if (result.items.length > 0) {
        const items = [...result.items];
        res.send(items.sort(() => Math.random() - Math.random()).slice(0, 3))
    } else {
        res.send({ success: false, message: 'No results' })
    }
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})

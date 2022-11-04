import { FlickrSearchResult } from "./interfaces"
import axios from "axios";

export class FlickrService {
    async searchFlickr(keyword: string): Promise<FlickrSearchResult> {
        const result = await axios.get(`https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1
        &tags=${keyword}`)
        return result.data
    }
}

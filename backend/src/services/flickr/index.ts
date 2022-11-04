import { FlickrSearchResult } from "./interfaces"

export class FlickrService {
    async searchFlickr(keyword: string): Promise<FlickrSearchResult> {
        const results = await fetch(`https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1
        &tags=${keyword}`)
        return results.json()
    }
}

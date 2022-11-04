import { YouTubeSearchResult } from "./interfaces";

export class YouTubeSearchService {
    youtubeKey = process.env.YOUTUBE_KEY
    async searchVideo(keyword: string): Promise<YouTubeSearchResult> {
        if (!this.youtubeKey) {
            throw new Error('Youtube key not found!');
        }
        const encodedKeyword = encodeURIComponent(keyword);
        const result = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&videoDuration=short&q=${encodedKeyword}&type=video&key=${this.youtubeKey}`)
        const searchResult = await result.json();
        return searchResult;
    }
}

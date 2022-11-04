export class DataService {
    public static async searchYoutube(keyword: string) {
        const backendServer = process.env.REACT_APP_API_HOST;
        const response = await fetch(`${backendServer}/youtube?keyword=${keyword}`);
        return await response.json();
    }

    public static async searchFlickr(keyword: string) {
        const backendServer = process.env.REACT_APP_API_HOST;
        const response = await fetch(`${backendServer}/flickr?keyword=${keyword}`);
        return await response.json();
    }
}

export class DataService {
    public static async searchYoutube(keyword: string) {
        const backendServer = process.env.REACT_APP_API_HOST;
        const response = await fetch(`${backendServer}/youtube?keyword=${keyword}`);
        const result = await response.json();
        if (response.status !== 200) {
            throw new Error(result.message);
        }
        return result;
    }

    public static async searchFlickr(keyword: string) {
        const backendServer = process.env.REACT_APP_API_HOST;
        const response = await fetch(`${backendServer}/flickr?keyword=${keyword}`);
        const result = await response.json();
        if (response.status !== 200) {
            throw new Error(result.message);
        }
        return result;
    }
}

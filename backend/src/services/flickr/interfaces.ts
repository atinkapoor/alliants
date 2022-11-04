export interface FlickrItem {
    title: string;
    link: string;
    media: Map<string, string>;
    description: string;
    author: string;
}
export interface FlickrSearchResult {
    items: Array<FlickrItem>;
}

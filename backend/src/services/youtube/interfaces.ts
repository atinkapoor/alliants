export interface YouTubeVideoId {
    kind: string;
    videoId: string;
}

export interface YouTubeVideoThumbnail {
    url: string;
    width: number;
    height: number;
}

export interface YouTubeVideoSnippet {
    channelId: string;
    title: string;
    description: string;
    thumbnails: Map<string, YouTubeVideoThumbnail>;
}

export interface YouTubeSearchResultItem {
    kind: string;
    etag: string;
    id: YouTubeVideoId;
    channelTitle: string;
    snippet: YouTubeVideoSnippet;
}

export interface YouTubeSearchResult {
    items: Array<YouTubeSearchResultItem>;
}

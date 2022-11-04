import { useState } from "react";
import { DataService } from "../../services/data.service";

export const YouTubeSearch = () => {
    const [results, setResults] = useState<any>(null);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            keyword: { value: string };
        };
        DataService.searchYoutube(target.keyword.value).then((result) => {
            setResults(result);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search YouTube Shorts : &nbsp;
                    <input type="text" name="keyword" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {results && <a rel="noreferrer" target='_blank' href={`http://youtube.com/watch?v=${results.id.videoId}`}><img alt="test" src={results.snippet.thumbnails['default'].url}/> </a> }
        </div>
    );
}

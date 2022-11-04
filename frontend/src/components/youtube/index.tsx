import { useState } from "react";
import { Alert } from "react-bootstrap";
import { DataService } from "../../services/data.service";

export const YouTubeSearch = () => {
    const [results, setResults] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            keyword: { value: string };
        };
        setError(null);
        setResults(null);
        DataService.searchYoutube(target.keyword.value).then((result) => {
            setResults(result);
        }).catch((error) => {
            setError(error.message);
        });
    }

    return (
        <div>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <label>
                    Search YouTube Shorts: &nbsp;
                    <input type="text" name="keyword" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {results && <a rel="noreferrer" target='_blank' href={`http://youtube.com/watch?v=${results.id.videoId}`}><img alt="test" src={results.snippet.thumbnails['default'].url}/> </a> }
        </div>
    );
}

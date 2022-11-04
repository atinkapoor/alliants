import { useState } from "react";
import { DataService } from "../../services/data.service";

export const FlickrSearch = () => {
    const [results, setResults] = useState<any>(null);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            keyword: { value: string };
        };
        DataService.searchFlickr(target.keyword.value).then((result) => {
            setResults(result);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search Flickr: &nbsp;
                    <input type="text" name="keyword" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {results && <img alt="flickr" src={results[0].media['m']}/>}
        </div>
    );
}

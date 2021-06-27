import React, {useState, useEffect} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {

    const [data, setData] = useState([]);
    const [searchString, setSearchString] = useState("");

    let url = `https://api.giphy.com/v1/gifs/search?api_key=abOopd54xzLl9h9WQyLRcIxJSBEiYVV1&q=${searchString}&limit=4&offset=0&rating=g&lang=en`;

    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then(json => setData(json.data))
    }, [searchString, url]);

    function handleFormSubmit(event, formData) { // returns the data that has been collected from the input
        event.preventDefault(); 
        setSearchString(formData);
    };
    
    return (
        <>
            <GifSearch handleFormSubmit={handleFormSubmit} />
            {
                data.length === 0
                    ? 
                <p>Try to search for a gif!</p> 
                    : 
                <div style={{"display": "flex", "flex-wrap": "wrap", "justify-content": "center"}}>
                    {data.map(gifObj => <GifList key={gifObj.id} url={gifObj.embed_url} /> )}
                </div>
            }
        </>
    )
}

export default GifListContainer;
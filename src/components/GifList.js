import React from "react";

function GifList({url}) {
    return (
        <div>
            <iframe src={url} alt="a gif"></iframe>
        </div>
    )
}

export default GifList;
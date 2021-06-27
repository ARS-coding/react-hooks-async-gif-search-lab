import React, {useState} from "react";


function GifSearch({handleFormSubmit}) {

    const [formData, setFormData] = useState("");

    function handleInputChange(event) {
        setFormData(event.target.value);
    };

    return (
        <form onSubmit={(event) => handleFormSubmit(event, formData)}>
            <input type="text" onChange={handleInputChange} value={formData} />
            <input type="submit" />
        </form>
    )
}

export default GifSearch;
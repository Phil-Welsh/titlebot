import React, { useState } from "react";
import TitleModel from "../../models/title";

import './Search.css'

function Search() {
    const [url, setUrl] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        TitleModel.create({ url }).then(
            (data) => {
                window.location.reload();
            }
        );
    }

    return (
        <div className="search-input">
            <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='url'
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                        placeholder='https://www.cnn.com'
                    />
                <input type='submit' value='Save' id="submit-button" />
            </form>
            <small>Please add 'https://' to the beginning of your URL 😁</small>
        </div>
    );
}

export default Search;

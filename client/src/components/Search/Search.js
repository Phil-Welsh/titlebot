import React, { useState } from "react";
import TitleModel from "../../models/title";

import './Search.css'

function Search() {
    const [favicon, setFavicon] = useState({});
    const [title, setTitle] = useState({});
    const [url, setUrl] = useState("");

    function fetchTitle() {
        return fetch(url)
            .then((response) => response.text())
            .then((html) => {
                const doc = new DOMParser().parseFromString(html, "text/html");
                const title = doc.querySelectorAll('title')[0];
                console.log(title.innerText);
            });
    }


    function handleSubmit(event) {

        event.preventDefault();

        fetchTitle()

        // TitleModel.create({ favicon, title }).then(
        //     (data) => {
        //         window.location.reload();
        //     }
        // );
    }

    return (
        <div className="add-expense-card">
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <input
                        type='text'
                        name='url'
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                        placeholder='www.cnn.com'
                    />
                </div>
                <input type='submit' value='Save' id="submit-button" />
            </form>
        </div>
    );
}

export default Search;

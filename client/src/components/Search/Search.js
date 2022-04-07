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

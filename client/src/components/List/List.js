import React, { useState, useEffect } from "react";
import TitleModel from "../../models/title";
import Item from "../Item/Item"

import './List.css'

function List() {
    const [titles, setTitles] = useState([]);

    useEffect(
        function () {
            fetchTitles()
        },
        []
    );

    function fetchTitles() {
        TitleModel.all().then((data) => {
            setTitles(data.titles);
        });
    }

    function generateTitles(titles) {
        return titles.map((title, index) => (
            <div>
                < Item id={titles[index]} />
            </div>
            )
        )
    }

    return (
        <div className="list-container">
            {titles.length ? (
                <div>
                    {generateTitles(titles)}
                </div>
            ) :
                (
                    <div>
                        <p>Add some URLs!</p>
                    </div>
                )
            }
        </div>
    );
}

export default List;

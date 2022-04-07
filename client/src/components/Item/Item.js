import React, { useState } from "react";

import './Item.css'

function Item(props) {
    return (
        <div className="listItem">
            <img src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${props.id.url}`}/>
            <h5>
                {props.id.title}
            </h5>
        </div>
    );
}

export default Item;

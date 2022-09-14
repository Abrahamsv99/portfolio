import React from "react";

function Badge (props) {
    return <div className="badge badge-secondary hover:badge-outline badge-lg mx-1.5 my-1 cursor-default">{props.text}</div>
}

export default Badge;
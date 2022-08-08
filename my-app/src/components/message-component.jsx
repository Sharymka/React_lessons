import React from "react";
import "./style.css";


export function MessageComponent(props) {

    const{text} = props;
    return <h1 className="title">{text}</h1>;
}

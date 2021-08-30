import React from "react";
export const NextArrow = (props) => {
    /*className, InLineStyles, onClick*/
    return (
        <>
            <div
            className={props.className}
            style={{...props.style, backgroundColor: "black"}}
            onClick={props.onClick}
            />
        </>
    );
};

export const PrevArrow = (props) => {
    /*className, InLineStyles, onClick*/
    return (
        <>
            <div
            className={props.className}
            style={{...props.style, backgroundColor: "black"}}
            onClick={props.onClick}
            />
        </>
    );
};
import React from "react";

export default function Box(props) {
    const box_styles = {
        right: `${props.right}px`,
        animation: props.ani,
    };
    const handleClick = () => {
        window.open(props.url);
    };
    return (
        <div className="box" style={box_styles} onClick={handleClick}>
            <div className="left">
                <img
                    src={require("../images/home/home_bg_1_tiny.png")}
                    alt="leaves"
                    style={{ left: `${props.left}px`, top: `${props.top}px` }}
                />
                <img
                    src={require("../images/home/home_bg_1_tiny.png")}
                    alt="leaves"
                    style={{ left: `${props.left}px`, top: `${props.top}px` }}
                />
            </div>
            <div className="mid">
                <div className="left_text">
                    <div className="no">{props.no}.</div>
                    <div className="box_title">{props.title}</div>
                </div>
                <div className="desc">{props.desc}</div>
            </div>
            <div className="right">
                <img
                    src={require(`../images/works/${props.img}.jpg`)}
                    alt="website_img_sample"
                />
            </div>
        </div>
    );
}

import React from "react";

export default function EduBar(props) {
    return (
        <div className="edu_bar" style={props.edu_bar_styles}>
            <div className="front" style={props.front_ani}>
                <div className="left">
                    <div className="p_container">
                        <p className="stage">{props.stage}</p>
                        <p className="year">{props.year}</p>
                    </div>
                </div>
                <div className="right">
                    <p className="school">{props.school}</p>
                    {props.major ? (
                        <p className="major">Major - {props.major}</p>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="background" style={props.background_ani}>
                <img
                    src={require("../../images/home/home_bg_1_tiny.png")}
                    alt="home_bg_1_tiny"
                    style={{ top: `${props.img_styles}px` }}
                />
                <img
                    src={require("../../images/home/home_bg_1_tiny.png")}
                    alt="home_bg_1_tiny"
                    style={{ top: `${props.img_styles}px` }}
                />
            </div>
        </div>
    );
}

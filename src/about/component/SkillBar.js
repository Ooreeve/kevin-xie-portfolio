import React from "react";

export default function SkillBar(props) {
    return (
        <div className="skill_bar">
            <div className="progress_container">
                <div
                    className="progress_bar"
                    style={{
                        height: `${props.progress}%`,
                    }}
                >
                    <img
                        src={require("../../images/home/home_bg_1_tiny.png")}
                        alt="home_bg_1_tiny"
                        className="progress_img_1"
                        style={props.img_styles}
                    />
                    <img
                        src={require("../../images/home/home_bg_1_tiny.png")}
                        alt="home_bg_1_tiny"
                        className="progress_img_2"
                        style={props.img_styles}
                    />
                </div>
            </div>
            <img
                src={require(`../../images/about/skill_icon/${props.icon}.png`)}
                alt="icon"
                className="skill_icon"
            />
            <h5 className="skill_name">{props.skill_name}</h5>
        </div>
    );
}

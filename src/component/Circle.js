import React from "react";

const Circle = (props) => {
    return (
        <div className="circle_container_outter" style={props.container_outter}>
            <div className="circle_container" style={props.container}>
                <img
                    className="circle"
                    src={require("../images/home/home_bg_1_tiny.png")}
                    alt="home_bg_1"
                    style={props.circle}
                />
            </div>
        </div>
    );
};

export default Circle;

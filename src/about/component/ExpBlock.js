import React from "react";

export default function ExpBlock(props) {
    return (
        <div className="exp_block" style={props.exp_block_ani}>
            <h3>{props.company}</h3>
            <p className="time" style={props.time_ani}>
                {props.time}
            </p>
            <div className="descr">
                <p>{props.descr}</p>
            </div>
        </div>
    );
}

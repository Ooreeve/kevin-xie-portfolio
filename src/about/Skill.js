import React, { useContext, useState, useEffect } from "react";
import SkillBar from "./component/SkillBar";
import { AboutContext } from "./About";

export default function Skill() {
    const [slideNow, setSlideNow] = useContext(AboutContext).slideNow;
    const [yet, setYet] = useState(false);
    const [ranNum, setRanNum] = useState([]);
    useEffect(() => {
        if (slideNow == 1) {
            setYet(true);
        }
    }, [slideNow]);

    useEffect(() => {
        const ranNums = Array(12)
            .fill()
            .map(() => Math.floor(-500 * Math.random()));

        setRanNum(ranNums);
    }, []);

    const skills_design = [
        { id: 0, skill: "ps", prog: 70 },
        { id: 1, skill: "ai", prog: 70 },
        { id: 3, skill: "cad", prog: 80 },
        { id: 4, skill: "ppt", prog: 100 },
        { id: 5, skill: "catia", prog: 60 },
        { id: 6, skill: "figma", prog: 60 },
    ];

    const skills_frontend = [
        { id: 0, skill: "html", prog: 90 },
        { id: 1, skill: "css", prog: 90 },
        { id: 3, skill: "js", prog: 70 },
        { id: 4, skill: "react", prog: 70 },
        { id: 5, skill: "sass", prog: 80 },
        { id: 6, skill: "next", prog: 50 },
    ];

    const skillbars_design = skills_design.map((item) => {
        return (
            <SkillBar
                key={item.id}
                progress={yet == true ? item.prog : 0}
                skill_name={item.skill}
                img_styles={{ left: `${ranNum[item.id]}px` }}
                icon={item.skill}
            />
        );
    });

    const skillbars_frontend = skills_frontend.map((item) => {
        return (
            <SkillBar
                key={item.id}
                progress={yet == true ? item.prog : 0}
                skill_name={item.skill}
                img_styles={{ left: `${ranNum[item.id + 6]}px` }}
                icon={item.skill}
            />
        );
    });
    return (
        <div className="skill">
            <div className="h1_container">
                <h1 style={yet ? { animation: "h1 2s 0.5s forwards" } : {}}>
                    my skill
                </h1>
            </div>
            <div className="h2_container">
                <h2 style={yet ? { animation: "h2 1s 0.5s forwards" } : {}}>
                    Product Design&nbsp;,&nbsp;&nbsp;Visual
                    Design&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;Frontend
                    Development
                </h2>
            </div>
            <div
                className="skill_bar_container"
                style={yet ? { animation: "skill_bar 1.5s 1s forwards" } : {}}
            >
                {skillbars_design}
                <div className="plus">+</div>
                {skillbars_frontend}
            </div>
        </div>
    );
}

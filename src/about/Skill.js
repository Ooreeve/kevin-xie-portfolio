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
        { id: 0, skill: "ps", prog: 80 },
        { id: 1, skill: "ai", prog: 80 },
        { id: 3, skill: "cad", prog: 100 },
        { id: 4, skill: "ppt", prog: 100 },
        { id: 5, skill: "catia", prog: 80 },
        { id: 6, skill: "figma", prog: 60 },
    ];

    const skills_frontend = [
        { id: 0, skill: "html", prog: 100 },
        { id: 1, skill: "css", prog: 100 },
        { id: 3, skill: "js", prog: 80 },
        { id: 4, skill: "react", prog: 80 },
        { id: 5, skill: "sass", prog: 100 },
        { id: 6, skill: "next", prog: 80 },
        { id: 7, skill: "tailwind", prog: 100 },
    ];

    const skills_backend = [
        { id: 0, skill: "node", prog: 80 },
        { id: 1, skill: "mysql", prog: 80 },
        { id: 2, skill: "mongo", prog: 60 },
        { id: 3, skill: "restapi", prog: 80 },
        { id: 4, skill: "ts", prog: 80 },
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

    const skillbars_backend = skills_backend.map((item) => {
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
                <h1
                    style={
                        yet ? { animation: "skill_h1 2s 0.5s forwards" } : {}
                    }
                >
                    my skills
                </h1>
            </div>
            <div className="h2_container">
                <h2 style={yet ? { animation: "h2 1s 0.5s forwards" } : {}}>
                    Product Design&nbsp;,&nbsp;&nbsp;Visual
                    Design&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;Frontend
                    Development&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;Backend
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
                <div className="plus">+</div>
                {skillbars_backend}
            </div>
        </div>
    );
}

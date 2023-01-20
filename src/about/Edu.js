import React, { useContext, useState, useEffect } from "react";
import EduBar from "./component/EduBar";
import { AboutContext } from "./About";

export default function Edu() {
    const [slideNow, setSlideNow] = useContext(AboutContext).slideNow;
    const [yet, setYet] = useState(false);
    const [ranNum, setRanNum] = useState([]);
    useEffect(() => {
        if (slideNow == 2) {
            setYet(true);
        }
    }, [slideNow]);

    useEffect(() => {
        const ranNums = Array(4)
            .fill()
            .map(() => Math.floor(-400 * Math.random()));

        setRanNum(ranNums);
    }, []);

    const edus = [
        {
            id: 0,
            stage: "Elementary School",
            year: "1999 ~ 2005",
            school: "Taipei Municipal Qingjiang Elementaray School",
        },
        {
            id: 1,
            stage: "Junior High School",
            year: "2005 ~ 2008",
            school: "Taipei Beitou Junior High School",
        },
        {
            id: 2,
            stage: "Senior High School",
            year: "2008 ~ 2011",
            school: "New Taipei Municipal Tamsui Vocational High School",
            major: "Computer Science",
        },
        {
            id: 3,
            stage: "University (Bachelor)",
            year: "2011 ~ 2015",
            school: "Chaoyang University of Technology",
            major: "Industrial Design",
        },
    ];

    const edu_bars = edus.map((item) => {
        return (
            <EduBar
                key={item.id}
                stage={item.stage}
                year={item.year}
                school={item.school}
                major={item.major}
                edu_bar_styles={{ marginLeft: `${item.id * 90}px` }}
                img_styles={ranNum[item.id]}
                front_ani={
                    yet
                        ? {
                              animation: `front 3s forwards ${
                                  item.id / 2 + 0.5
                              }s`,
                          }
                        : {}
                }
                background_ani={
                    yet
                        ? {
                              animation: `background 4s forwards ${
                                  item.id / 2 + 0.5
                              }s`,
                          }
                        : {}
                }
            />
        );
    });

    return (
        <div className="edu">
            <h1 style={yet ? { animation: "h1 2s 0.5s forwards" } : {}}>
                My Education
            </h1>
            <div className="edu_bar_container">{edu_bars}</div>
        </div>
    );
}

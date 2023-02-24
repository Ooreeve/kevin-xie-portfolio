import React, { useContext, useState, useEffect } from "react";
import { AboutContext } from "./About";
import ExpBlock from "./component/ExpBlock";

export default function Exp() {
    const [slideNow, setSlideNow] = useContext(AboutContext).slideNow;
    const [yet, setYet] = useState(false);
    const [ranNum, setRanNum] = useState([]);
    useEffect(() => {
        if (slideNow == 3) {
            setYet(true);
        }
    }, [slideNow]);

    useEffect(() => {
        const ranNums = Array(4)
            .fill()
            .map(() => Math.floor(-400 * Math.random()));

        setRanNum(ranNums);
    }, []);

    const exps = [
        {
            id: 0,
            company: "Decobali",
            time: "2014 Jul. ~ 2015 Jul.",
            descr: "Focus on designing solid wood furniture, especially made of teak wood.",
        },
        {
            id: 1,
            company: "Tai Chung Canvas",
            time: "2018 Nov. ~ 2019 May",
            descr: "Product design and graphic design, from backpacks to tents and some accessories like buckles an zippers.",
        },
        {
            id: 2,
            company: "EH-Design",
            time: "2020 Feb. ~ 2020 Oct.",
            descr: "Customized furniture design, involving almost all types of furniture, including a wide variety of materials.",
        },
    ];

    const exp_blocks = exps.map((item) => {
        return (
            <ExpBlock
                key={item.id}
                company={item.company}
                time={item.time}
                descr={item.descr}
                exp_block_ani={
                    yet ? { animation: "exp_block 1.5s 1s forwards" } : {}
                }
                time_ani={yet ? { animation: "time 1.5s 1s forwards" } : {}}
            />
        );
    });

    return (
        <div className="exp">
            <h1 style={yet ? { animation: "exp_h1 2s 0.5s forwards" } : {}}>
                My Experience
            </h1>
            <div
                className="band"
                style={yet ? { animation: "band 3s 0.5s forwards" } : {}}
            >
                <h2>Product Designer</h2>
                <img
                    src={require("../images/home/home_bg_1_tiny.png")}
                    alt="home_bg_1_tin"
                />
            </div>
            <div className="exp_block_container">{exp_blocks}</div>
        </div>
    );
}

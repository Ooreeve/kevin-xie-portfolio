import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import Circle from "../component/Circle";

export default function Intro() {
    const [first, setFirst] = useContext(MyContext).first;
    const [introStyles, setIntroStyles] = useState({
        all: {},
        circle: {},
        p_container: {},
        h1: {},
        h2: {},
        h3: {},
    });
    useEffect(() => {
        introAni();
    }, []);

    //set styles function

    const introStart = () => {
        return new Promise((resolve) => {
            if (first) {
                setTimeout(() => {
                    resolve(
                        setIntroStyles((prev) => {
                            return {
                                ...prev,
                                all: { animation: "intro_start 1.5s forwards" },
                            };
                        })
                    );
                }, 1500);
                setFirst(false);
            } else {
                setTimeout(() => {
                    resolve(
                        setIntroStyles((prev) => {
                            return {
                                ...prev,
                                all: { animation: "intro_start 1.5s forwards" },
                            };
                        })
                    );
                }, 500);
            }
        });
    };

    async function introAni() {
        try {
            await introStart();
            setIntroStyles((prev) => {
                return {
                    ...prev,
                    circle: { animation: "circle_move 1s 0.5s forwards" },
                    p_container: { animation: "p_move 2s 0.5s forwards" },
                    h1: { animation: "h1_move 1.5s 0.5s forwards" },
                    h2: { animation: "h_move 1.5s 0.8s forwards" },
                    h3: { animation: "h_move 1.5s 1.1s forwards" },
                };
            });
        } catch (error) {
            console.log("intro animation error");
        } finally {
        }
    }

    return (
        <div className="intro" style={introStyles.all}>
            <div className="left">
                <h1 className="title" style={introStyles.h1}>
                    about me
                </h1>
                <h2 style={introStyles.h2}>
                    Hello! I'm <span>Kevin</span>
                </h2>
                <h3 style={introStyles.h3}>
                    a <span>designer</span> and a{" "}
                    <span>font-end developer</span>
                </h3>
            </div>
            <div className="right">
                <div className="p_container" style={introStyles.p_container}>
                    <p>
                        I have experience in graphic design and product design.
                        I’ve had the opportunity to work with many different
                        industries. I enjoy using my skills to create beautiful
                        designs that are as functional as they are aesthetically
                        pleasing.
                    </p>
                    <p>
                        My passion for creating things has been with me since my
                        childhood. And I'm a curious person who likes to learn
                        new things. I'm always looking for new opportunities to
                        grow and learn.
                    </p>
                </div>
            </div>
            <Circle container_outter={introStyles.circle} />
        </div>
    );
}

import { useRef } from "react";
import { React, useEffect, useState, useContext } from "react";
import Circle from "../component/Circle";
import { MyContext } from "../App";

const Home = () => {
    const [circleStyles, setCircleStyles] = useState([]);
    const [titleStyles, setTitleStyles] = useState({});
    const [first, setFirst] = useContext(MyContext).first;

    //ranged random number function -------------------
    function ranNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // circle animation function ----------------
    function containerOutterAni() {
        setCircleStyles((prev) => {
            return prev.map((item) => {
                item.container_outter = {
                    ...item.container_outter,
                    transform: `translate(${ranNum(-900, 900)}px, ${ranNum(
                        -400,
                        400
                    )}px)`,
                    opacity: "1",
                };
                return item;
            });
        });
    }

    useEffect(() => {
        //set circles styles --------------------------
        for (let i = 0; i < 20; i++) {
            const containerSize = ranNum(50, 400);
            setCircleStyles((prev) => [
                ...prev,
                {
                    id: i,
                    container: {
                        width: `${containerSize}px`,
                        height: `${containerSize}px`,
                        animation:
                            i % 2 == 0
                                ? "circleSpinF 30s infinite linear"
                                : "circleSpinB 30s infinite linear",
                    },
                    circle: {
                        top: `${ranNum(0, -150)}px`,
                        left: `${ranNum(0, -600)}px`,
                    },
                },
            ]);
        }
        // title animation ------------------------
        if (first) {
            setTimeout(() => {
                containerOutterAni();
            }, 1500);
            setTimeout(() => {
                setTitleStyles({ opacity: "1" });
            }, 3500);
            setFirst(false);
        } else {
            setTimeout(() => {
                containerOutterAni();
            }, 500);
            setTimeout(() => {
                setTitleStyles({ opacity: "1" });
            }, 2500);
        }
    }, []);

    //create background circles -------------------
    const circleElements = circleStyles.map((item) => {
        return (
            <Circle
                key={item.id}
                container_outter={item.container_outter}
                container={item.container}
                circle={item.circle}
            />
        );
    });

    return (
        <div className="home">
            <div className="title" style={titleStyles}>
                <h1>
                    <span>Kevin</span> Xie
                </h1>
                <h2>Portfolio</h2>
            </div>
            <div className="title_bg" style={titleStyles}></div>
            <div className="bg">{circleElements}</div>
        </div>
    );
};

export default Home;

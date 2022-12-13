import { useRef } from "react";
import { React, useEffect, useState, useContext } from "react";
import Circle from "./home/Circle";
import { MyContext } from "./App";

const Home = () => {
    function ranNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //create background circles -------------------
    const [circleStyles, setCircleStyles] = useState([]);
    const [titleStyles, setTitleStyles] = useState({});
    const [first, setFirst] = useContext(MyContext).first;

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
        for (let i = 0; i < 25; i++) {
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

        if (first) {
            setTimeout(() => {
                containerOutterAni();
            }, 1000);
            setTimeout(() => {
                setTitleStyles({ opacity: "1" });
            }, 3000);
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

    const cicleElements = circleStyles.map((item) => {
        return (
            <Circle
                key={item.id}
                container_outter={item.container_outter}
                container={item.container}
                circle={item.circle}
            />
        );
    });
    console.log(first);

    return (
        <div className="home">
            <div className="title" style={titleStyles}>
                <h1>
                    <span>Kevin</span> Xie
                </h1>
                <h2>Portfolio</h2>
            </div>
            <div className="title_bg" style={titleStyles}></div>
            <div className="bg">{cicleElements}</div>
        </div>
    );
};

export default Home;

import React, { useEffect, useState, createContext } from "react";
import Edu from "./Edu";
import Exp from "./Exp";
import Intro from "./Intro";
import Skill from "./Skill";
import Hobby from "./Hobby";

export const AboutContext = createContext();
export default function About() {
    const [slideNow, setSlideNow] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("wheel", slide);
        }, 2500);
    }, []);

    //slider function
    function slide(e) {
        if (e.deltaY > 0) {
            setSlideNow((prev) => {
                if (prev < slide_array.length - 1) {
                    window.removeEventListener("wheel", slide);
                    setTimeout(() => {
                        window.addEventListener("wheel", slide);
                    }, 1500);
                    return prev + 1;
                } else {
                    return prev;
                }
            });
        } else if (e.deltaY < 0) {
            setSlideNow((prev) => {
                if (prev > 0) {
                    window.removeEventListener("wheel", slide);
                    setTimeout(() => {
                        window.addEventListener("wheel", slide);
                    }, 1500);
                    return prev - 1;
                } else {
                    return prev;
                }
            });
        }
    }

    const sliderStyles = {
        transform: `translateY(calc(${-slideNow * 100}% + ${
            -slideNow * 100
        }px))`,
    };

    //create slide elements
    const slide_array = [
        { id: 0, component: <Intro /> },
        { id: 1, component: <Skill /> },
        { id: 2, component: <Edu /> },
        { id: 3, component: <Exp /> },
        { id: 4, component: <Hobby /> },
    ];
    const slide_elements = slide_array.map((item) => {
        return (
            <div className="slide" key={item.id}>
                {item.component}
            </div>
        );
    });

    //create slide bar
    const slide_bar_btn_elements = slide_array.map((item) => {
        const silde_bar_btn_styles =
            slideNow == item.id ? { backgroundColor: "#e66300" } : {};

        return (
            <div
                className="slide_bar_btn"
                style={silde_bar_btn_styles}
                key={item.id}
                onClick={() => setSlideNow(item.id)}
            ></div>
        );
    });

    return (
        <AboutContext.Provider value={{ slideNow: [slideNow, setSlideNow] }}>
            <div className="about">
                <div className="slider" style={sliderStyles}>
                    {slide_elements}
                </div>
                <div className="slide_bar">{slide_bar_btn_elements}</div>
            </div>
        </AboutContext.Provider>
    );
}

import React, { useContext, useState, useEffect } from "react";
import { AboutContext } from "./About";

export default function Hobby() {
    const [slideNow, setSlideNow] = useContext(AboutContext).slideNow;
    const [yet, setYet] = useState(false);
    const [ranNum, setRanNum] = useState([]);
    const [bElements, setBElements] = useState([]);
    useEffect(() => {
        if (slideNow == 4 && yet == false) {
            setYet(true);
        }
    }, [slideNow]);

    useEffect(() => {
        const ranNums = Array(5)
            .fill()
            .map(() => Math.floor(-500 * Math.random()) - 150);
        setRanNum(ranNums);
    }, []);

    const hobbies = [
        [
            { id: 0, type: "deco", name: "deco" },
            {
                id: 1,
                type: "hobby",
                name: "pottery",
                descr: "I love creating pottery, especially with a potter's wheel.",
            },
            { id: 2, type: "deco", name: "deco" },
            {
                id: 3,
                type: "hobby",
                name: "music",
                descr: "I often listen to music in my daily life, and I also love to sing and play music.",
            },
        ],
        [
            {
                id: 0,
                type: "hobby",
                name: "pickleball",
                descr: "Pickleball is a very fun and exciting sport without being too physically taxing.",
            },
            {
                id: 1,
                type: "hobby",
                name: "art",
                descr: "I love art appreciation and painting, especially classical art and street graffiti.",
            },
            { id: 2, type: "deco", name: "deco" },
            {
                id: 3,
                type: "hobby",
                name: "cinephile",
                descr: "There are many great movies and series waiting for you to watch.",
            },
        ],
        [
            {
                id: 0,
                type: "deco",
                name: "deco",
            },
            {
                id: 1,
                type: "hobby",
                name: "reading",
                descr: "I am fascinated to reading all kinds of books, learning a new subject is always fun.",
            },
            { id: 2, type: "deco", name: "deco" },
            {
                id: 3,
                type: "hobby",
                name: "workout",
                descr: "Workout makes your body feel energetic, and watching the changes in your body is very fulfilling.",
            },
        ],
    ];

    const blocks = hobbies.map((item) => {
        return item.map((item) => {
            const binary = Math.floor(Math.random() * 2);
            const quadra = Math.floor(Math.random() * 4);
            let direction = "";
            if (quadra == 0) {
                direction = "top";
            } else if (quadra == 1) {
                direction = "bot";
            } else if (quadra == 2) {
                direction = "left";
            } else if (quadra == 3) {
                direction = "right";
            }
            return (
                <div
                    className={`b${item.id + 1}`}
                    key={item.id}
                    style={
                        yet
                            ? {
                                  animation: `block_${direction}_in 2s ${
                                      item.id * 0.3 + 0.5
                                  }s forwards`,
                              }
                            : {}
                    }
                >
                    {item.type == "deco" ? (
                        <div
                            className="bg_img_container"
                            style={
                                yet
                                    ? binary
                                        ? {
                                              animation:
                                                  "bg_img_container 30s infinite linear reverse",
                                          }
                                        : {
                                              animation:
                                                  "bg_img_container 30s infinite linear",
                                          }
                                    : {}
                            }
                        >
                            <img
                                src={require("../images/home/home_bg_1_tiny.png")}
                                className={"bg_img"}
                                style={{
                                    left: `${
                                        Math.floor(-500 * Math.random()) - 150
                                    }px`,
                                }}
                            />
                        </div>
                    ) : (
                        <img
                            src={require(`../images/about/hobby_icon/${item.name}.png`)}
                            className={"hobby_icon"}
                        />
                    )}

                    {item.type == "deco" ? (
                        <></>
                    ) : (
                        <p className="descr">{item.descr}</p>
                    )}
                </div>
            );
        });
    });

    useEffect(() => {
        setBElements(blocks);
    }, [yet]);

    return (
        <div className="hobby">
            <h1 style={yet ? { animation: "h1 2s 0.5s forwards" } : {}}>
                My <br /> Hobbies
            </h1>
            <div className="b_container">
                <div className="top">{bElements[0]}</div>
                <div className="mid">{bElements[1]}</div>
                <div className="bot">{bElements[2]}</div>
            </div>
        </div>
    );
}

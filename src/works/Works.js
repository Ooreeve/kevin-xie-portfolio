import { React, useEffect, useState, useContext, useRef } from "react";
import { MyContext } from "../App";
import Box from "./Box";

export default function Works() {
    const [first, setFirst] = useContext(MyContext).first;
    const wWidth = useContext(MyContext).wWidth;
    const wHeight = useContext(MyContext).wHeight;
    const w_px = useContext(MyContext).w_px;

    const [scrollPosn, setScrollPosn] = useState(0);
    const [scrollSignStyles, setScrollSignStyles] = useState({ top: 100 });
    const [arrowStyles, setArrowStyles] = useState({
        top: { opacity: 0, height: 0 },
        down: { opacity: 1, height: 17 },
    });
    const [boxLeftImgRanNum, setBoxLeftImgRanNum] = useState([]);
    const [aniStyles, setAniStyles] = useState({
        h1: {},
        scroll_sign: {},
        box_container: {},
        box: [],
    });

    //create_boxes------------------------------------
    const box_data = [
        {
            title: "kuon yagi portfolio clone",
            desc: "A clone of an award-winning personal site designed by Kuon Yagi, which received Honorable Mention on Awwwards. (Contents: Hunter x Hunter)",
            img: "kuon_yagi_portfolio_clone",
            url: "https://test-react-kuon.vercel.app/",
        },
        {
            title: "the craftsmen clone",
            desc: "A clone of a company portal owned by The Craftsmen, a web development company. It was awarded Site of the Day by Awwwards on May 27, 2022. (Contents: Star Wars)",
            img: "the_craftsmen_clone",
            url: "https://test-sass-thecraftsmen-kztnn6nyv-ooreeve.vercel.app/",
        },
        {
            title: "gravity fall introduction website",
            desc: "An introduction site for a cartoon Gravity Falls. The design is simple and straightforward, and it is written using basic html, css and vanilla JavaScript.",
            img: "gravity_fall_introduction_website",
            url: "https://test-vanilla-js-gravity-falls.vercel.app/index.html",
        },
        {
            title: "none",
            desc: "ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi",
            img: "website_img_sample",
            url: "https://www.youtube.com/",
        },
        {
            title: "none",
            desc: "ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi",
            img: "website_img_sample",
            url: "https://www.youtube.com/",
        },
    ];

    //animation_function---------------------------
    const setAni = () => {
        const box_ani = Array(box_data.length)
            .fill()
            .map((item, index) => {
                return {
                    animation: `works_box 2.5s ${0.5 + index * 0.3}s forwards`,
                };
            });

        setAniStyles({
            h1: { animation: "works_h1 2.5s forwards" },
            scroll_sign: { animation: "works_scroll_sign 1s 2.5s forwards" },
            box_container: {
                animation: "works_box_container 0.1s 2.5s forwards",
            },
            box: box_ani,
        });
    };

    useEffect(() => {
        //set_box_left_img_styles_random_number
        const left_and_top = Array(box_data.length)
            .fill()
            .map(() => {
                return {
                    left: Math.floor(-450 * Math.random()),
                    top: Math.floor(-200 * Math.random()),
                };
            });

        setBoxLeftImgRanNum(left_and_top);

        //set_in_animation
        if (first == true) {
            setTimeout(() => {
                setAni();
            }, 1500);
            setFirst(false);
        } else {
            setTimeout(() => {
                setAni();
            }, 500);
        }
    }, []);

    //1024:3.2  1180:3.7
    const boxRightSpace = (index) => {
        if (w_px.max_w_1200 && wHeight > 1000) {
            return (
                wWidth / 20 +
                index * 100 -
                scrollPosn / (0.0032 * wHeight - 0.082)
            );
        } else if (w_px.max_w_700 && wHeight < 700) {
            return wWidth / 20 + index * 100 - scrollPosn / 3.1;
        } else if (w_px.max_w_700 && wHeight < 900) {
            return wWidth / 20 + index * 100 - scrollPosn / 3.2;
        } else if (w_px.max_w_700) {
            return wWidth / 20 + index * 100 - scrollPosn / 3;
        } else if (w_px.max_w_1200) {
            return wWidth / 10 + index * 100 - scrollPosn / 2.75;
        } else {
            return wWidth / 10 + index * 100 - scrollPosn / 2.2;
        }
        //1667:2.2, 1100:2.75, 600:3
    };
    const box_elements = box_data.map((item, index) => {
        return (
            boxLeftImgRanNum.length > 0 &&
            aniStyles.box.length > 0 && (
                <Box
                    key={index}
                    no={index + 1}
                    title={item.title}
                    desc={item.desc}
                    img={item.img}
                    right={boxRightSpace(index)}
                    url={item.url}
                    left={boxLeftImgRanNum[index].left}
                    top={boxLeftImgRanNum[index].top}
                    ani={aniStyles.box[index].animation}
                />
            )
        );
    });

    //scroll_function---------------------------
    function handle_scroll(e) {
        const scroll_posn = e.target.scrollTop;
        //box_position
        setScrollPosn(scroll_posn);

        //scroll_sign_top & arrow
        if (scrollPosn > 30) {
            setArrowStyles((prev) => {
                return { ...prev, top: { height: 17, opacity: 1 } };
            });
            setScrollSignStyles((prev) => {
                return { ...prev, top: 83 };
            });
        } else {
            setArrowStyles((prev) => {
                return { ...prev, top: { height: 0, opacity: 0 } };
            });
            setScrollSignStyles((prev) => {
                return { ...prev, top: 100 };
            });
        }

        if (scrollPosn > 58 + (box_data.length - 3) * 223) {
            setArrowStyles((prev) => {
                return { ...prev, down: { height: 0, opacity: 0 } };
            });
        } else {
            setArrowStyles((prev) => {
                return { ...prev, down: { height: 17, opacity: 1 } };
            });
        }
    }

    return (
        <div className="works">
            <div
                className="scroll_sign"
                style={{
                    top: `${scrollSignStyles.top}px`,
                    animation: aniStyles.scroll_sign.animation,
                }}
            >
                <div
                    className="up"
                    style={{
                        opacity: `${arrowStyles.top.opacity}`,
                        height: `${arrowStyles.top.height}px`,
                    }}
                ></div>
                <div className="bar"></div>
                <div
                    className="down"
                    style={{
                        opacity: `${arrowStyles.down.opacity}`,
                        height: `${arrowStyles.down.height}px`,
                    }}
                ></div>
            </div>
            <div
                className="box_container"
                onScroll={handle_scroll}
                style={aniStyles.box_container}
            >
                {box_elements}
            </div>
            <h1 style={aniStyles.h1}>
                My<br></br>Wokrs
            </h1>
        </div>
    );
}

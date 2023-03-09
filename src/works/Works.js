import { React, useEffect, useState, useContext, useRef } from "react";
import { MyContext } from "../App";
import Box from "./Box";

export default function Works() {
    const [first, setFirst] = useContext(MyContext).first;
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
            desc: "The website is a clone of an award-winning personal site designed by Kuon Yagi, which received Honorable Mention on Awwwards.The contents of the site have been replaced with Hunter x Hunter manga materials.",
            img: "kuon_yagi_portfolio_clone",
            url: "https://test-react-kuon.vercel.app/",
        },
        {
            title: "the craftsmen clone",
            desc: "This website is a clone of a company portal owned by The Craftsmen, a web development company. It was awarded Site of the Day by Awwwards on May 27, 2022. The contents of the site have been replaced with Star Wars materials.",
            img: "the_craftsmen_clone",
            url: "https://test-sass-thecraftsmen-kztnn6nyv-ooreeve.vercel.app/",
        },
        {
            title: "gravity fall introduction website",
            desc: "This website is an introduction site for a well known cartoon Gravity Falls. The design is simple and straightforward without too many embellishments, and it is written using basic html, css and vanilla JavaScript.",
            img: "gravity_fall_introduction_website",
            url: "https://test-vanilla-js-gravity-falls.vercel.app/index.html",
        },
        {
            title: "none",
            desc: "ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra",
            img: "website_img_sample",
            url: "https://www.youtube.com/",
        },
        {
            title: "none",
            desc: "ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra",
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
                    left: Math.floor(-600 * Math.random()),
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
                    right={150 + index * 100 - scrollPosn / 2.25}
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
                My<br></br>Works
            </h1>
        </div>
    );
}

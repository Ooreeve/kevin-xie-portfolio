import { React, useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./App";

export default function Nav() {
    const [pageNow, setPageNow] = useContext(MyContext).pageNow;
    const [linksData, setLinksData] = useContext(MyContext).linksData;
    const [isChangeNow, setIsChangeNow] = useState(false);

    //cahnege page finction -----------------------------

    function changePage(event, para) {
        // if (event.target.dataset.name != pageNow && isChangeNow == false) {
        //     setPageNow(event.target.dataset.name);
        // }
        if (!para.now && isChangeNow == false) {
            setLinksData((prev) => {
                return prev.map((data) => {
                    if (para.name == data.name) {
                        return { ...data, now: true };
                    } else if (para.name != data.name && data.now == true) {
                        return { ...data, now: false };
                    } else {
                        return data;
                    }
                    // return para == data.name
                    //     ? { ...data, now: true }
                    //     : { ...data, now: false };
                });
            });
        }
    }

    useEffect(() => {
        setIsChangeNow(true);
        setTimeout(() => {
            setIsChangeNow(false);
        }, 2000);
    }, [linksData]);

    //prevent links default function ----------------
    const links = document.querySelectorAll(".link");

    function preventLinks(event) {
        event.preventDefault();
    }

    useEffect(() => {
        links.forEach((link) => {
            link.addEventListener("click", preventLinks);
        });
        setTimeout(() => {
            links.forEach((link) => {
                link.removeEventListener("click", preventLinks);
            });
        }, 2000);
    }, [linksData]);

    //creat links elements ----------------------------

    const links_bg_styles = { animation: "link_bg 0s 1s forwards" };

    function aniStyles(now) {
        if (now == true) {
            return { opacity: "0" };
        } else if (now == false) {
            return links_bg_styles;
        } else {
            return { opacity: "0.8" };
        }
    }

    const links_elements = linksData.map((data) => {
        const to = data.name == "home" ? "/" : "/" + data.name;
        return (
            <div key={data.name} className="link_container">
                <Link
                    data-name={data.name}
                    onClick={(event) => changePage(event, data)}
                    className={data.now ? "link page_now" : "link"}
                    to={to}
                >
                    {data.name}
                </Link>
                <div
                    key={data.name}
                    className="link_bg"
                    style={aniStyles(data.now)}
                ></div>
            </div>
        );
    });

    //links bg in animation ----------------------------
    const nav_ani_styles_in = { animation: "link_in 2s forwards" };

    function aniStylesIn(now) {
        if (now == true) {
            return nav_ani_styles_in;
        } else {
            return {};
        }
    }

    const links_bg_in = linksData.map((data) => {
        return (
            <div
                key={data.name}
                className="link_bg_in"
                style={aniStylesIn(data.now)}
            ></div>
        );
    });

    //links bg out animation ----------------------------

    const nav_ani_styles_out = { animation: "link_out 1s" };

    function aniStylesOut(now) {
        if (now == false) {
            return nav_ani_styles_out;
        } else {
            return {};
        }
    }

    const links_bg_out = linksData.map((data) => {
        return (
            <div
                key={data.name}
                className="link_bg_out"
                style={aniStylesOut(data.now)}
            ></div>
        );
    });

    //fake main in animation-----------------------------
    const [fakeMainStylesIn, setFakeMainStylesIn] = useState({});

    useEffect(() => {
        setFakeMainStylesIn({
            animation: "fake_main_in 2s",
        });
        setTimeout(() => {
            setFakeMainStylesIn({});
        }, 2000);
    }, [linksData]);

    //fake main out animation-----------------------------
    const [fakeMainStylesOut, setFakeMainStylesOut] = useState({});

    useEffect(() => {
        setFakeMainStylesOut({
            animation: "fake_main_out 1s",
        });
        setTimeout(() => {
            setFakeMainStylesOut({});
        }, 1000);
    }, [linksData]);

    return (
        <nav>
            {links_elements}
            {/* <div className="link_bg_container">{links_bg}</div> */}
            <div className="fake_main_curtain"></div>
            <div className="fake_main_in" style={fakeMainStylesIn}>
                {links_bg_in}
            </div>
            <div className="fake_main_out" style={fakeMainStylesOut}>
                {links_bg_out}
            </div>
        </nav>
    );
}

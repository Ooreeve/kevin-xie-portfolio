import { React, useContext, useEffect, useState, useRef } from "react";

import { Routes, Route } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import Works from "./Works";
import Contact from "./Contact";
import { MyContext } from "./App";

export default function Main() {
    const [linksData, setLinksData] = useContext(MyContext).linksData;
    const [mainChangeStyles, setMainChangeStyles] = useState({});

    useEffect(() => {
        setMainChangeStyles({ animation: "main_change 2s" });
        setTimeout(() => {
            setMainChangeStyles({});
        }, 2000);
    }, [linksData]);

    return (
        <main>
            <div className="content" style={mainChangeStyles}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <div className="content_bg"></div>
            </div>
        </main>
    );
}

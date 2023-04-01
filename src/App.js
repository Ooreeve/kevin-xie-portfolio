import { React, useState, createContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Background from "./Background";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export const MyContext = createContext();

export default function App() {
    const links_data = [
        { name: "home", now: null },
        { name: "about", now: null },
        { name: "works", now: null },
        { name: "contact", now: null },
    ];

    const [linksData, setLinksData] = useState(links_data);
    const [first, setFirst] = useState(true);
    const [wWidth, setWWidth] = useState(window.innerWidth);
    const [wHeight, setWHeight] = useState(window.innerHeight);
    const w_px = {
        max_w_1200: window.matchMedia("(max-width: 1200px)").matches,
        max_w_700: window.matchMedia("(max-width: 700px)").matches,
        max_h_700: window.matchMedia("(max-height: 700px)").matches,
        max_h_800: window.matchMedia("(max-height: 800px)").matches,
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWWidth(window.innerWidth);
            setWHeight(window.innerHeight);
        });
    }, []);

    return (
        <MyContext.Provider
            value={{
                linksData: [linksData, setLinksData],
                first: [first, setFirst],
                wWidth: wWidth,
                wHeight: wHeight,
                w_px: w_px,
            }}
        >
            <Router>
                <div className="app">
                    <Background />
                    <Header />
                    <Main />
                    <Footer />
                    <Cursor />
                </div>
            </Router>
        </MyContext.Provider>
    );
}

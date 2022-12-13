import { React, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, route } from "react-router-dom";
import Background from "./Background";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export const MyContext = createContext();

export default function App() {
    const links_data = [
        { name: "home", now: true },
        { name: "about", now: null },
        { name: "works", now: null },
        { name: "contact", now: null },
    ];

    const [pageNow, setPageNow] = useState("home");
    const [linksData, setLinksData] = useState(links_data);
    const [first, setFirst] = useState(true);

    return (
        <MyContext.Provider
            value={{
                pageNow: [pageNow, setPageNow],
                linksData: [linksData, setLinksData],
                first: [first, setFirst],
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

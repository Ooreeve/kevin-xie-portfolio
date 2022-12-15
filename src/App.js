import { React, useState, createContext } from "react";
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

    return (
        <MyContext.Provider
            value={{
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

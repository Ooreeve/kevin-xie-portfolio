import { React, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, route } from "react-router-dom";
import Background from "./Background";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
export const MyContext = createContext();

export default function App() {
    const [pageNow, setPageNow] = useState("home");

    return (
        <MyContext.Provider value={{ pageNow: [pageNow, setPageNow] }}>
            <Router>
                <div className="app">
                    <Background />
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </Router>
        </MyContext.Provider>
    );
}

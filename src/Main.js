import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Works from "./Works";
import Contact from "./Contact";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}

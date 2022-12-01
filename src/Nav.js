import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./App";

export default function Nav() {
    const [pageNow, setPageNow] = useContext(MyContext).pageNow;

    const links_names = ["home", "about", "works", "contact"];

    function changePage(e) {
        if (e.target.dataset.name != pageNow) {
            setPageNow(e.target.dataset.name);
        }
    }

    const link_style = { backgroundColor: "transparent", color: "white" };

    const links_elements = links_names.map((name) => {
        const to = name == "home" ? "/" : "/" + name;
        return (
            <div key={name} className="link_container">
                <Link
                    data-name={name}
                    onClick={changePage}
                    className="link"
                    to={to}
                    style={name == pageNow ? link_style : {}}
                >
                    {name}
                </Link>
                <div className="link_bg"></div>
            </div>
        );
    });

    return <nav>{links_elements}</nav>;
}

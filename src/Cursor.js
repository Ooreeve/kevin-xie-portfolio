import { React, useContext, useEffect, useState, useRef } from "react";

const Cursor = () => {
    //mouse move animation -----------------------
    const [cursorMoveStyles, setCursorMoveStyles] = useState({});
    const [cursorMoveStylesInner, setCursorMoveStylesInner] = useState({});

    useEffect(() => {
        function handleMouseMove(event) {
            setCursorMoveStyles((prev) => {
                return {
                    ...prev,
                    top: `${event.clientY - 15}px`,
                    left: `${event.clientX - 15}px`,
                };
            });

            setCursorMoveStylesInner((prev) => {
                return {
                    top: `${event.clientY - 14}px`,
                    left: `${event.clientX - 14}px`,
                };
            });
        }
        window.addEventListener("mousemove", handleMouseMove);
    }, []);

    //mouse click animation -----------------------
    useEffect(() => {
        function add_cursor_ani() {
            const cursor_outter = document.querySelector(".cursor");
            const cursor_inner = document.querySelector(".inner");
            cursor_outter.classList.add("cursor_scale_ani");
            cursor_inner.classList.add("cursor_scale_ani");
            document.removeEventListener("click", add_cursor_ani);

            setTimeout(() => {
                cursor_outter.classList.remove("cursor_scale_ani");
                cursor_inner.classList.remove("cursor_scale_ani");
                document.addEventListener("click", add_cursor_ani);
            }, 700);
        }
        document.addEventListener("click", add_cursor_ani);
    }, []);

    return (
        <>
            <div style={cursorMoveStyles} className="cursor"></div>
            <div style={cursorMoveStylesInner} className="inner"></div>
        </>
    );
};

export default Cursor;
